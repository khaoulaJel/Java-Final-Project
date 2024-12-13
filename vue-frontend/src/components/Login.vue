<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <input v-model="email" placeholder="Email" />
        <input v-model="password" type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  import { loginUser } from '../services/api.js';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        error: null
      }
    },
    methods: {
      async login() {
        try {
          const data = await loginUser(this.email, this.password);
          console.log('User logged in:', data.user);

        } catch (err) {
          this.error = err.message;
        }
      }
    }
  }
  </script>
  