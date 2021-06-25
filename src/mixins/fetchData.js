// 混入模式，提供一个远程获取数据的方法；
export default function(defaultValue = null) {
  return {
    data() {
      return {
        isLoading: true,
        data: defaultValue
      }
    },
    async created() {
      this.data = await this.fetchData()
      this.isLoading = false
    }
  }
}
