<template>
    <NavbarCompnentVue :items="myArray"></NavbarCompnentVue>
    <project2 class="pt-5"></project2>
    <footerComponent></footerComponent>
  </template>
    
  <script>
  import project2 from '@/components/project2.vue';
  import NavbarCompnentVue from '../components/Navbar-Compnent.vue'
  import footerComponent from '@/components/footer.vue';
  
  export default {
    name: 'AboutView',
    components: {
      project2,NavbarCompnentVue,footerComponent
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
    