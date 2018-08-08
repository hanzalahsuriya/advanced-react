class DataApi {

  constructor(rawData) {
    this.rawData = rawData;
  }

  mapIntoObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  getAtricles() {
    return this.mapIntoObject(this.rawData.articles);
  }
  getAuthors() {
    return this.mapIntoObject(this.rawData.authors);
  }
}

export default DataApi;