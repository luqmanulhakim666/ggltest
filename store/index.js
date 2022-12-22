export const state = () => ({
  meta: 'Home',
  snackbars: [
    /**
     * @param {String} id - id from setTimeout
     * @param {String} msg - message
     * @param {String} background - vuetify or html colors
     * @param {String} color - vuetify or html colors
     * @param {Number} timeout - timeout in ms
     * @param {String} icon - icon
     * @param {Number} show - show snackbar ui
     */
    // { id: '', msg: 'Hello', color: 'success', timeout: 5000 }
  ],
})

export const mutations = {
  SET_META(state, payload) {
    state.meta = payload
  },
  ADD_SNACK(state, payload) {
    state.snackbars = [...state.snackbars, payload]
  },
  REMOVE_SNACK(state, id) {
    let snacks = state.snackbars
    state.snackbars = snacks.filter((s) => s.id !== id)
  },
  SHOW_SNACK(state, id) {
    let snack = state.snackbars.find((s) => s.id === id)
    snack.show = true
  },
}

export const actions = {
  /**
   * Show notification snackbar
   */
  async snack({ commit }, [msg, background, color, icon, timeout]) {
    let item = {
      msg,
      background,
      color,
      icon,
      timeout: timeout || 5000,
      show: false,
    }

    item.id = setTimeout(() => {
      commit('REMOVE_SNACK', item.id)
    }, item.timeout)

    commit('ADD_SNACK', item)
    setTimeout(() => commit('SHOW_SNACK', item.id), 0)
  },

  /**
   * Hide a snackbar
   */
  async unsnack({ commit }, id) {
    clearTimeout(id)
    commit('REMOVE_SNACK', id)
  },
}
