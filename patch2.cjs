const fs = require('fs');
const path = require('path');

const jsFile = path.join(__dirname, 'assets', 'index-DiGLAFqQ.js');

if (fs.existsSync(jsFile)) {
  let content = fs.readFileSync(jsFile, 'utf8');
  
  // Set React Router basename
  content = content.replace('US=()=>a.jsx($y,{children:', 'US=()=>a.jsx($y,{basename:"/Locksmith2",children:');
  
  // Fix image paths
  content = content.replace(/"\/(assets\/[^"]*)"/g, '"/Locksmith2/$1"');

  fs.writeFileSync(jsFile, content, 'utf8');
  console.log('Successfully applied basename and asset paths.');
} else {
  console.error('JS file not found');
}
