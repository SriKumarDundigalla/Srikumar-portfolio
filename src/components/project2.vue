<template>
    <div class="container bg-p mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="text-center"><h1>Prediction-of-the-Success-of-Bank-Telemarketing</h1></div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 text-start">
                <h4 class="ms-4 text-decoration-underline">Goal</h4>
                <p class="ms-4">The marketing team in a bank is a crucial component for advancing the organization's goals. Their actions can greatly impact the bank's development, and the initial step towards growth typically begins with their efforts. Marketing involves presenting products or services to the market, promoting them, and encouraging consumers to purchase them. In today's world, successful businesses rely heavily on effective marketing, which significantly influences our daily lives. In the context of a bank in Portugal, the provided data pertains to direct marketing initiatives that involved making phone calls. To determine whether clients would subscribe to the bank's term deposit product, it was sometimes necessary to engage in multiple conversations with the same client until a decision was reached (either yes or no).</p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 text-start">
                <h4 Class="ms-4 text-decoration-underline">Data</h4>
                <p class="ms-4">The dataset contains 45,800 observations and 16 columns of data. The primary objective of this dataset is to predict whether a customer will subscribe to a term deposit or not. The features in the dataset are a mix of demographic information (such as age, job type, marital status, and education), the credit history (including whether the customer has a credit default or personal loan), account balance, and contact communication details (including the type of contact, the day of the week of the last contact, and the month of the last contact). The 'y' column is the target variable, indicating whether the customer subscribed to a term deposit or not. The dataset also includes information about previous campaigns, including the number of contacts made during the campaign, the number of days that passed since the customer was last contacted, and the number of contacts made before the current campaign. Overall, this dataset provides a wealth of information that can be used to develop predictive models that help to understand the factors that influence customer decision-making when it comes to subscribing to a term deposit.</p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 text-start">
                <h4 Class="ms-4 text-decoration-underline">Results</h4>
                <p class="ms-4">To optimize the binary classification model, the primary focus was on reducing false negatives (FN) since it is better to miss out on potential customers who might be interested in the term deposit policy than spend resources on uninterested customers (false positives, FP). The Gradient Boosting model was used and was found to have improved the recall score, which measures the proportion of actual positives correctly identified by the model.In addition, techniques like K-Fold cross-validation and hyperparameter tuning were implemented, which further improved the model's performance by enhancing the recall score. Gradient Boosting was found to be a better model than the previous support vector machines algorithm as it captured most of the actual positives.This optimized model will help the bank in minimizing marketing costs and maximize revenue by targeting the right customers that are more likely to take up the term deposit policy. With a higher recall score than the previous work on this problem, the model is even more optimal for generating accurate predictions in binary classification problems.After performing model evaluation, it can be concluded from the graph that Gradient Boosting provides the optimal result with a recall score of 0.923510 after performing hyperparameter tuning, followed by the XGBoost classifier. </p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 text-start">
                <h4 Class="ms-4 text-decoration-underline">Recall Obtained Before & After Automtuning Using Machine Learning Model</h4>
                <chart2Vue class="ms-4  me-4 pb-5"></chart2Vue>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="text-center p-3">
                    <a href="https://github.com/SriKumarD/Prediction-of-the-Success-of-Bank-Telemarketing/blob/main/Final_Project.ipynb"><button type="button" class="btn btn-outline-dark btn-lg">GitHub</button></a>
                </div> 
            </div>
            <div class="col-md-6">
                <div class="text-center p-3">
                    <a href="https://archive.ics.uci.edu/ml/datasets/bank+marketing"><button type="button" class="btn btn-outline-dark btn-lg">Data Source</button></a>
                </div> 
            </div>
            
        </div>
    </div>
</template>

<script>
import chart2Vue from './chart2.vue';

    export default {
        name:'project2-component',
        data(){
            return{
            }
        },
        components:{
            chart2Vue
        }
    }
</script>

<style scoped>
.bg-p{
  background:#dddddd;
  color: #000000;
}
</style>