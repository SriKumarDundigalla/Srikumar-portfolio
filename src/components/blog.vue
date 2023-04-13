<template>
    <div class="container bg-p mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="text-center" style="text-align: justify;"><h1>Designing AI for All: Addressing Bias in Artificial Intelligence Systems</h1></div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 text-start">
                <p class="ms-4">
                    The world we live in is undergoing a fast transformation as a result of artificial intelligence (AI), which is being used to do anything from screen spam emails to guide driverless cars. However, there is a danger of algorithmic bias associated with each application, and the repercussions of this bias may vary from being a little nuisance to being life-threatening. When systematic mistakes are incorporated into models, a phenomenon known as algorithmic bias may arise. This can result in different results for protected groups. For example, an algorithm used by Amazon to choose employees showed bias towards female job applicants, while a feature in Google Photos incorrectly labeled two black persons as gorillas.
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 text-start">
                <p class="ms-4">
                    Any point in the development process of an algorithm is a potential birthplace for undesirable bias. The key contributors to algorithmic bias are training data, model assumptions, test data, and deployment decisions. The social, historical, and political circumstances in which the algorithm was developed are reflected in the data used to train it, and these data may be biased. The recidivism algorithm used in Broward County relied on historical data that contained prejudice against African Americans. As a result, the algorithm classified a larger percentage of black defendants as having a medium or high risk of recidivism, in comparison to the classifications given to white defendants.
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 text-start">
                <p class="ms-4">
                    Another element that might help disguise the appearance of bias in algorithms is feature selection. Models that try to overcome gender prejudice by being gender blind, which is eliminating gender from the model, might, in certain cases, generate bias. Because algorithms are sensitive to their surroundings, they need to be tested and refined in settings that are analogous to their final use. When presented in the context of the test data, however, the outcome may be biased. Race and gender are two characteristics that have the potential to reduce algorithmic bias in some circumstances.
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 text-start">
                <div class="ms-4">
                    <p>It is necessary to have human supervision to avoid the incorrect implementation or exploitation of an impartial model, which might result in unintended bias and inequality is exacerbated. As a result, the following proposals have been made to address issues of prejudice and justice concerning algorithms and artificial intelligence:</p>
                    <ol>
                        <li>Find and eliminate the factors that contribute to algorithmic bias, such as making use of a wide variety of data sources and conducting exhaustive tests.</li>
                        <li>Promote openness and responsibility throughout the process of algorithm creation, including the disclosure of data sources, assumptions, and constraints placed on the model.</li>
                        <li>It is important to foster diversity in artificial intelligence development teams to increase the number of viewpoints available and decrease the likelihood of accidental bias.</li>
                        <li>It is important to educate those who make decisions, those who create AI, and users about its limits and possible biases to encourage the responsible use of AI and to avoid the danger of unexpected effects.</li>
                    </ol>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 text-start">
                <p class="ms-4">
                    Fairness does not always coincide with the elimination of unwarranted prejudice. These proposals, on the other hand, have the potential to assist in addressing the problem of algorithmic bias and promoting the responsible use of AI. The fact that algorithms are creations of human civilization means that they can enhance human decision-making via objective, data-based understanding. However, they also can perpetuate human prejudices and deploy them at scale. As a result, it is our shared obligation to develop AI that is inclusive and free of prejudice to create a society that is equitable and just for everyone.
                </p>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name:'project1-component',
        data(){
            return{

            }
        },
        components:{

        }
    }
</script>

<style scoped>
.bg-p{
  background:#dddddd;
  color: #000000;
}
</style>