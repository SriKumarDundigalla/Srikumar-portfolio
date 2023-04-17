<template>
    <div class="container bg-c p-5">
        <div class="row">
            <div class="col-md-12 text-start">
                <div class="text-decoration-underline display-4">
                <h1 >Projects</h1></div>
            </div>
        </div>
        <div class="row d-flex justify-content-center">
            <div class="col-md-3 mt-2">
                <a href="/Project1">
                    <div class="card bg-dark" >
                    <chart></chart>
                    <div class="card-img-overlay">
                        <div class="element">
                            <h5 class="card-title text-white">Data Mining</h5>
                            <p class="card-text text-white">predicting-milk-quality-multi-label-classification.</p>
                        </div>

                    </div>
                </div>
                </a>
                
            </div>
            <div class="col-md-3 mt-2">
                <a href="/Project2">
                    <div class="card bg-dark ">
                    <chart2></chart2>
                    <div class="card-img-overlay">
                        <div class="element">
                            <h5 class="card-title text-white">Data Mining</h5>
                            <p class="card-text text-white">Prediction-of-the-Success-of-Bank-Telemarketing.</p>
                        </div>

                    </div>
                </div>
                </a>
                
            </div>
            <div class="col-md-3 mt-2">
                <a href="/Project3">
                    <div class="card text-dark">
                    <img src="../assets/r-1.png" class="card-img" alt="...">
                    <div class="card-img-overlay">
                        <div class="element">
                            <h5 class="card-title text-white">Dashboards</h5>
                            <p class="card-text text-white">RateMyProfessor Data visualization using Tableau.</p>
                        </div>

                    </div>
                </div>
                </a>
                
            </div>
        </div>
    </div>
</template>
  
<script>
import chart from './chart.vue';
import chart2 from './chart2.vue';
export default {
    name: 'card-component',
    data() {
        return {
            imageUrl: '../assets/1094289.jpg',
            title: 'Card Title',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere aliquet enim, vel pharetra velit lacinia at. Donec vel elit rhoncus, volutpat mi eget, tempor neque. Sed eu lacus sit amet elit dapibus vehicula sed vitae quam. Suspendisse sed vulputate quam.',
        }
    },
    components:{
        chart,chart2
    }
};
</script>
  
<style scoped>
.bg-c {
    background: #cecece;
}

.card-img-overlay {
    opacity: 1;
    display: block;
    animation: hide 0.2s ease-in forwards;

}

@keyframes hide {
    0% {
        opacity: 1;
        display: block;
    }

    100% {
        opacity: 0;
        display: none;
    }
}

.card-img-overlay:hover {
    animation: show 0.3s ease-in forwards;
    background:rgba(0, 0, 0, 0.5) ;

 
}

@keyframes show {
    0% {
        opacity: 0;
        display: block;
    }

    100% {
        opacity: 1;
        display: block;
    }
}

</style>
  