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
  getComicInfo() {
    const comicData = this.getData(),
      comicInfo =
        comicData != undefined && comicData.code == 200
          ? comicData.result.comic
          : undefined;
    return comicInfo;
  }
  async getChapterList() {
    const http = new httpLib(),
      getResult = await http.get(
        `https://api.copymanga.com/api/v3/comic/${this.COMIC_ID}/group/default/chapters?offset=0`
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
