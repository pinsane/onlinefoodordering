<template>
  <div>
    <Carousel />

    <section class="ftco-section">
      <div class="container">
        <div class="row no-gutters ftco-services">
          <ServiceTile  bgClass="bg-color-1" iconClass="flaticon-shipped" line1="ارسال رایگان" line2="برای سفارشات بالای سی هزار تومان " />
          <ServiceTile  bgClass="bg-color-2" iconClass="flaticon-diet" line1="همیشه تازه" line2=" بسته بندی حرفه ای سفارشات" />
          <ServiceTile  bgClass="bg-color-3" iconClass="flaticon-award" line1="کیفیت برتر" line2="استفاده از مواد درجه یک" />
          <ServiceTile  bgClass="bg-color-4" iconClass="flaticon-customer-service" line1="پشتیبانی" line2="تمام طول هفته و تمام وقت" />
        </div>
      </div>
    </section>
    
    <CategoryTile  />
    
    <FeaturedProducts />

    <section class="ftco-section img" style="background-image: url(images/bg_3.jpg);">
      <div class="container">
        <div class="row justify-content-end">
          <div class="col-md-6 heading-section ftco-animate deal-of-the-day ftco-animate">
            <span class="subheading">بهترین قیمت</span>
            <h2 class="mb-4">پیشنهادات ویژه</h2>
            <p>سعی ما دراین است که بهترین غذا در کمترین زمان در اختیار شما باشد.</p>
            <h3>
              <a href="#"> دیس 2 نفره</a>
            </h3>
            <span class="price">
           
              <a href="#">امروز فقط 20 هزار تومان</a>
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
            <h2 style="font-size: 22px;" class="mb-0">در خبرنامه ما عضو شوید</h2>
            <span>برای اطلاع از اخرین پیشهادات و خدمات ویژه 
            </span>
          </div>
          <div class="col-md-6 d-flex align-items-center">
            <form action="#" class="subscribe-form">
              <div class="form-group d-flex">
                <input type="text" class="form-control" placeholder="ایمیل خود را وارد کنید" />
                <input type="submit" value="تایید" class="submit px-3" />
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