<template>
  <div class="grid grid-flow-row">
    <div class="flex justify-between w-full text-3xl mb-10 items-center ">
      <div class="flex-grow text-center">Display data</div>
      <button class="order-last mr-4 border-solid border-4 rounded-md p-2 pr-10">Cart: {{ cart.length }}</button>
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
      @click="addToCard(event.id)"
      >Add</button>
    </div>
    </div>
    
  </div>
</template>

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
      this.cart.push(eventId);
    }
  }
}
</script>

<style scoped>
</style>