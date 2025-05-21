const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'MMPI-II-RF', 'index.html');
const stylePath = path.join(__dirname, 'MMPI-II-RF', 'style.css');
const scriptPath = path.join(__dirname, 'MMPI-II-RF', 'script.js');

function assert(condition, message) {
  if (!condition) {
    console.error('Test failed:', message);
    process.exit(1);
  }
}

const html = fs.readFileSync(indexPath, 'utf8');
assert(html.includes('<link href="style.css" rel="stylesheet"'), 'index.html should reference style.css');
assert(html.includes('<script src="script.js"></script>'), 'index.html should reference script.js');

assert(fs.existsSync(stylePath), 'style.css should exist');
assert(fs.existsSync(scriptPath), 'script.js should exist');

console.log('All tests passed.');
