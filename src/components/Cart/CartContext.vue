<template>
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
            <CartRow
              v-for="row in cartItems"
              :key="row.id"
              :product="row.product"
              :quantity="row.quantity"
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import CartRow from "@/components/Cart/CartRow.vue";
export default {
  components: {
    CartRow
  },
  props: {
    cartItems: Array
  }
};
</script>

<style lang="scss" scoped>
</style>