const fs = require('fs');
const path = require('path');

const avatars = [
  { name: 'Marie Curie', initials: 'MC', color: '#14b8a6', filename: 'marie-curie.svg' }, // Teal
  { name: 'Rosalind Franklin', initials: 'RF', color: '#eab308', filename: 'rosalind-franklin.svg' }, // Yellow
  { name: 'Leonardo da Vinci', initials: 'LD', color: '#ef4444', filename: 'leonardo-da-vinci.svg' }, // Red
  { name: 'Albert Einstein', initials: 'AE', color: '#3b82f6', filename: 'albert-einstein.svg' }, // Blue
  { name: 'Isaac Newton', initials: 'IN', color: '#a855f7', filename: 'isaac-newton.svg' }, // Purple
  { name: 'Thomas Edison', initials: 'TE', color: '#f97316', filename: 'thomas-edison.svg' }, // Orange
  { name: 'Ada Lovelace', initials: 'AL', color: '#22c55e', filename: 'ada-lovelace.svg' }, // Green
  { name: 'Jane Goodall', initials: 'JG', color: '#ec4899', filename: 'jane-goodall.svg' }, // Pink
  { name: 'Charles Darwin', initials: 'CD', color: '#06b6d4', filename: 'charles-darwin.svg' }, // Cyan
  { name: 'Nikola Tesla', initials: 'NT', color: '#6366f1', filename: 'nikola-tesla.svg' }, // Indigo
  { name: 'Stephen Hawking', initials: 'SH', color: '#84cc16', filename: 'stephen-hawking.svg' }, // Lime
  { name: 'Malala Yousafzai', initials: 'MY', color: '#f59e0b', filename: 'malala-yousafzai.svg' }, // Amber
];

const outputDir = path.join(__dirname, '../public/images/avatars');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

avatars.forEach(avatar => {
  const svgContent = `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" fill="${avatar.color}"/>
  <text x="50%" y="50%" dy=".35em" text-anchor="middle" font-family="Arial, sans-serif" font-size="80" font-weight="bold" fill="white">${avatar.initials}</text>
</svg>`;

  fs.writeFileSync(path.join(outputDir, avatar.filename), svgContent);
  console.log(`Generated ${avatar.filename}`);
});
