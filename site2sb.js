const path = './test/test.json';
const site = require(path);
const fs = require('fs');

const site2sb = () => {
  console.log(site.pages);
  fs.mkdirSync('pages');
  /*
  for (let i=0; i < site.pages.length; i++) {
    console.log(site.pages[i].title);
  }
  */
  for (let i in site.pages) {
    const page = site.pages[i]
    const content = JSON.stringify(page);
    fs.writeFileSync('pages/' + page.title + ".json", content);
    console.log("wrote " + page.title + ".json");
  }
}

site2sb();

// exports.site2sb = site2sb;