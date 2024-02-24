<script lang="ts">
import { GoogleAuthProvider } from 'firebase/auth'
import { useRouter } from "vue-router";
export const googleAuthProvider = new GoogleAuthProvider()
</script>

<script setup lang="ts">
import { ref } from "vue"
import { signInWithPopup } from 'firebase/auth'
import { useFirebaseAuth } from 'vuefire';
const router = useRouter()
const auth = useFirebaseAuth()!
const error = ref(null)

function signinPopup() {
    error.value = null
    signInWithPopup(auth, googleAuthProvider).then(() => {
        router.push("/home")
    }).catch((reason) => {
        console.error('Failed sign', reason)
        error.value = reason
    })
}
</script>

<template>
    <div>
        Это превью
    </div>
    <button @click="signinPopup">SignIn with Google</button>
    <div>{{ error }}</div>
</template>

<style scoped></style>