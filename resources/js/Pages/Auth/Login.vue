<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
      <h2 class="text-2xl font-bold text-center mb-6">Iniciar sesión</h2>

      <form @submit.prevent="submit">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Correo electrónico</label>
          <input
            v-model="form.email"
            type="email"
            id="email"
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700">Contraseña</label>
          <input
            v-model="form.password"
            type="password"
            id="password"
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <button
          type="submit"
          class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
        >
          Iniciar sesión
        </button>
      </form>

      <div class="mt-4 text-center">
        <p class="text-sm text-gray-600">
          ¿No tienes cuenta?
          <a href="/register" class="text-indigo-600 hover:underline">Regístrate</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import { ref } from 'vue';
import { router } from '@inertiajs/vue3';
import { auth, signInWithEmailAndPassword } from '@/firebase';

const form = ref({
  email: '',
  password: '',
});

const submit = async () => {
  try {
    await signInWithEmailAndPassword(auth, form.value.email, form.value.password);
    router.visit('/');
  } catch (error) {
    alert('Error al iniciar sesión: ' + error.message);
  }
};
</script>