<template>
    <NavbarCompnentVue :items="myArray"></NavbarCompnentVue>
    <project3 class="pt-5"></project3>
    <footerComponent></footerComponent>
  </template>
    
  <script>
  import project3 from '@/components/project3.vue';
  import NavbarCompnentVue from '../components/Navbar-Compnent.vue'
  import footerComponent from '@/components/footer.vue';
  
  export default {
    name: 'AboutView',
    components: {
      project3,NavbarCompnentVue,footerComponent
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
    