<template>
    <NavbarCompnentVue :items="myArray"></NavbarCompnentVue>
    <blog class="pt-5"></blog>
    <footerComponents></footerComponents>
  </template>
    
  <script>
  import blog from '@/components/blog.vue';
  import NavbarCompnentVue from '../components/Navbar-Compnent.vue'
  import footerComponents from '@/components/footer.vue';
  export default {
    name: 'AboutView',
    components: {
        blog,NavbarCompnentVue,footerComponents
    },
    data() {
        return {
            myArray: ['/','#Contact Me','/Resume']
        }
    }
  }
  </script>
    
  <style>
  
  </style>
    