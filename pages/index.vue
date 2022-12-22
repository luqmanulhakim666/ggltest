<template>
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
        v-for="(item, index) in items.products"
        :key="index"
      >
        <card-product
          :id="item.id"
          :createdAt="item.createdAt"
          :name="item.name"
          :description="item.description"
          :logo="item.logo"
          :isLoading="item.isLoading"
          :price="item.price"
          @addToCart="onAddToCart(item)"
        />
      </v-col>
    </v-row>

    <dialogs-recommended-item
      :isDialog="state.isDialog"
      :item="recommendedItem"
      @addToCart="onAddToCart(recommendedItem)"
      @on:close="handleDialog()"
    />
  </v-container>
</template>

<script>
import meta from '~/mixins/meta'
export default {
  asyncData({ store }) {
    store.commit('SET_META', 'Home')
  },
  mixins: [meta],
  data: () => ({
    meta: {
      title: 'Home',
    },
    items: {
      products: [],
    },
    state: {
      isDialog: false,
      isLoading: false,
    },
  }),

  created() {
    this.fetch()
  },

  methods: {
    async fetch() {
      this.state.isLoading = true
      await this.$store.dispatch('product/fetchProduct')
      this.items.products = this.setNormalizeProducts()
      this.state.isLoading = false
    },

    setNormalizeProducts() {
      return this.$store.getters['product/products']?.map((x) => {
        return { ...x, isLoading: false }
      })
    },

    async onAddToCart(product) {
      product.isLoading = true

      const res = await this.$store.dispatch('cart/addToCart', product)
      const success = res?.status === 201

      if (success) {
        const snack = ['Item is added', 'success', 'white--text', 'mdi-check']
        this.$store.dispatch('snack', snack)
        this.$store.dispatch('cart/addItem')
        this.handleDialog()
      }

      if (!success) {
        console.log('err', res)
      }

      product.isLoading = false
    },

    handleDialog() {
      this.state.isDialog = !this.state.isDialog
    },
  },

  computed: {
    recommendedItem() {
      if (!!this.items.products?.length) {
        let max = this.items.products?.length
        let random = Math.floor(Math.random() * (max - 0 + 1)) + 0

        return this.items.products[random]
      }
    },
  },
}
</script>
