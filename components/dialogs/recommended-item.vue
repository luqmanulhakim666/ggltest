<template>
  <v-dialog @click:outside="onEmitClose()" v-model="isDialog" max-width="500">
    <div class="d-flex justify-end">
      <v-avatar
        @click="onEmitClose()"
        class="close-btn"
        color="white"
        size="30"
      >
        <v-icon>mdi-close</v-icon>
      </v-avatar>
    </div>

    <card-product
      v-if="item"
      :id="item.id"
      :createdAt="item.createdAt"
      :name="item.name"
      :description="item.description"
      :logo="item.logo"
      :price="item.price"
      recommended
      @addToCart="onEmitAddToCart()"
    />
  </v-dialog>
</template>

<script>
export default {
  props: {
    isDialog: Boolean,
    item: Object,
  },

  methods: {
    onEmitAddToCart() {
      this.$emit('addToCart')
    },

    onEmitClose() {
      this.$emit('on:close')
    },
  },
}
</script>

<style lang="scss" scoped>
.close-btn {
  cursor: pointer;
}
</style>
