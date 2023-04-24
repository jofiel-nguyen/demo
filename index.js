const readline = require('readline');
const fs = require('fs');
const svgUtils = require('svgutils');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const MAX_TEXT_LENGTH = 3;
const SHAPE_CHOICES = ['circle', 'triangle', 'square'];

function prompt(question) {
  return new Promise(resolve => {
    rl.question(question, resolve);
  });
}

async function main() {
  const text = await prompt(`Enter up to ${MAX_TEXT_LENGTH} characters: `);
  const color = await prompt('Enter text color (keyword or hexadecimal): ');
  const shape = await prompt(`Choose a shape (${SHAPE_CHOICES.join(', ')}): `);
  const shapeColor = await prompt('Enter shape color (keyword or hexadecimal): ');

  // Create SVG file based on user input
  const svgData = createSVG(text, color, shape, shapeColor);
  fs.writeFileSync('logo.svg', svgData);

  console.log('Generated logo.svg');
  rl.close();
}

main().catch(err => console.error(err));
