<script setup lang="ts">
import { RouterView, useRouter } from "vue-router"
import { useFirebaseAuth } from "vuefire";
const auth = useFirebaseAuth()!
const router = useRouter()

router.beforeEach(async (to) => {
  if (
    !auth.currentUser &&
    to.name !== 'preview'
  ) {
    return { name: 'preview' }
  }

})
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style>
  body {
    margin: 0;
    font-family: "Comfortaa", sans-serif;
  }
</style>
