<template>
  <div class="restaurant--row">
    <h2 class="title">Nos Restaurants</h2>

    <div class="wrapper--card">
      <!-- <Routerlink  class="restaurant--wrapper" v-for="(restaurant, index) in three_restaurant" :key="index" to="/restaurant">
        <RestaurantCard :info_restaurant="restaurant"/>
      </Routerlink> -->
      <routerLink
        class="restaurant--wrapper"
        v-for="(restaurant, index) in three_restaurant"
        :key="index"
        :to="{ name: 'Restaurant', params: { name: restaurant.name } }"
      >
        <RestaurantCard :info_restaurant="restaurant" />
      </routerLink>
    </div>
  </div>
</template>

<script>
import RestaurantCard from "./RestaurantCard.vue";
export default {
  name: "RestaurantRow",
  components: {
    RestaurantCard,
  },
  props: {
    three_restaurant: Array,
  },
};
</script>

<style>
.restaurant--row .wrapper--card {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.restaurant--wrapper {

  width: 32%;
  text-decoration: none !important;
}
</style>
