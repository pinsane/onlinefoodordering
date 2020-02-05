<template>
  <div>
    <Carousel />

    <section class="ftco-section">
      <div class="container">
        <div class="row no-gutters ftco-services">
          <ServiceTile  bgClass="bg-color-1" iconClass="flaticon-shipped" line1="Free Shipping" line2="On order over $100" />
          <ServiceTile  bgClass="bg-color-2" iconClass="flaticon-diet" line1="Always Fresh" line2="Product well package" />
          <ServiceTile  bgClass="bg-color-3" iconClass="flaticon-award" line1="Superior Quality" line2="Quality Products" />
          <ServiceTile  bgClass="bg-color-4" iconClass="flaticon-customer-service" line1="Support" line2="24/7 Support" />
        </div>
      </div>
    </section>
    <CategoryTile  />
    
    <FeaturedProducts />

    <section class="ftco-section img" style="background-image: url(images/bg_3.jpg);">
      <div class="container">
        <div class="row justify-content-end">
          <div class="col-md-6 heading-section ftco-animate deal-of-the-day ftco-animate">
            <span class="subheading">Best Price For You</span>
            <h2 class="mb-4">Deal of the day</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            <h3>
              <a href="#">Spinach</a>
            </h3>
            <span class="price">
              $10
              <a href="#">now $5 only</a>
            </span>
            <div id="timer" class="d-flex mt-5">
              <div class="time" id="days"></div>
              <div class="time pl-3" id="hours"></div>
              <div class="time pl-3" id="minutes"></div>
              <div class="time pl-3" id="seconds"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="ftco-section ftco-no-pt ftco-no-pb py-5 bg-light">
      <div class="container py-4">
        <div class="row d-flex justify-content-center py-5">
          <div class="col-md-6">
            <h2 style="font-size: 22px;" class="mb-0">Subcribe to our Newsletter</h2>
            <span>Get e-mail updates about our latest shops and special offers</span>
          </div>
          <div class="col-md-6 d-flex align-items-center">
            <form action="#" class="subscribe-form">
              <div class="form-group d-flex">
                <input type="text" class="form-control" placeholder="Enter email address" />
                <input type="submit" value="Subscribe" class="submit px-3" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
// @ is an alias to /src
import Carousel from "@/components/Home/Carousel.vue";
import FeaturedProducts from '@/components/Home/FeaturedProducts.vue';
import ServiceTile from '@/components/Home/ServiceTile.vue';
import CategoryTile from '@/components/Home/CategoryTile.vue';

export default {
  name: "home",
  data() {
    return {
     
    };
  },
  components: {
    Carousel,
    FeaturedProducts,
    ServiceTile,
    CategoryTile
  }
};
</script>
<style lang="scss" scop>
</style>