import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	products: [
	  	{
		    name: "Sledgehammer",
        price: 125.75 
      },
      {
        name: "Axe", 
        price: 190.50
      }, 
      {
        name: "Bandsaw",
        price: 562.13 
      },
      {
        name: "Chisel",
        price: 12.9 
      },
      {
        name: "Hacksaw", 
        price: 18.45
      }
    ],
    cart: [],
    totalPrice: 0,
  },
  getters: {
    products: (state) => state.products,
    cart: (state) => state.cart,
    totalPrice: (state) => Math.round(state.totalPrice * 100) / 100,
  },
  actions: {
    addQuentity({ commit }, id) {
      commit('addQuentity', id);
    },
    removeQuentity({ commit }, id) {
      commit('removeQuentity', id);
    },
    fetchCart({ commit }) {
      commit('fetchCart');
    },
    updateCart({ commit }, array) {
      console.log(array);
      commit('updateCart', array);
    },
  },
  mutations: {
    addQuentity: (state, productId) => {
      let product = state.cart[productId];
      product.quentity += 1;
      state.totalPrice += product.price;
    },
    removeQuentity: (state, productId) => {
      let product = state.cart[productId];
      product.quentity -= 1;
      state.totalPrice -= product.price;
    },
    fetchCart: (state) => {
      state.products.map((item, index) => {
        state.cart.push({
          id: index,
          name: item.name,
          price: item.price,
          quentity: 0,
        })
      })
    },
    updateCart: (state, array) => {
      state.cart = array;

      let total = 0;
      state.cart.map(item => {
        if(item.quentity > 0) {
          console.log(item.quentity, item.price);
          total = total + (item.quentity * item.price); 
        }
      });
      state.totalPrice = total;
    }
  },
  modules: {
  }
})
