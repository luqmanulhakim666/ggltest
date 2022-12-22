<template>
  <div>
    <v-snackbar
      v-for="item in snacks"
      :key="item.id"
      :value="item.show"
      :color="item.background"
      :timeout="item.timeout"
      class="rounded-lg"
      elevation="0"
      top
      centered
    >
      <v-icon size="20" :class="['mr-3', item.color]">{{ item.icon }}</v-icon>
      <span :class="['p--default', item.color]">{{ item.msg }}</span>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: 'snackbar',

  computed: {
    snacks() {
      return this.$store.state.snackbars
    },
  },

  methods: {
    close(id) {
      this.$store.dispatch('unsnack', id)
    },
  },
}
</script>
