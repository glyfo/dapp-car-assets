<script setup>
import MobileView from './components/MobileView.vue';
import DesktopView from './components/DesktopView.vue';

const isIOSSafari = !!window.navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);

</script>

<template>
  
  <div id="app">

    <div v-if="isIOSSafari">
      <MobileView/>
    </div>
    <div v-else>
      <DesktopView/>
    </div>

</div>

</template>