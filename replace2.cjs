const fs = require('fs');
const path = require('path');

const filesToProcess = [
  path.join(__dirname, 'index.html'),
  path.join(__dirname, 'public', 'assets', 'index-DiGLAFqQ.js')
];

const replacements = [
  { search: /Right Away Locksmith/gi, replace: 'KEYS & CO .' },
  { search: /Right Away/gi, replace: 'KEYS & CO .' },
  { search: /Right Way Locksmith/gi, replace: 'KEYS & CO .' },
  { search: /Right Way/gi, replace: 'KEYS & CO .' },
  { search: /locksmithrightaway\.com/gi, replace: 'keysandco.com' },
  { search: /info@locksmithrightaway/gi, replace: 'info@keysandco' },
  { search: /locksmithrightaway/gi, replace: 'keysandco' }
];

filesToProcess.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    replacements.forEach(rep => {
      content = content.replace(rep.search, rep.replace);
    });
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Processed ${filePath}`);
  } else {
    console.error(`File not found: ${filePath}`);
  }
});
