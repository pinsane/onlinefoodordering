<template>
  <section id="home-section" class="hero">
    <div class="home-slider">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="400000"
        controls
        indicators
        background="#ababab"
        fade
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->
        <b-carousel-slide
          caption="سفارش آنلاین غذا"
          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
          class="slider-item"
          img-src="/images/bg_1.jpg"
        >
        </b-carousel-slide>

        <b-carousel-slide
          caption="Second slide"
          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
          class="slider-item"
          img-src="/images/bg_2.jpg"
        >
        </b-carousel-slide>
       
      </b-carousel>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.slider-item {
    height: 650px; 
}
</style>