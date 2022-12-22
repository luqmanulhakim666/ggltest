export default (ctx) => {
  let { $axios } = ctx
  let url = 'carts'
  return {
    async get() {
      return await $axios.get(url)
    },
    async post(payload) {
      return await $axios.post(url, payload)
    },
  }
}
