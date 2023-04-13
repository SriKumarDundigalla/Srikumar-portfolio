<template>
    <div class="container bg-s p-5">
        <div class="row ">
            <div class="col-md-12">
                <div class="text-center text-decoration-underline">
                    <h4 class="display-5">Skills</h4>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8">
                <div class="text-start">

                    <div class="ms-5">
                        <h4>Programming Lanugaes</h4>
                        <div class="text-start pb-2 " style="height: 90px;">
                            <div class="vr">
                                <ul class="list-group ms-4">
                                    <li class="h5">Python</li>
                                    <li class="h5">R</li>
                                    <li class="h5">SQL</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="col-md-4">
                <div class="text-start">
                    <div>
                        <h4>Tools</h4>
                        <div class="text-start pb-2" style="height: 90px;">
                            <div class="vr">
                                <ul class="list-group ms-4">
                                    <li class="h5">Tablue</li>
                                    <li class="h5">PowerbBI</li>
                                    <li class="h5">JupyterLab</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'skill-component',
    // data(){
    //     return{
    //         a:s
    //     }
    // }
}
</script>

<style scoped>
.bg-s {
    background: #dadada;
    color: #000000;
}

.ml-10 {
    margin-left: 50%;
}

.ms-6 {
    margin-left: 12%;
}
.vr{
    color: rgb(0, 0, 0) !important;
}

</style>