<template>
  <div>
    <section class="ftco-section ftco-cart">
      <div class="container">

        <CartContext :cartItems="cart.items" />

        <div class="row justify-content-end">
          <div class="col-lg-4 mt-5 cart-wrap ftco-animate">
            <div class="cart-total mb-3">
              <h3>  تخفیف</h3>
              <form action="#" class="info">
                <div class="form-group">
                  <label for>کد تخفیف</label>
                  <input type="text" class="form-control text-left px-3" placeholder />
                </div>
              </form>
            </div>
            <p>
              <a href="checkout.html" class="btn btn-primary py-3 px-4">اعمال تخفیف</a>
            </p>
          </div>
          <div class="col-lg-4 mt-5 cart-wrap ftco-animate">
            <TotalPrice />
            <p>
              <a @click="checkout" class="btn btn-primary py-3 px-4">نهایی کردن خرید</a>
            </p>
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
import CartContext from "@/components/Cart/CartContext.vue";
import TotalPrice from "@/components/Cart/TotalPrice.vue";

export default {
  components: {
    CartContext,
    TotalPrice
  },
  methods: {
    checkout() {
      this.$router.push({path:'checkout-page'})
    }
  },
  computed: {
    cart() {
      return this.$store.getters.cart;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>