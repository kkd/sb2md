const path = './life-kaizen.json';
const site = require(path);
const fs = require('fs');

const site2sb = () => {
  console.log(site.pages);
  fs.mkdirSync('pages');

  for (let i in site.pages) {
    const page = site.pages[i]
    const content = JSON.stringify(page);
    const fileName = page.title.replaceAll('/','.') + '.json'
    fs.writeFileSync('pages/' + fileName, content);
    console.log("wrote " + page.title + ".json");
  }
}

site2sb();
