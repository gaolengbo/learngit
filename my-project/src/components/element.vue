 <template>
  <div>
    <!-- <el-input :value="location"></el-input> -->
    <el-button>获取定位 </el-button>
  </div>
</template>
 
 <script>
import Axios from '@/api/index'
export default {
  data() {
    return {
      location: ''
    }
  },
  mounted() {},
  methods: {}
}
</script>
 
<style lang="scss" scoped>
</style>
