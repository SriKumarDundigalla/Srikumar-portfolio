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
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [ 'knn','DecisionTree','RandomForest','AdaBoostClassifier','GradientBoosting','XGBClassifier' ],
        datasets: [ { data: [0.9988372093023254,
 0.9892072072072073,
 0.9972972972972972,
 0.9527207207207209,
 0.9972972972972972,
 0.9986486486486486] , label: 'accuarcy'} ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>