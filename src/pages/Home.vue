<script setup lang="ts">
import { useCurrentUser, useFirebaseAuth } from 'vuefire'
import { signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';

const user = useCurrentUser()
const auth = useFirebaseAuth()!
const router = useRouter()

function signOutApp() {
    signOut(auth).then(() => {
        router.push({ name: "preview" })
    })
}
</script>

<template>
    <div>
        <p v-if="user">Hello {{ user.providerData[0].displayName }}</p>
        <button @click="signOutApp">Sign Out</button>
    </div>
</template>

<style scoped></style>