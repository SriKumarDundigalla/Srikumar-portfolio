<template>
    <div class="container bg-p mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="text-center"><h1>predicting-milk-quality-multi-label-classification</h1></div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 text-start">
                <h4 class="ms-4 text-decoration-underline">Goal</h4>
                <p class="ms-4">The purpose of the project lies in its ability to help businesses in the food industry identify potential quality issues early on in the manufacturing process and reduce waste, resulting in cost savings, improved efficiency, and enhanced customer experience. In fields like food, where data-driven decision-making and predictive modeling may result in cost savings, higher efficiency, and improved customer experience, these talents are widely valued by hiring managers. By using machine learning algorithms to predict milk quality based on several factors, this project offers a data-driven solution that can help businesses optimize their manufacturing process and improve the quality of their products, contributing to the overall success of the business.</p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 text-start">
                <h4 Class="ms-4 text-decoration-underline">Data</h4>
                <p class="ms-4">The dataset contains data on the quality of milk samples collected from various producers in a state. The dataset includes six numerical features, namely pH, temperature, fat percentage, turbidity, texture, and taste, which are measured using different units such as logarithmic units for pH, Fahrenheit for temperature, and binary units for taste, odor, and turbidity.Additionally, the dataset includes a categorical feature for color, with nine categories, and a target feature for the grade, which is classified into three levels: low, medium, and high.</p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 text-start">
                <h4 Class="ms-4 text-decoration-underline">Results</h4>
                <p class="ms-4">Able to obtain high accuracy levels using all the models, with the K-NN classifier producing the best results with an accuracy score of 99.88%. The decision tree and random forest algorithms also performed well, with accuracy scores of 99.76% and 99.81%, respectively. The least accuracy obtained was 95.2% for AdaBoost, which is still a high level of accuracy.
The high accuracy levels obtained from the various machine learning models indicate the excellent quality of the data and the effectiveness of the models in predicting milk quality. </p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 text-start">
                <h4 Class="ms-4 text-decoration-underline">Dashboards</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 text-center p-2">
                <img class="img-fluid img-size" src="../assets/r-p1.png">
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 text-center p-2">
                <img class="img-fluid img-size" src="../assets/r-2.png">
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 text-center p-2">
                <img class="img-fluid img-size" src="../assets/r-3.png">
            </div>
        </div>

        <div class="row">
            <div class="col-md-6">
                <div class="text-center p-3">
                    <a href="https://github.com/SriKumarD/Predicting-Milk-Quality-multi-label-classification-/blob/main/src.ipynb"><button type="button" class="btn btn-outline-dark btn-lg">GitHub</button></a>
                </div> 
            </div>
            <div class="col-md-6">
                <div class="text-center p-3">
                    <a href="https://www.kaggle.com/datasets/cpluzshrijayan/milkquality/discussion?resource=download"><button type="button" class="btn btn-outline-dark btn-lg">Data Source</button></a>
                </div> 
            </div>
            
        </div>
    </div>
</template>

<script>

    export default {
        name:'project3-component',
        data(){
            return{

            }
        },
        
    }
</script>

<style scoped>
.bg-p{
  background:#dddddd;
  color: #000000;
}
.img-size{
    height: 600px;
}
</style>