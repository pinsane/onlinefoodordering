<template>
  <tr class="text-center">
    <td class="product-remove">
      <a href="#">
        <span class="ion-ios-close"></span>
      </a>
    </td>

    <td class="image-prod">
      <div class="img" :style="`background-image:url(${product.image});`"></div>
    </td>

    <td class="product-name">
      <h3>{{product.name}}</h3>
    </td>

    <td class="price">{{product.salePrice}} ریال</td>

    <td class="quantity">
      <div class="input-group mb-3">
        <input
        readonly
          type="text"
          name="quantity"
          class="quantity form-control input-number"
          v-model="quantity"
          min="1"
          max="100"
        />
      </div>
    </td>

    <td class="total">{{total}}</td>
  </tr>
</template>

<script>
export default {
    props: {
        product: Object,
        quantity: Number

    },
    computed: {
        total() {
            return this.quantity * this.product.salePrice;
        }
    },
};
</script>

<style lang="scss" scoped>
</style>