<template>
  <div id="app">
    <TopBand />
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import TopBand from "@/components/TopBand.vue";
export default {
  components: {
    Navbar,
    Footer,
    TopBand
  }
};
</script>

<style lang="scss" >
@import "@/assets/scss/style.scss";


</style>
