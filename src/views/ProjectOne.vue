<template>
  <NavbarCompnentVue :items="myArray"></NavbarCompnentVue>
  <project1 class="pt-5"></project1>
  <footerComponents></footerComponents>
</template>
  
<script>
import project1 from '@/components/project1.vue';
import NavbarCompnentVue from '../components/Navbar-Compnent.vue'
import footerComponents from '../components/footer.vue'
export default {
  name: 'AboutView',
  components: {
    project1,NavbarCompnentVue,footerComponents
  },
  data() {
      return {
          myArray: ['/','/Blog']
      }
  }
}
</script>
  
<style>

</style>
  