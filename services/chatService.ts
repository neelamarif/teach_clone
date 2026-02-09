import { generateResponse } from "./geminiService";

export async function sendMessage(message: string) {
  try {
    const response = await generateResponse(message);
    return response;
  } catch (error) {
    console.error("Gemini failed, using demo response:", error);

    return {
      text: "This is a demo AI response. Live Gemini API is temporarily unavailable during hackathon submission."
    };
  }
}
