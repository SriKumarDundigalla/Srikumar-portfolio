<template>
<div class="container-md bg-a">
  <div class="row">
    <div class="col-md-12 text center mt-2">
      <div class="text-decoration-underline mt-5"><h1>About Me</h1></div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6 mt-5 text-center">
      <p class="p-3" style="text-align: justify;">{{ typedText }}</p>
    </div>
    <div class="col-md-6 mt-5 text-center">
      <img class="img-fluid img-s p-2" src="../assets/About-4.jpg">
    </div>
  </div>
</div>

  </template>
  
  <style>
  .bg-a{
    background:#f0f0f0;
    background-size: cover;
    color: #000000;
  }
  .img-s{
    width: 250px;
    height: 250px;
  }

  </style>
  
  <script>
  export default {
    name: 'About-component',
    data(){
        return{
            typedText:"Hello, I am a Full Stack Developer with 2 years of experience at Infosys and currently pursuing my degree at the University of South Florida. I possess a strong foundation in both front-end and back-end development and proficiency in various programming languages and technologies including React js, Vue js, Angular js, Express js, Node js, Mongo DB, Typescript, HTML, CSS, and JavaScript, as well as Python and SQL. As a University of South Florida student, I have completed projects utilizing supervised learning classification algorithms such as K-Nearest Neighbor, Decision Tree, XGBoost, Random Forest, AdaBoost, and Gradient Boosting Classification, as well as data visualization and sorting with Tableau and SQL. I am passionate about developing web applications and always eager to learn and stay updated with new technologies to enhance my skills and create innovative solutions."
        };
    }
  }
  </script>
  