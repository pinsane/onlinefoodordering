<template>
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
</template>

<script>
export default {
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