const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');
const publicDir = path.join(__dirname, '..', 'public');

function getAllFiles(dir, extFilter = null, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, extFilter, fileList);
    } else {
      if (!extFilter || extFilter.some(ext => filePath.endsWith(ext))) {
        fileList.push(filePath);
      }
    }
  }
  return fileList;
}

const sourceFiles = getAllFiles(srcDir, ['.jsx', '.js', '.css', '.html']).filter(f => !f.includes('assets'));
const indexHtml = path.join(__dirname, '..', 'index.html');
if (fs.existsSync(indexHtml)) sourceFiles.push(indexHtml);

const sourceContents = sourceFiles.map(f => fs.readFileSync(f, 'utf-8'));

const publicImages = getAllFiles(publicDir, ['.png', '.jpg', '.jpeg', '.svg', '.mp4', '.webm', '.gif', '.webp']);
const srcImages = getAllFiles(path.join(srcDir, 'assets'), ['.png', '.jpg', '.jpeg', '.svg', '.mp4', '.webm', '.gif', '.webp']);
const allImages = [...publicImages, ...srcImages];

const unusedImages = [];
for (const img of allImages) {
  const basename = path.basename(img);
  let used = false;
  for (const content of sourceContents) {
    if (content.includes(basename)) {
      used = true;
      break;
    }
  }
  if (!used) {
    unusedImages.push(img);
  }
}

const jsFiles = getAllFiles(srcDir, ['.jsx', '.js']).filter(f => !f.includes('main.jsx') && !f.includes('App.jsx'));
const unusedJsFiles = [];
for (const js of jsFiles) {
  const basename = path.basename(js, path.extname(js));
  if (basename === 'constants' || basename === 'index') continue;
  let used = false;
  for (const f of sourceFiles) {
    if (f === js) continue;
    const content = fs.readFileSync(f, 'utf-8');
    if (content.includes(basename)) {
      used = true;
      break;
    }
  }
  if (!used) {
    unusedJsFiles.push(js);
  }
}

console.log('Unused Images:');
unusedImages.forEach(i => console.log('  ' + i.replace(path.join(__dirname, '..') + '\\', '')));
console.log('\nUnused JS/JSX files:');
unusedJsFiles.forEach(i => console.log('  ' + i.replace(path.join(__dirname, '..') + '\\', '')));
