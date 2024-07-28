import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'dist', 'index.html');
let html = fs.readFileSync(filePath, 'utf-8');

const scriptRegex = /<script type="module" crossorigin src="\/assets\/[^"]+\.js"><\/script>/;
const scriptMatch = html.match(scriptRegex);

if (scriptMatch) {
  const scriptTag = scriptMatch[0];

  html = html.replace(scriptTag, '');

  html = html.replace('</body>', `${scriptTag}</body>`);
}

fs.writeFileSync(filePath, html, 'utf-8');
console.log('Post-build script executed successfully.');
