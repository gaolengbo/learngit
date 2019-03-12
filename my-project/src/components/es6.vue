 <template>
  <div>
    <div>
      <div v-for="item in arr" :key="item.id" @click="add(item.id)">
        {{ item.id }}
      </div>
    </div>
    <el-button>确定{{ num }} </el-button>
    <el-input></el-input>
  </div>
</template>
 
 <script>
import Bus from './bus'
export default {
  data() {
    return {
      arr: [
        {
          id: '111111'
        },
        {
          id: '2222222'
        },
        {
          id: '333333333'
        }
      ],
      list: [],
      num: 1
    }
  },
  computed: {
    // val() {
    //   return Bus.val
    // }
  },
  methods: {
    add(id) {
      // this.list[id] = {
      //   id
      // }
      this.list.push(id)
      console.log('---', this.list)
      // this.$message({
      //   type: 'success',
      //   message: '请求成功'
      // })
    }
  },
  mounted() {
    Bus.$on('update', num => {
      this.num = num
      console.log('---', this)
    })
  }
}
</script>
 
<style lang="scss" scoped>
</style>
