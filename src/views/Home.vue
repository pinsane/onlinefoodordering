<template>
  <div class="home">
    <b-jumbotron header="BootstrapVue" lead="Online Food">
      <p>For more information visit our website</p>
      <b-btn variant="primary" href="#">More Info</b-btn>
    </b-jumbotron>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to food online" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
