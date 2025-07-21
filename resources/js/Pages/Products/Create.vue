
<template>
  <AppLayout>
    <div class="max-w-4xl mx-auto mt-10">
      <h1 class="text-3xl font-bold text-gray-800 mb-6">Añadir nuevo producto</h1>

      <form @submit.prevent="submit" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <!-- Marca -->
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="brand">
            Marca
          </label>
          <select
            v-model="form.brand"
            id="marca"
            type="text"
            placeholder="Ej: Aroma King"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="" disabled selected>Selecciona una marca</option>
            <option v-for="marca in marcas" :key="marca.id" :value="marca.id">
            {{ marca.literal }}
            </option>
            </select>
        </div>

        <!-- Modelo -->
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="model">
            Modelo
          </label>
          <select
            v-model="form.modelo"
            id="modelo"
            type="text"
            placeholder="Ej: Vaper Desechable Mango"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="" disabled selected>Selecciona un modelo</option>
            <option v-for="model in modelos" :key="model.id" :value="model.id">
                {{ model.literal }}
            </option>
            </select>
        </div>

        <!-- Nicotina -->
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="nicotine">
            Nicotina
          </label>
          <input
            v-model.number="form.nicotine"
            id="nicotine"
            type="number"
            placeholder="Ej: 20"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <!-- Título -->
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
            Título
          </label>
          <input
            v-model="form.title"
            id="title"
            type="text"
            placeholder="Ej: Vaper Mango"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <!-- Precio nuevo -->
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="price">
            Precio nuevo
          </label>
          <input
            v-model.number="form.price"
            id="price"
            type="number"
            placeholder="Ej: 4.50"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <!-- Precio antiguo (opcional) -->
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="oldPrice">
            Precio antiguo (opcional)
          </label>
          <input
            v-model.number="form.oldPrice"
            id="oldPrice"
            type="number"
            placeholder="Ej: 9.00"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <!-- Botón -->
        <div class="flex items-center justify-between">
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Guardar producto
          </button>
        </div>
      </form>
    </div>
  </AppLayout>
</template>

<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';

import { ref, onMounted, watch } from 'vue';
import { router } from '@inertiajs/vue3';
import { collection, getDocs } from 'firebase/firestore';
import { db, addDoc } from '@/firebase';

const form = ref({
  marca: '',
  modelo: '',
  nicotine: '',
  title: '',
  price: '',
  oldPrice: null,
});

const submit = async () => {
  try {
    await addDoc(collection(db, 'products'), {
      marca: form.value.marca,
      modelo: form.value.modelo,
      nicotine: form.value.nicotine,
      title: form.value.title,
      price: form.value.price,
      oldPrice: form.value.oldPrice,
      createdAt: new Date(),
    });

    alert('Producto guardado correctamente');
    router.visit('/products');
  } catch (error) {
    alert('Error al guardar producto: ' + error.message);
  }
};

const marcas = ref([]);
const modelos = ref([]);

const loadMarcas = async () => {
  const queryMarcas = await getDocs(collection(db, 'marcas'));
  marcas.value = queryMarcas.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};


// Cargar modelos según marca seleccionada
const loadModelsByBrand = async (brandId) => {
  if (!brandId) {
    modelos.value = [];
    return;
  }

  const querySnapshot = await getDocs(collection(db, 'modelos'));
  modelos.value = querySnapshot.docs
    .filter(doc => doc.data().brandId === brandId)
    .map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
};

onMounted(loadMarcas);


// Cargar modelos cuando se seleccione una marca
watch(() => form.value.marcas, loadModelsByBrand);
</script>