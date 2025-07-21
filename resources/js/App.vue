<template>
  <div>
    <component :is="$page.component" :key="$page.component" v-bind="$page.props" />
  </div>
</template>

<script setup>
// Este componente es el "layout" principal que envuelve todas las páginas
</script>