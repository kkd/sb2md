const path = './life-kaizen.json';
const site = require(path);
const fs = require('fs');
const { sb2md } = require('./lib/sb2md');

const site2sb = () => {
  console.log(site.pages);
  fs.mkdirSync('pages');

  for (let i in site.pages) {
    const page = site.pages[i]

    //一行目は削除する（タイトルなので）
    const lines = page.lines.splice(0,1);

    // MDに変換
    const content = sb2md(page.lines.join('\n'))

    //ファイル名設定（スラッシュは.に変換）
    const fileName = page.title.replaceAll('/','.') + '.md'
    fs.writeFileSync('pages/' + fileName, content);
    console.log("wrote " + page.title + ".md");
  }
}

site2sb();
