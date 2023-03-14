<template>
    <section class="background-jumbotron position-relative  ">
        <div class="container ">

            <!-- Div sky for xs,sm ... -->
            <div class="d-md-none text-center py-5">
                <div class="pb-3">
                    <img src="../assets/habbo-logo.png" class="img-fluid" alt="">
                </div>

                <div class="pb-3 fs-3 text-center text-white ">UN POSTO BIZZARRO PIENO DI GENTE FANTASTICA</div>

                <div>
                    <a href="" class="btn btn-register text-white px-5 p-3 h-100">ISCRIVITI <br> GRATUITAMENTE!</a>
                </div>

            </div>

            <!-- Div with background img for md -->
            <div class="d-none d-md-flex row">

                    <div class="col bg-hotel">
                      
                    </div>

                    <div class="col position-relative pt-5">

                        <div class="row row-cols-2 text-white">

                            <div class="col">
                                <p>Effettua il login con una di queste opzioni</p>

                                <ButtonJumbotron :button="button" v-for="button, i in store.buttonJumbotron"
                                    :key="i + '_btnJumbo'" />

                            </div>

                            <div class="col">
                                <p>O usa la tua email & password</p>
                            </div>

                        </div>
                    </div>

            </div>


        </div>
    </section>
</template>


<script>
import { store } from '../store.js';
import ButtonJumbotron from './ButtonJumbotron.vue';

export default {
    components: { ButtonJumbotron },
    data() {
        return {
            store,
        }

    }
}
</script>


<style lang="scss" scoped>
.background-jumbotron {
    background-color: #25B8EE;

    @media screen and (min-width:768px) {
        background-color: #069;
        height: 500px;
    }
}

// .d-md-flex {
//     padding-top: 20vh;
// }


.bg-hotel::after {
    image-rendering: pixelated;
    background: url("../assets/hotel-jumbotron.png") no-repeat;
    background-position-y: center;
    display: block;
    position: absolute;
    height: 100%;
    left: -100px;
    top: -100px;
    width: 849px;
    content: '';
}
</style>