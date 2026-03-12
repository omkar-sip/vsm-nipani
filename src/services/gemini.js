/**
 * Gemini AI Service — Placeholder
 * Requires VITE_GEMINI_API_KEY in .env
 *
 * Potential features:
 * 1. Smart job description generation from voice/text
 * 2. Skill assessment chatbot for workers
 * 3. Dynamic pricing recommendations
 * 4. Review sentiment analysis
 * 5. Worker-job matching optimization
 */

import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

let genAI = null;

export function getGeminiClient() {
  if (!API_KEY || API_KEY === 'your_gemini_api_key_here') {
    console.warn('Gemini API key not configured. AI features are disabled.');
    return null;
  }
  if (!genAI) {
    genAI = new GoogleGenerativeAI(API_KEY);
  }
  return genAI;
}

/**
 * Generate a smart job description from basic inputs.
 * @param {string} category - e.g., "Plumbing"
 * @param {string} issue - e.g., "Pipe burst"
 * @param {string} location - e.g., "Mysuru"
 * @returns {Promise<string>} AI-generated job description
 */
export async function generateJobDescription(category, issue, location) {
  const client = getGeminiClient();
  if (!client) return '';

  const model = client.getGenerativeModel({ model: 'gemini-pro' });
  const prompt = `Write a brief, clear job description for a ${category} job: "${issue}" in ${location}, India. Keep it under 50 words, practical and direct.`;

  const result = await model.generateContent(prompt);
  return result.response.text();
}
