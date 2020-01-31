<template>
  <div class="product">
    <a href="#" class="img-prod">
      <img class="img-fluid" :src="item.image" alt="Colorlib Template" />
      <span v-if="item.discount" class="status">{{item.discount}}%</span>
      <div class="overlay"></div>
    </a>
    <div class="text py-3 pb-4 px-3 text-center">
      <h3>
        <a href="#">{{item.name}}</a>
      </h3>
      <div class="d-flex">
        <div class="pricing">
          <p class="price">
            <span v-if="item.price"  class="mr-2 price-dc">{{item.price}} ریال</span>
            <span class="price-sale">{{item.salePrice}} ریال</span>
          </p>
        </div>
      </div>
      <div class="bottom-area d-flex px-3">
        <div class="m-auto d-flex">
          <a
            href="#"
            class="add-to-cart d-flex justify-content-center align-items-center text-center"
          >
            <span>
              <i class="ion-ios-menu"></i>
            </span>
          </a>
          <a href="#" class="buy-now d-flex justify-content-center align-items-center mx-1">
            <span>
              <i class="ion-ios-cart"></i>
            </span>
          </a>
          <a href="#" class="heart d-flex justify-content-center align-items-center">
            <span>
              <i class="ion-ios-heart"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        item: Object,
    },
};
</script>

<style lang="scss" scoped>
</style>