export const state = () => ({
  carts: [],
  totalItem: 0,
})

export const mutations = {
  SET_CART(state, data) {
    state.carts = data
  },
  COUNT_TOTAL(state, data) {
    state.totalItem = data
  },
  ADD_ITEM(state) {
    state.totalItem += 1
  },
}
export const actions = {
  /**
   * Fetch Cart
   **/
  async fetchCart({ commit }) {
    const res = await this.$api.cart.get()
    const success = res.status === 200

    if (success) {
      commit('SET_CART', res.data)
      commit('COUNT_TOTAL', res.data?.length)
    }

    if (!success) {
      console.log('err', err)
    }
  },

  /**
   * Add To Card
   **/
  async addToCart({}, payload) {
    const res = await this.$api.cart.post(payload)
    return res
  },

  addItem({ commit }) {
    commit('ADD_ITEM')
  },
}

export const getters = {
  carts(state) {
    return state.carts
  },
  total(state) {
    return state.totalItem
  },
}
