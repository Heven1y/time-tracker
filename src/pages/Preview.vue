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
        <div class="wrapper-preview__container">
            <h1 class="wrapper-preview__title">Welcome!</h1>
            <h2 class="wrapper-preview__subtitle">Log in to start using the timetracker</h2>
            <button class="wrapper-preview__login-button" @click="signinPopup">Sign In with Google</button>
            <div class="wrapper-preview__error">{{ error }}</div>
        </div>
        <BackgroundCanvas class="wrapper-preview__background" />
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

.wrapper-preview__container {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.wrapper-preview__background {
    position: absolute;
    pointer-events: none;
    inset: 0;
}

.wrapper-preview__error {
    color: white;
}

.wrapper-preview__title {
    font-size: 64px;
    font-weight: 600;
    color: rgb(171, 183, 201);
}

.wrapper-preview__subtitle {
    font-size: 48px;
    font-weight: 500;
    color: rgb(148, 163, 184);
}

.wrapper-preview__login-button {
    width: 180px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(51, 65, 85, 0.6);
    border-radius: 8px;
    color: white;
    font-size: 18px;
    transition: .3s;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(51, 65, 85, 1);;
    cursor: pointer;
    &:hover {
        background-color: rgb(51, 65, 85, 1);
    }
}
</style>