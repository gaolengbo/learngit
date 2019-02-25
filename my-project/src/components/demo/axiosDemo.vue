<script>
import API from "@/common/dataAPi/listApi.js";
let face = new API();
export default {
  data() {
    return {
      data: []
    };
  },
  methods: {   // 第一种，参数在组件里
    reduceClick() {
      let params = {};
      let faceData =
        "/basPhoto/getPhotoByOwnerId?photoPwnerId=p100267&enableFlag=true";
      face.getFaceList(faceData, params).then(data => {
        console.log(data);
      });
    },
    addClick() {
      let params = {
        pageSize: this.pageSize,
        paggNumber: this.paggNumber
      };
      face.uploadFile(params).then(res => {
        console.log(res);
        let newArray = res.list.map(item => {
          return {
            code: item.code,
            id: item.id
          };
        });
      });
    }
  }
};
</script>