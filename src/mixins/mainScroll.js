export default function(refValue) {
  return {
    mounted() {
      // 监听滚动事件
      this.$bus.$on("setMainScroll", this.handleSetMainScroll)
      this.$refs[refValue].addEventListener("scroll", this.handleScroll)
    },
    
    beforeDestroy() {
      this.$bus.$emit("mainScroll")
      this.$refs[refValue].removeEventListener("scroll", this.handleScroll)
      this.$bus.$off("setMainScroll", this.handleSetMainScroll)
    },
    methods: {
      handleSetMainScroll(scrollTop) {
        this.$refs[refValue].scrollTop = scrollTop;
      },
      handleScroll() {
        this.$bus.$emit("mainScroll", this.$refs[refValue]);
      }
    }
  }
}