<template>
  <div>
    <HeaderImage />
    <section v-if="!isCheckout" class="ftco-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-7 ftco-animate">
            <form action="#" class="billing-form">
              <h3 class="mb-4 billing-heading">جزئیات صورتحساب</h3>
              <div class="row align-items-end">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="firstname">نام</label>
                    <input type="text" class="form-control" placeholder v-model="additionalInfo.name" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="lastname">نام خانوادگی</label>
                    <input type="text" class="form-control" placeholder v-model="additionalInfo.lastName" />
                  </div>
                </div>
                <div class="w-100"></div>
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="streetaddress">آدرس محل تحویل</label>
                    <textarea 
                      class="form-control"
                      placeholder="آدرس" v-model="additionalInfo.address"
                    />
                  </div> 
                </div> 
                <div class="w-100"></div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="phone">شماره تلفن</label>
                    <input type="text" class="form-control" placeholder v-model="additionalInfo.tel" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="emailaddress">ایمیل</label>
                    <input type="text" class="form-control" placeholder />
                  </div>
                </div>
                <div class="w-100"></div>  
              </div>
            </form>
            <!-- END -->
          </div>
          <div class="col-xl-5">
            <div class="row mt-5 pt-3">
              <div class="col-md-12 d-flex mb-5">
                <TotalPrice />
              </div>
              <div class="col-md-12">
                <div class="cart-detail p-3 p-md-4">
                  <h3 class="billing-heading mb-4">نحوه پرداخت </h3>
                  <div class="form-group">
                   
                  </div>
                  <div class="form-group">
                    <div class="col-md-12">
                      <div class="radio">
                        <label>
                          <input type="radio" name="optradio" class="mr-2" /> پرداخت در محل</label>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-md-12">
                      <div class="radio">
                        <label>
                          <input type="radio" name="optradio" class="mr-2" /> پرداخت آنلاین
                        </label>
                      </div>
                    </div>
                  </div>
                 
                  <p>
                    <a @click="placeOrder" class="btn btn-primary py-3 px-4">تایید سفارش</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- .col-md-8 -->
        </div>
      </div>
    </section>
    <section v-else class="ftco-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-7 ftco-animate">
            <form action="#" class="billing-form">
              <h3 class="mb-4 billing-heading">سفارش شما با شماره {{additionalInfo.orderId}} در سیستم ثبت شد.</h3>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- .section -->

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
import HeaderImage from "@/components/HeaderImage.vue";
import TotalPrice from "@/components/Cart/TotalPrice.vue";

export default {
  components: {
    HeaderImage,
    TotalPrice
  },
  data() {
    return {
      isCheckout: false,
      additionalInfo: {},
    };
  },
  methods: {
    placeOrder() {
      this.additionalInfo.orderId = Math.random().toString(36).substring(3, 7) + Math.random().toString(36).substring(11, 15);
      this.isCheckout = true;
      this.$store.dispatch('checkout', this.additionalInfo);
    }
  },
  computed: {
    cart() {
      return this.$store.getters.cart;
    },
    total() {
      return this.$store.getters.cart.total;
    },
    totalDiscount() {
      return this.$store.getters.cart.totalDiscount;
    },
    totalPrice() {
      return this.total + this.totalDiscount;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>