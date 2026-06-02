const fs = require('fs');
let css = fs.readFileSync('src/app/globals.css', 'utf8');
css = '@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap");\n' + css;
fs.writeFileSync('src/app/globals.css', css);

let layout = fs.readFileSync('src/app/layout.tsx', 'utf8');
layout = layout.replace('</head>', '  <link href="https://db.onlinewebfonts.com/c/04e6981992c0e2e7642af2074ebe3901?family=Helvetica+Now+Display+Bold" rel="stylesheet" type="text/css"/>\n      </head>');
fs.writeFileSync('src/app/layout.tsx', layout);
