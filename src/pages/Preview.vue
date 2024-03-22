<script lang="ts">
import { GoogleAuthProvider } from 'firebase/auth'
import { useRouter } from "vue-router";
export const googleAuthProvider = new GoogleAuthProvider()
</script>

<script setup lang="ts">
import { ref } from "vue"
import { signInWithPopup } from 'firebase/auth'
import { useFirebaseAuth } from 'vuefire';
import BackgroundCanvas from '../components/backgroundCanvas/BackgroundCanvas.vue'
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
    <div class="wrapper-preview">
        <div>
            <h1 class="wrapper-preview__title">Welcome!</h1>
            <h2 class="wrapper-preview__subtitle">Log in to start using the timetracker</h2>
            <button class="wrapper-preview__login-button" @click="signinPopup">SignIn with Google</button>
            <div class="wrapper-preview__error">{{ error }}</div>
        </div>
        <BackgroundCanvas class="absolute inset-0 pointer-events-none" />

    </div>
</template>

<style scoped>
.wrapper-preview {
    background-color: rgb(15 23 42);
    position: relative;
    display: flex;
    justify-content: center;
    min-height: 100vh;
    flex-direction: column;
    overflow: hidden;
}

.wrapper-preview__title {
    font-size: 64px;
    font-weight: 600;
    color: azure;
}

.wrapper-preview__subtitle {
    font-size: 48px;
    font-weight: 500;
    color: azure;
}

.wrapper-preview__login-button {
    width: 200px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: azure;
    color: black;
    font-size: 24px;
}
</style>