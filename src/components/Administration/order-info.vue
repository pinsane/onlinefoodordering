<template>
    <div>
        <div class="row">
            <CartContext :cartItems="order.order.items" />
        </div>
        <div class="row">
            <OrderUSerInfo :additionalInfo="order.additionalInfo" :user="order.user" />
        </div>
    </div>
</template>

<script>
import OrderUSerInfo from '@/components/Administration/order-user-info.vue';
import CartContext from '@/components/Cart/CartContext.vue';
    export default {
        components: {
            OrderUSerInfo,
            CartContext
        },
        props: {
            order : Object
        },
    }
</script>

<style lang="scss" scoped>

</style>