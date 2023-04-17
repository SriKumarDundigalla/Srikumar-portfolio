<template>
<div class="container bg-a">
  <div class="row">
    <div class="col-md-12 text-start mt-3 ms-3">
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
            typedText:"As a Data Analyst, I bring a strong technical skill set to the table, including proficiency in programming languages such as C/C++, JavaScript, JAVA, HTML/CSS, and data analysis tools such as R, Python, SQL, MongoDB, Pandas, NumPy, Matplotlib, Seaborn, and Scikit-learn. With experience in conducting an in-depth analysis of large datasets, I can uncover trends and patterns, and present findings in clear and concise reports to stakeholders. I am skilled in data visualization using Tableau and Power BI and have extensive experience in database management using SQL Server, MySQL, NoSQL, Google Cloud Platform, and Microsoft Excel. My abilities also extend to business intelligence using SAS, and I am well-versed in data preparation and cleaning. As a team player, I work collaboratively with cross-functional teams to identify needs and develop data solutions to meet business goals. I am always looking for ways to increase productivity and accuracy, and have automated common data processes using scripting languages like Python and SQL. Overall, I am passionate about leveraging data to drive business growth and success."
        };
    }
  }
  </script>
  