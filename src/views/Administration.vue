<template>
  <div v-if="user && user.role === 'admin'">
    <section class="ftco-section ftco-cart">
      <div class="container">
        <div class="row">
          <div class="col-md-12 ftco-animate">
            <h3>مدیریت سایت</h3>
            <div v-for="(order, index) in orders" :key="index" @click="currentOrder=order">
              <div
                class="hand"
              >OrderId =>{{order.additionalInfo.orderId}} | User: {{order.user.email}} | total => {{order.order.total}}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="ftco-section ftco-cart" v-if="currentOrder">
      <div class="container">
        <div class="row">
          <div class="col-md-12 ftco-animate">
              <orderInfo  :order="currentOrder" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import orderInfo from '@/components/Administration/order-info.vue';
export default {
    components: {
        orderInfo,
    },
  data() {
    return {
      currentOrder: null
    };
  },
  computed: {
    user() {
      return this.$store.getters.currentUser;
    },
    orders() {
      return this.$store.getters.orders;
    }
  }
};
</script>

<style lang="scss" scoped>
.hand {
  cursor: pointer;
}
</style>