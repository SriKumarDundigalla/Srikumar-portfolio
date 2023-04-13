<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" style="background-color: white">
  <div class="container-fluid">
    <a class="navbar-brand" :href="items[0]"> <img src="../assets/DSK1.png" width="80" height="30" alt="Brand-log" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item" v-for="item in items.slice(1)" :key="item">
        <a class="nav-link" :href="item.replace(/\s+/g, '')">{{ item.slice(1, item.length)}}</a>
        </li>         
      </ul>
    </div>
  </div>
</nav>
</div>

</template>

<script>
export default {
  name: "Navbar-Compnent",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>