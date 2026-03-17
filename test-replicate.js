const Replicate = require('replicate');
const fs = require('fs');
const fetch = require('node-fetch');
require('dotenv').config({ path: '.env.local' });

async function testReplicate() {
  console.log('\n=== Testing Replicate API ===\n');

  // Check API token
  const hasToken = !!process.env.REPLICATE_API_TOKEN;
  console.log(`REPLICATE_API_TOKEN configured: ${hasToken ? 'YES ✓' : 'NO ⚠️'}\n`);

  if (!hasToken) {
    console.error('❌ Missing REPLICATE_API_TOKEN!');
    console.log('\nPlease read REPLICATE_SETUP.md for setup instructions.\n');
    return;
  }

  try {
    const replicate = new Replicate({
      auth: process.env.REPLICATE_API_TOKEN,
    });

    const prompt = 'Falcon 9 rocket launching into space, photorealistic, high quality';

    console.log(`Testing with prompt: "${prompt}"`);
    console.log('Generating image (this may take 5-10 seconds)...\n');

    const output = await replicate.run(
      "black-forest-labs/flux-schnell",
      {
        input: {
          prompt: prompt,
          aspect_ratio: "16:9",
          output_format: "jpg",
          output_quality: 80,
        }
      }
    );

    if (output && output[0]) {
      console.log('✓ Image generated successfully!');
      console.log(`  URL: ${output[0]}\n`);

      // Download and save
      console.log('Downloading image...');
      const response = await fetch(output[0]);
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      fs.writeFileSync('test-replicate-output.jpg', buffer);
      console.log(`✓ Image saved to test-replicate-output.jpg (${buffer.length} bytes)\n`);

      console.log('=== TEST SUCCESSFUL ===');
      console.log('\nYou can now use Replicate for automatic image generation!');
      console.log('Your $5 free credits can generate approximately 900 images.\n');
    } else {
      console.error('❌ No output received from Replicate');
    }
  } catch (error) {
    console.error('❌ Error:', error.message);

    if (error.message.includes('authentication')) {
      console.log('\n⚠️  Authentication failed. Please check your REPLICATE_API_TOKEN.');
    } else if (error.message.includes('credits') || error.message.includes('billing')) {
      console.log('\n⚠️  Out of credits. Visit https://replicate.com/account/billing');
    }
  }
}

testReplicate();
