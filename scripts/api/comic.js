const httpLib = require("../../NeXT/http");
class ComicDetail {
  constructor(comicId) {
    this.COMIC_ID = comicId;
  }
  async getData() {
    const http = new httpLib(),
      getResult = await http.get(
        `https://api.copymanga.com/api/v3/comic2/${this.COMIC_ID}?platform=1`
      );
    $console.warn(getResult);
    return getResult.error ? undefined : getResult.data;
  }
}
class Comic {
  constructor(comicId) {
    this.COMIC_ID = comicId;
    this.comicDetail = new ComicDetail(comicId);
  }
}

module.exports = Comic;
