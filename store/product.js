const defaultState = {
  products: [],
}

export const state = () => ({ ...defaultState })

export const mutations = {
  SET_PRODUCTS(state, data) {
    state.products = data
  },
}
export const actions = {
  /**
   * Fetch Product
   *
   *
   */
  async fetchProduct({ commit }) {
    let res = await this.$api.product.getList()

    const success = res.status === 200

    if (success) {
      commit('SET_PRODUCTS', res.data)
    }

    if (!success) {
      console.log('err', err)
    }
  },
}

export const getters = {
  products(state) {
    return state.products
  },
}
