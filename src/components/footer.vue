<template>
    <div>
        <div class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top" id="ContactMe">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <div class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></div>
      </a>
      <span class="text-muted">© 2023 Sri Kumar Dundigalla</span>
    </div>
    
    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <span class="text-muted mt-1 h5">Contact Me:</span>
      <li class="ms-3"><a class="text-muted" href="https://www.linkedin.com/in/dundigalla-srikumar/"><img class="icon" src="../assets/linkedin-svgrepo-com.png" /></a></li>
      <li class="ms-3"><a class="text-muted" href="mailto:srikumar@usf.edu"><img class="icon" src="../assets/mail-svgrepo-com.png" /></a></li>
      <li class="ms-3"><a class="text-muted" href="https://github.com/SriKumarD?tab=repositories"><img class="icon" src="../assets/github-142-svgrepo-com.png" /></a></li>
    </ul>
  </footer>
</div>
    </div>
</template>

<script>
    export default {
        name:'footer-component'
    }
</script>

<style scoped>
.icon{
    width: 24px;
    height: 24px;
}
</style>