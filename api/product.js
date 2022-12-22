export default (ctx) => {
  let { $axios } = ctx
  let url = 'products'
  return {
    async getList() {
      return await $axios.get(url)
    },
  }
}
