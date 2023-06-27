<template>
  <div class="home">
    <div class="header">
      <router-link to="/HelloWorld">
    <div>
      <h2>Retour chez HelloWorld</h2>
    </div>
  </router-link>
      <img src="../assets/Uber.jpg" alt="" />
      <div class="wrapper--input">
        <input
          v-model="user_search_restaurant"
          type="text"
          name=""
          id="" 
          placeholder=" De quoi avez vous envie ???"
        />
        <div class="search">
          <router-link v-for="(restaurant, i) in search_restaurant"
            :key="i" :to="{name:'Restaurant' , params:{
            name:restaurant.name}
          } ">
            <div
            class="container--restaurant--search"
          >
            <div class="wrapper--img">
              <img :src="restaurant.image" alt="" />
              <p>{{ restaurant.name }}</p>
            </div>
          </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="bannier"></div>
    <RestaurantRow
      v-for="(data, i) in data_restaurant"
      :three_restaurant="data"
      :key="i"
    />
  </div>
</template>
<script>
//IMPORT
import BDD from "@/BDD";
import { onMounted, ref, watch } from "vue";
//COMPONENTS
import RestaurantRow from "@/components/RestaurantRow.vue";
export default {
  name: "HomE",
  components: {
    RestaurantRow,
  },
  setup() {
    class Restaurant {
      constructor(name, note, image, drive_time) {
        this.name = name;
        this.note = note;
        this.image = image;
        this.drive_time = drive_time;
      }
    }
    let data_restaurant = ref([]);
    let all_restaurant = [];
    const makeDataRestaurant = () => {
      let three_restaurant = [];
      for (const restaurant of BDD) {
        const new_restaurant = new Restaurant(
          restaurant.name,
          restaurant.note,
          restaurant.image,
          restaurant.drive_time
        );
        //foutre tous les restaurant dedans
        all_restaurant.push(new_restaurant);
        if (three_restaurant.length === 2) {
          three_restaurant.push(new_restaurant);
          data_restaurant.value.push(three_restaurant);
          three_restaurant = [];
        } else {
          three_restaurant.push(new_restaurant);
        }
      }
    };
    // User search restaurant
    let user_search_restaurant = ref("");
    let search_restaurant = ref([]);
    watch(user_search_restaurant, (new_value) => {
      let regex = RegExp(new_value);
      let new_search_restaurant = all_restaurant.filter((restaurant) =>
        regex.test(restaurant.name.toLowerCase())
      );
      // search_restaurant.value = new_search_restaurant;
      // if (new_value == 0) {
      //   search_restaurant.value = [];
      // } else {
      //   search_restaurant.value = new_search_restaurant;
      // }
      new_value == 0 ? search_restaurant.value = [] : search_restaurant.value = new_search_restaurant;
    });
    onMounted(makeDataRestaurant);
  
    return {
      data_restaurant,
      user_search_restaurant,
      search_restaurant,
    };
  },
};
</script>
<style>
.header {
  height: 120px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
img {
  width: 200px;
  height: 100px;
}
.wrapper--input {
  position: relative;
}
.wrapper--input .search {
  position: absolute;
  top: 100%;
  width: 100%;
  height: 400px;
  background-color: #fff;
}
.wrapper--input .search .container--restaurant--search { 

  display: flex;
  align-items: center;
  padding: 10px;
  
}
.wrapper--input .search .container--restaurant--search:hover
{
  background-color: #f6f6f6;
}

.wrapper--img {
  height: 40px;
  width: 40px;
  margin-right: 25px;
  border-radius: 50%;
  overflow: hidden;
}
.wrapper--img img {
  height: 100%;
  width: auto;
}
.wrapper--input input {
  background-color: #f6f6f6;
  border: none;
  height: 60px;
  width: 400px;
  outline: none;
  padding-left: 20px;
}
.bannier {
  height: 200px;
  width: 100%;
  background: url("../assets/bann.jpg");
  background-size: cover;
  background-position: center center;
}
</style>
