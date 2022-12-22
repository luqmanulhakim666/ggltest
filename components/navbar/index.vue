<template>
  <div>
    <v-navigation-drawer v-model="drawer" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>{{ getMeta }}</v-toolbar-title>
      <v-spacer />

      <v-badge
        :color="total ? 'error' : 'transparent'"
        :content="total"
        right
        offset-x="20"
        offset-y="20"
      >
        <v-btn icon @click="goToCart()">
          <v-icon>mdi-cart</v-icon>
        </v-btn>
      </v-badge>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    clipped: false,
    drawer: false,
    fixed: false,
    items: [
      {
        icon: 'mdi-home',
        title: 'Home',
        to: '/',
      },
      {
        icon: 'mdi-cart',
        title: 'Cart',
        to: '/cart',
      },
    ],
  }),

  created() {
    this.$store.dispatch('cart/fetchCart')
  },

  methods: {
    goToCart() {
      this.$router.push('/cart')
    },
  },

  computed: {
    getMeta() {
      return this.$store.state.meta
    },
    total() {
      return this.$store.getters['cart/total']
    },
  },
}
</script>
