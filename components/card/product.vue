<template>
  <div v-if="id">
    <v-card class="product__card">
      <div class="white" v-if="recommended">
        <h3 class="text-center mb-2">Item You may also like</h3>
      </div>
      <v-img height="250" :src="logo"></v-img>
      <v-card-title>{{ name }}</v-card-title>
      <v-card-text>
        {{ description }}
      </v-card-text>
      <v-card-actions>
        <v-btn
          v-if="isAddBtn"
          :loading="isLoading"
          block
          color="primary"
          @click="onEmitAddToCart()"
        >
          Add To Cart | {{ price }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    recommended: {
      type: Boolean,
      default: false,
    },
    isAddBtn: {
      type: Boolean,
      default: true,
    },
    createdAt: String,
    name: String,
    description: String,
    logo: String,
    isLoading: Boolean,
    price: [Number, String],
    id: [Number, String],
  },

  methods: {
    onEmitAddToCart() {
      this.$emit('addToCart')
    },
  },
}
</script>

<style lang="scss">
.product__card {
  height: 100%;
}
</style>
