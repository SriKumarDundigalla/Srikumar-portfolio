<template>
    <NavbarCompnentVue :items="myArray"></NavbarCompnentVue>
    <ResumeVue></ResumeVue>
    <footerComponents></footerComponents>
  </template>
    
  <script>
  
  import NavbarCompnentVue from '../components/Navbar-Compnent.vue'
  import footerComponents from '@/components/footer.vue';
import ResumeVue from '@/components/Resume.vue';
  export default {
    name: 'AboutView',
    components: {
        NavbarCompnentVue,footerComponents,ResumeVue
    },
    data() {
        return {
            myArray: ['/','#Contact Me','/Blog','/Resume']
        }
    }
  }
  </script>
    
  <style>
  
  </style>
    