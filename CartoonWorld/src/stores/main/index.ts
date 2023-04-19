import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useMain=defineStore('main',()=>{
    let nav = ref(0) // 0--漫画 1--小说
    return{
        nav
    }
})