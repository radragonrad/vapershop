<template>
  <div class="min-h-screen flex flex-col">
    <nav class="bg-white shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <!-- Logo -->
          <div class="flex items-center">
            <img src="/images/logo-savapers.png" alt="Logo" class="h-18 inline-block mr-2" />           
          </div>

          <!-- Menú desktop -->
          <div class="hidden sm:ml-6 sm:flex sm:items-center">
            <!-- Mostrar correo si está logueado -->
            <Link v-if="user" :href="route('products.index')" class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600">Productos</Link>
            <Link v-if="user" :href="route('products.create')" class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600">Añadir producto</Link>
            <div v-if="user" class="relative ml-3">

              <button
                @click="dropdownOpen = !dropdownOpen"
                class="flex items-center text-sm focus:outline-none"
              >
                <span class="text-gray-700">{{ user.email }}</span>
                <svg class="ml-1 h-4 w-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </button>

              <!-- Dropdown -->
              <div v-if="dropdownOpen" class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <a href="/dashboard" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mi cuenta</a>
                <a @click="logout" href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cerrar sesión</a>
              </div>
            </div>

            <!-- Si no está logueado, mostrar "Iniciar sesión" -->
            <Link v-else :href="route('login')" class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600">
              Iniciar sesión
            </Link>
          </div>

          <!-- Menú móvil -->
          <div class="flex items-center sm:hidden">
            <button @click="mobileMenuOpen = !mobileMenuOpen" class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600">
              <span class="sr-only">Abrir menú</span>
              <svg v-if="!mobileMenuOpen" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
              <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Menú móvil -->
      <div v-if="mobileMenuOpen" class="sm:hidden bg-white border-t border-gray-200">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <Link v-if="!user" :href="route('login')" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">
            Iniciar sesión
          </Link>

          <div v-else class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">
            {{ user.email }}
          </div>
          <Link :href="route('products.index')" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Productos</Link>
          <Link v-if="user" :href="route('products.create')" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Añadir producto</Link>

          <div v-if="user" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">
            <a @click="logout" href="#">Cerrar sesión</a>
          </div>
        </div>
      </div>
    </nav>

    <main class="flex-grow container mx-auto px-4 py-6">
      <slot />
    </main>

    <footer class="bg-gray-800 text-white py-4 text-center">    
      <div class="container mx-auto">
        <p>© 2025 Savapers - Todos los derechos reservados</p>
      </div>
    
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Link, router } from '@inertiajs/vue3';
import { auth, onAuthStateChanged, signOut } from '@/firebase';

const mobileMenuOpen = ref(false);
const dropdownOpen = ref(false);
const user = ref(null);

// Detectar cambios de autenticación
onAuthStateChanged(auth, (firebaseUser) => {
  user.value = firebaseUser;
});

// Cerrar sesión
const logout = async () => {
  await signOut(auth);
  router.visit('/');
};
</script>