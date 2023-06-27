<template>
  <router-link to="/" >
    <div class="" id="return">
    Retour à la home 
  </div>
  </router-link>
  <div class="">
    <img :src="restaurant.image" alt="">
  </div>
  <p>{{ restaurant.name }}</p><br>
  <p>Note du Restaurant :{{ restaurant.note }}</p><br>
  <p>Temps de Livraison: {{ restaurant.drive_time }}</p><br>
  <router-link to="/HelloWorld">
    <div>
      <h2>Retour chez HelloWorld</h2>
    </div>
  </router-link>
</template>

<script>
import BDD from "@/BDD";

import { useRoute } from "vue-router";
export default {
  name: "RestauranT",
  setup() {
    const route = useRoute();
    const restaurant = BDD.find((restaurant) => 
      restaurant.name === route.params.name
    );
    return {
      restaurant,
    };
  },
};
</script>

<style
scoped>
#return 
{
  margin: 40px;
  font-weight: 600 ;
  cursor: pointer;
  text-decoration: none ;
  color: #000;
  pointer-events: none !important;
  text-decoration: none  !important;
  
}
#return:hover 
{
  font-weight: 900;
}
</style>
