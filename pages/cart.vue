<template>
  <div>
    <h3>Your Items</h3>
    <v-divider class="mt-4 mb-3" />
    <v-container fluid fill-height>
      <v-row v-if="state.isLoading">
        <loading />
      </v-row>
      <v-row v-if="!state.isLoading">
        <v-col
          cols="12"
          xl="4"
          md="3"
          sm="6"
          v-for="(item, index) in cartItems"
          :key="index"
        >
          <card-product
            :id="item.id"
            :createdAt="item.createdAt"
            :name="item.name"
            :description="item.description"
            :logo="item.logo"
            :price="item.price"
            :isLoading="item.isLoading"
            :isAddBtn="false"
          />
        </v-col>
      </v-row>

      <v-row v-if="!total && !state.isLoading"> No Items </v-row>
    </v-container>
  </div>
</template>

<script>
import meta from '~/mixins/meta'

export default {
  asyncData({ store }) {
    store.commit('SET_META', 'Cart')
  },
  mixins: [meta],
  data: () => ({
    meta: {
      title: 'Cart',
    },
    state: {
      isLoading: false,
    },
  }),

  created() {
    this.fetch()
  },

  methods: {
    async fetch() {
      this.state.isLoading = true
      await this.$store.dispatch('cart/fetchCart')
      this.state.isLoading = false
    },
  },

  computed: {
    cartItems() {
      return this.$store.getters['cart/carts']
    },
    total() {
      return this.$store.getters['cart/total']
    },
  },
}
</script>
