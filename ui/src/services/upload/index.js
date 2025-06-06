import UploadApi from "./uploadApi";

class UploadService {
  constructor() {
    this.uploadApi = new UploadApi();
    this.uploadAxios = this.uploadApi.axiosInstance;
  }

  setToken(token) {
    this.uploadApi.setToken(token);
  }

  uploadFile(data) {
    return this.uploadAxios.post("/upload", data);
    // return Promise.resolve("uploaded");
  }
}

export default new UploadService();
