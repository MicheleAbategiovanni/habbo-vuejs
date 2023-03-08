<template>
  <TheHeader />

  <Jumbotron />

</template>


<script>
import TheHeader from "./components/TheHeader.vue";
import Jumbotron from "./components/Jumbotron.vue";

export default {
  components: { TheHeader, Jumbotron },
}
</script>


<style lang="scss">
@use "./styles/general.scss";
</style>