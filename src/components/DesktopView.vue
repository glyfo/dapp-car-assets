<script setup>

function handleDiscoverNow(evt){
  console.warn('handleDiscoverNow', evt )
}

</script>
<template>
        <a
          class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          @click="handleDiscoverNow(evt)"
        >
          Discover on Desktop
        </a>
</template>

