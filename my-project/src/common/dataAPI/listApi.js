import commonUtils from "@/common/utils/common";
const BASEURL = commonUtils.getRegisty("TASK_URL")


export default class faceControl {
  /**
   *
   * @param {*} params
   */
  async getFaceList(faceData, params) {
    let result = await commonUtils.axiosData(
      faceData,
      "GET",
      params,
      BASEURL
    );
    return result.data;
  };

  async uploadFile(params) {
    let result = await commonUtils.axiosData(
      `/upload/uploadFile?buckettest&fileName=true`,
      // 第二种参数在配置里
      "GET",
      params,
      BASEURL
    )
    return result.data;
  }
}
