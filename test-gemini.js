const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs');
require('dotenv').config({ path: '.env.local' });

async function testGemini() {
  console.log('\n=== Testing Google Gemini API ===\n');

  // Check API token
  const hasToken = !!process.env.GOOGLE_AI_API_KEY;
  console.log(`GOOGLE_AI_API_KEY configured: ${hasToken ? 'YES ✓' : 'NO ⚠️'}\n`);

  if (!hasToken) {
    console.error('❌ Missing GOOGLE_AI_API_KEY!');
    console.log('\nPlease add GOOGLE_AI_API_KEY to your .env.local file.\n');
    return;
  }

  try {
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-3.1-flash-image-preview' });

    const prompt = 'Falcon 9 rocket launching into space, photorealistic, high quality';

    console.log(`Testing with prompt: "${prompt}"`);
    console.log('Generating image (this may take 5-10 seconds)...\n');

    const result = await model.generateContent({
      contents: [{
        role: 'user',
        parts: [{
          text: prompt
        }]
      }],
      generationConfig: {
        responseModalities: ['IMAGE']
      }
    });

    const response = await result.response;

    // Get the image from the response
    if (response.candidates && response.candidates[0]?.content?.parts?.[0]) {
      const part = response.candidates[0].content.parts[0];

      // Check if the part has inline data (base64)
      if (part.inlineData) {
        const { mimeType, data } = part.inlineData;

        console.log('✓ Image generated successfully!');
        console.log(`  Format: ${mimeType}\n`);

        // Save the image
        const buffer = Buffer.from(data, 'base64');
        const extension = mimeType.split('/')[1] || 'png';
        const filename = `test-gemini-output.${extension}`;

        fs.writeFileSync(filename, buffer);
        console.log(`✓ Image saved to ${filename} (${buffer.length} bytes)\n`);

        console.log('=== TEST SUCCESSFUL ===');
        console.log('\nYou can now use Google Gemini for automatic image generation!');
        console.log('Free tier: 500 images per day, no credit card needed.\n');
      } else {
        console.error('❌ No inline data in response');
        console.log('Response structure:', JSON.stringify(response, null, 2));
      }
    } else {
      console.error('❌ No candidates in response');
      console.log('Response:', JSON.stringify(response, null, 2));
    }
  } catch (error) {
    console.error('❌ Error:', error.message);

    if (error.message.includes('API key')) {
      console.log('\n⚠️  Invalid API key. Please check your GOOGLE_AI_API_KEY.');
      console.log('Get your API key at: https://aistudio.google.com/apikey\n');
    } else if (error.message.includes('quota')) {
      console.log('\n⚠️  Quota exceeded. Wait for the daily limit to reset.');
    } else {
      console.log('\nFull error:', error);
    }
  }
}

testGemini();
