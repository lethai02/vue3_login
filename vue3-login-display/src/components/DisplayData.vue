
<template>
  <div class="grid grid-flow-row">
    <div class="flex justify-between w-full text-3xl mb-10 items-center ">
      <div class="flex-grow text-center">Display data</div>
      <button class="order-last mr-4 border-solid border-4 rounded-md p-2 pr-10" @click="gotoCart">Cart: {{ cartStore.cart.length }}</button>
    </div>

    <div class="grid grid-cols-3 gap-5">
      <div class="border-solid border-4 rounded-md border-light-blue-500 h-auto text-lg"
       v-for="event in events"
       :key="event.id"
      >
      <p class="font-black">{{ event.title }}</p>
      <p>{{ event.description }}</p>
      <p>@{{ event.location }}</p>
      <button class="bg-orange-300 p-1 rounded-lg active:bg-orange-500"
      @click="AddCart(event)"
      >Add</button>
    </div>
    </div>
    
  </div>
</template>
<script setup>
import EventService from '../services/EventService';
import { userCart } from '@/store/userCart';
import { onMounted } from 'vue';
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const cartStore = userCart();
const events = ref([]);
const router = useRouter();

const AddCart = (eventId) => {
  cartStore.addToCart(eventId)
};
const gotoCart = () =>{
  router.push({ name: 'cart'})
};

//Fetch events from API
onMounted(() => {
  EventService.getEvents()
  .then((response) => {
    events.value = response.data
  })
  .catch((error) => {
      console.log(error);
    });
    
})

</script>
<!-- 
<script>
import EventService from '../services/EventService';
export default {
  name: 'DisplayData',
  components: {

  },
  data(){
    return {
      events: [],
      cart: []
    }
  },
  created(){
    EventService.getEvents()
    .then(reponse => {
      this.events = reponse.data
    })
    .catch(error => {
      console.log(error)
    })
  },
  methods: {
    addToCard(eventId){
      // this.cart.push(eventId);
      this.$emit('addToCart', this.cart.push(eventId))
    },
    gotoCart(){
      this.$router.push({ name: 'cart', params: { cartItems: this.cart } });

    }
  }
}
</script> -->

<style scoped>
</style>