const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateStory(character, place, theme) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { 
            role: "system", 
            content: "You are a talented children's book author. Write engaging, imaginative, and educational stories in English." 
        },
        { 
            role: "user", 
            content: `Write a story for a 8-year-old child. 
            Character: ${character}
            Location: ${place}
            Theme: ${theme}
            Length: Around 300 words. 
            Make it atmospheric and end with a meaningful moral.` 
        },
      ],
      max_tokens: 700, 
      temperature: 0.8,
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error("OpenAI Error:", error.message);
    return "The storybook is stuck. Please try again!";
  }
}
module.exports = { generateStory };