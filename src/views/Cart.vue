<template>
  <div>
    <section class="ftco-section ftco-cart">
      <div class="container">
        <div class="row">
          <div class="col-md-12 ftco-animate">
            <div class="cart-list">
              <table class="table">
                <thead class="thead-primary">
                  <tr class="text-center">
                    <th>&nbsp;</th>
                    <th>&nbsp;</th>
                    <th>غذا</th>
                    <th>قیمت</th>
                    <th>مقدار</th>
                    <th>قیمت کل</th>
                  </tr>
                </thead>
                <tbody>
                  <CartRow v-for="row in cart.items" :key="row.id" :product="row.product" :quantity="row.quantity"/>
                </tbody>
              </table>
            </div>
          </div>
        </div>
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
          <!-- <div class="col-lg-4 mt-5 cart-wrap ftco-animate">
            <div class="cart-total mb-3">
              <h3>Estimate shipping and tax</h3>
              <p>Enter your destination to get a shipping estimate</p>
              <form action="#" class="info">
                <div class="form-group">
                  <label for>Country</label>
                  <input type="text" class="form-control text-left px-3" placeholder />
                </div>
                <div class="form-group">
                  <label for="country">State/Province</label>
                  <input type="text" class="form-control text-left px-3" placeholder />
                </div>
                <div class="form-group">
                  <label for="country">Zip/Postal Code</label>
                  <input type="text" class="form-control text-left px-3" placeholder />
                </div>
              </form>
            </div>
            <p>
              <a href="checkout.html" class="btn btn-primary py-3 px-4">Estimate</a>
            </p>
          </div> -->
          <div class="col-lg-4 mt-5 cart-wrap ftco-animate">
            <div class="cart-total mb-3">
              <h3>مجموع سبد خرید</h3>

              <p class="d-flex">
                <span>قیمت کل</span>
                <span dir="ltr">{{totalPrice}} ریال</span>
              </p>
              <p class="d-flex">
                <span>تخفیف</span>
                <span dir="ltr">{{totalDiscount}} ریال</span>
              </p>
              <hr />
              <p class="d-flex total-price">
                <span>قابل پرداخت</span>
                <span dir="ltr">{{total}} ریال</span>
              </p>
            </div>
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
import CartRow from "@/components/Cart/CartRow.vue";
export default {
  components: {
    CartRow
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
    total() {
           return  this.$store.getters.cart.total;
    },
    totalDiscount() {
           return  this.$store.getters.cart.totalDiscount;
    },
    totalPrice() {
           return this.total + this.totalDiscount;
    }
  },
};
</script>

<style lang="scss" scoped>
</style>