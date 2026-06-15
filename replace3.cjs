const fs = require('fs');
const path = require('path');

const filesToProcess = [
  path.join(__dirname, 'index.html'),
  path.join(__dirname, 'public', 'index.html'),
  path.join(__dirname, 'public', 'assets', 'index-DiGLAFqQ.js')
];

const replacements = [
  { search: /Right Away Locksmith/gi, replace: 'KEYS & CO .' },
  { search: /Right Away/gi, replace: 'KEYS & CO .' },
  { search: /Right Way Locksmith/gi, replace: 'KEYS & CO .' },
  { search: /Right Way/gi, replace: 'KEYS & CO .' },
  { search: /Right%20Away%20Locksmith/gi, replace: 'KEYS%20%26%20CO%20.' },
  { search: /locksmithrightaway\.com/gi, replace: 'keysandco.com' },
  { search: /info@locksmithrightaway\.com/gi, replace: 'info@keysandco.com' },
  { search: /locksmithrightaway/gi, replace: 'keysandco' },
  { search: /\(303\) 479-3344/gi, replace: '+1839279722' },
  { search: /3034793344/gi, replace: '1839279722' },
  { search: /Aurora, CO & Denver Metro/gi, replace: 'Texas 8303' },
  { search: /Aurora, CO &amp; Denver Metro/gi, replace: 'Texas 8303' },
  { search: /Aurora, Colorado/gi, replace: 'Texas 8303' },
  { search: /Aurora, CO/gi, replace: 'Texas 8303' },
  { search: /Denver Metro/gi, replace: 'Texas 8303' },
  { search: /Aurora & Denver/gi, replace: 'Texas 8303' },
  { search: /Aurora, Denver, Parker, Castle Rock & more/gi, replace: 'Texas 8303' },
  { search: /Aurora, Denver/gi, replace: 'Texas 8303' },
  { search: /Aurora/gi, replace: 'Texas 8303' },
  { search: /Denver/gi, replace: 'Texas 8303' }
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
    console.log(`Skipped ${filePath} (not found)`);
  }
});
