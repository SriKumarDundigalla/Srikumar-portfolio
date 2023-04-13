<template>
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'BarChart2',
    components: { Bar },
    data() {
      return {
        chartData: {
          labels: [ 'knn','DecisionTree','RandomForest','AdaBoostClassifier','GradientBoosting','XGBClassifier', 'LogisticRegression'],
          datasets: [ {
      label: "Before Tunning",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      data: [0.807866,0.883946,0.899420,0.891038,0.900064,0.918117,0.834300]
    },
    {
      label: "After Tunning",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
      data: [0.811141,0.892459,0.911450,0.904770,0.923510,0.914127,0.852607]
    }]
        },
        chartOptions: {
          responsive: true
        }
      }
    }
  }
  </script>