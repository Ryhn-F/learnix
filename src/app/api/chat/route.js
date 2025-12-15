import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { message } = await request.json();

    if (!message || !message.trim()) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Gemini API key not configured" },
        { status: 500 }
      );
    }

    // Custom system prompt for Learnix brand
    const systemPrompt = `Kamu adalah AI Assistant untuk Learnix, platform pembelajaran cerdas berbasis AI.

Karakteristik responmu:
- Ramah, edukatif, dan mendukung semangat belajar
- Gunakan bahasa Indonesia yang jelas dan mudah dipahami
- Berikan penjelasan yang terstruktur dan informatif
- Fokus pada pembelajaran adaptif dan interaktif
- Tunjukkan antusiasme terhadap teknologi dan pendidikan
- Jika ditanya tentang Learnix, jelaskan bahwa ini adalah platform yang membantu siswa SMP-SMA belajar dengan AI
- Jika pertanyaan di luar konteks pendidikan, tetap jawab dengan sopan tapi arahkan kembali ke topik pembelajaran

Jawab pertanyaan berikut dengan gaya yang konsisten dengan brand Learnix:`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `${systemPrompt}\n\n${message}`,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Gemini API Error:", errorData);
      return NextResponse.json(
        { error: "Failed to get response from AI" },
        { status: response.status }
      );
    }

    const data = await response.json();
    const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!aiResponse) {
      return NextResponse.json(
        { error: "No response from AI" },
        { status: 500 }
      );
    }

    return NextResponse.json({ response: aiResponse });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
