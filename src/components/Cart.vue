<template>
<div>
  <template>
    <div class="w-100 cart d-flex flex-wrap">
      <div v-for="(product, index) in products" :key="index" class="my-2 mx-2 flex-grow-1" style="max-width: 15rem;">
        <b-card
          :title="product.name"
        >
          <span class="btn btn-primary" @click="checkAddProduct(index)">Add Product</span>
        </b-card>
        </div>
    </div>
  </template>
  <template>
    <h1 class="mt-5">Cart: </h1>
    <div v-for="(item, index) in cart" v-show="item.quentity > 0">
      <div class="d-flex justify-content-between my-5 ">
        <span>Name: {{ item.name }}</span><span>Price: {{ item.price }}</span><span>Quentity: {{ item.quentity }}</span><span>Total: {{ item.price * item.quentity }}</span>
        <span class="btn btn-danger" @click="checkRemoveProduct(index)">Remove</span>
      </div>
    </div>
    <h2 v-show="totalPrice > 0">Total Price: {{ totalPrice }}</h2>
  </template>
</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Cart',
  data() {
    return {
 
    }
  },
  computed: {
    ...mapGetters(['products', 'cart', 'totalPrice'])
  },
  methods:{
    ...mapActions(['addQuentity', 'removeQuentity', 'fetchCart', 'updateCart']),
    checkAddProduct(id) {
      this.cartView = true;
      // check this cart product id quentity
      this.addQuentity(id);
      window.localStorage.setItem('Cart', JSON.stringify(this.cart));
    },
    checkRemoveProduct(id) {
      if (this.cart[id].quentity >= 1) this.removeQuentity(id);
      window.localStorage.setItem('Cart', JSON.stringify(this.cart));
    }
  },
  created() {
    this.fetchCart();
    if(window.localStorage.getItem('Cart')) {
      this.updateCart(JSON.parse(window.localStorage.getItem('Cart')));        
    }
  }
}
</script>