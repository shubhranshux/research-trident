const fs = require('fs');
const path = require('path');

const dir = 'd:/OFFICE/Reasearh-trident/research-trident/src/pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

const images = [
    '/slide/innovation Starts in Lab.jpeg',
    '/slide/Your Future Starts Here.png',
    '/images/biotech_hero.png',
    '/images/programming-lab-img-1.jpeg',
    '/images/programming-lab-img-2.jpeg',
    '/indian_board_meeting.png',
    '/images/biotech_lab_1.png',
    '/images/biotech_lab_2.png',
    '/images/mba_department.jpg',
    '/images/biotech_overview.jpg'
];

let imgIndex = 0;

files.forEach(f => {
  const filePath = path.join(dir, f);
  let content = fs.readFileSync(filePath, 'utf8');
  
  const matches = content.match(/https:\/\/images\.unsplash\.com\/[^`\"\' ]+/g);
  if (matches) {
    let newContent = content;
    matches.forEach(match => {
        const replacement = images[imgIndex % images.length];
        newContent = newContent.replace(match, replacement);
        imgIndex++;
    });
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Replaced Unsplash links in ${f}`);
  }
});
console.log('Done replacing Unsplash URLs.');
