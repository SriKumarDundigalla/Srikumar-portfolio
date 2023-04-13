<template>
    <NavbarCompnentVue :items="myArray"></NavbarCompnentVue>
  <div class="container">

      <Intro id="Intro"></Intro>
      <About id="AboutMe"></About>
      <skill id="Skills"></skill>
      <card id="Projects"></card>
  </div>
  <footerComponents></footerComponents>
</template>
  
<script>
import Intro from '../components/Intro.vue';
import NavbarCompnentVue from '../components/Navbar-Compnent.vue'
import About from '../components/About.vue';
import skill from '../components/skill.vue';
import card from '../components/card.vue';
import footerComponents from '@/components/footer.vue';

export default {
  name: 'HomeView',
  components: {
      NavbarCompnentVue, Intro, About, skill, card,footerComponents
  },
  data() {
      return {
          myArray: ['#Intro','#About Me', '#Skills','#Projects','/Blog']
      }
  }
}
</script>
  
<style>

</style>
  