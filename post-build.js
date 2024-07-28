const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'dist', 'index.html');
let html = fs.readFileSync(filePath, 'utf-8');

// Regular expression to find the script tag in the head
const scriptRegex = /<script type="module" crossorigin src="\/assets\/[^"]+\.js"><\/script>/;
const scriptMatch = html.match(scriptRegex);

if (scriptMatch) {
  const scriptTag = scriptMatch[0];

  // Remove the script tag from the head
  html = html.replace(scriptTag, '');

  // Inject the script tag before the closing body tag
  html = html.replace('</body>', `${scriptTag}</body>`);
}

// Write the modified HTML back to the file
fs.writeFileSync(filePath, html, 'utf-8');
console.log('Post-build script executed successfully.');
