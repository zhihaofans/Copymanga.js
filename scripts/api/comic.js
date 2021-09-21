const httpLib = require("../../NeXT/http");
class ComicDetail {
  constructor(comicId) {
    this.COMIC_ID = comicId;
  }
  getData() {
    const http = new httpLib(),
      getResult = http.get(
        `https://api.copymanga.com/api/v3/comic2/${this.COMIC_ID}?platform=1`
      );
    $console.warn(getResult);
  }
}
class Comic {
  constructor(comicId) {
    this.COMIC_ID = comicId;
    this.comicDetail = new ComicDetail(comicId);
  }
}

module.exports = Comic;
