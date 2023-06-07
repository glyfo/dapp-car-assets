import {defineStore} from "pinia";

export const KeyStore = defineStore({
    id: 'keystore',
    state: () => ({
        pbk     : null,
        prk     : null,
        metadata: []
    }),

    actions:{
    }
});