<template>
  <v-app>
    <navbar />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <snackbar />
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>
