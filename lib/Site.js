const {Document} = require("./Document");

class Site {
  constructor(path) {
    this.path_ = path;
    this.site_ = require(path);
  }

  pages() {
    console.log(this.site_.name);
    return this.site_.pages;
  }

}

exports.Site = Site;