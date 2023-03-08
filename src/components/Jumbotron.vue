<template>
    <section class="background-jumbotron">
        <div class="container">

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
            <div class="d-none d-md-flex">
                ciao
            </div>

        </div>
    </section>
</template>


<script>
export default {

}
</script>


<style lang="scss" scoped>
.background-jumbotron {
    background-color: #25B8EE;

    @media screen and (min-width:768px) {
        background-color: transparent;
        background-image: url("../assets/hotel-jumbotron.png");
    }
}
</style>