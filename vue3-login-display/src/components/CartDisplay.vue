<template>
  <div>
    <h1>Your Cart</h1>
    <div v-if="cart.length">
      <div v-for="item in cart" :key="item.id">
        <h2>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
        <p>@{{ item.location }}</p>
      </div>
    </div>
    <div v-else>
      <p>Your cart is empty.</p>
    </div>
  </div>
</template>

<script setup>
import { userCart } from '@/store/userCart';
import { computed } from 'vue';

const cartStore = userCart();
const cart = computed(() => cartStore.cart);
</script>

<style scoped>
/* Add your styles here if needed */
</style>
