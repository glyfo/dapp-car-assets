import {defineStore} from "pinia";
import { JsonRpcProvider, localnetConnection } from '@mysten/sui.js';

// connect to local RPC server
const provider = new JsonRpcProvider(localnetConnection);

const objects = await provider.getOwnedObjects({
    owner: '0xcc2bd176a478baea9a0de7a24cd927661cc6e860d5bacecb9a138ef20dbab231',
  });

  const txn = await provider.getObject({
    id: '0xcc2bd176a478baea9a0de7a24cd927661cc6e860d5bacecb9a138ef20dbab231',
    // fetch the object content field
    options: { showContent: true },
  });
  
export const KeyStore = defineStore({
    id: 'keystore',
    state: () => ({
        account : {public : null , private: null},
        metadata: []
    }),
    actions:{
    }
});