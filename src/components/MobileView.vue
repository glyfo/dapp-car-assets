<script setup>

function handleDiscoverNow(evt){
  console.warn('handleDiscoverNow', evt )
}

function handlerConnection(){
  import { JsonRpcProvider, localnetConnection } from '@mysten/sui.js';
// connect to local RPC server
const provider = new JsonRpcProvider(localnetConnection);
// get tokens from the local faucet server
await provider.requestSuiFromFaucet(
  '0xcc2bd176a478baea9a0de7a24cd927661cc6e860d5bacecb9a138ef20dbab231',
);

}

</script>
<template>
        <a
          class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          @click="handleDiscoverNow(evt)"
        >
          Discover on Mobile
        </a>
</template>
