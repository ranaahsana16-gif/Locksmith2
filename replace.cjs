const fs = require('fs');
const path = require('path');

const filesToProcess = [
  path.join(__dirname, 'index.html'),
  path.join(__dirname, 'public', 'assets', 'index-DiGLAFqQ.js')
];

const replacements = [
  { search: /Right Away Locksmith/g, replace: 'KEYS & CO .' },
  { search: /Right Away/g, replace: 'KEYS & CO .' },
  { search: /\(303\) 479-3344/g, replace: '+1839279722' },
  { search: /3034793344/g, replace: '1839279722' },
  { search: /Aurora, CO & Denver Metro/g, replace: 'Texas 8303' },
  { search: /Aurora, CO &amp; Denver Metro/g, replace: 'Texas 8303' },
  { search: /Aurora, Colorado/g, replace: 'Texas 8303' },
  { search: /Aurora, CO/g, replace: 'Texas 8303' },
  { search: /Denver Metro/g, replace: 'Texas 8303' }
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
