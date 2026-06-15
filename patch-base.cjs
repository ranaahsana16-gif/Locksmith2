const fs = require('fs');
const path = require('path');

const jsFile = path.join(__dirname, 'assets', 'index-DiGLAFqQ.js');

if (fs.existsSync(jsFile)) {
  let content = fs.readFileSync(jsFile, 'utf8');
  
  // Replace all href="/something" with href="/Locksmith2/something"
  content = content.replace(/href:"\/(?!Locksmith2)([^"]*)"/g, 'href:"/Locksmith2/$1"');
  
  // Replace all path="/something" with path="/Locksmith2/something"
  content = content.replace(/path:"\/(?!Locksmith2)([^"]*)"/g, 'path:"/Locksmith2/$1"');
  
  // Replace all "/assets/something" with "/Locksmith2/assets/something"
  content = content.replace(/"\/(assets\/[^"]*)"/g, '"/Locksmith2/$1"');

  // Also replace any React Router 'to="/something"' if it exists
  content = content.replace(/to:"\/(?!Locksmith2)([^"]*)"/g, 'to:"/Locksmith2/$1"');

  fs.writeFileSync(jsFile, content, 'utf8');
  console.log('Successfully patched routes and asset paths for /Locksmith2/');
} else {
  console.error('JS file not found');
}
