<template>
  <div class="restaurant--card">
    <div :style="changeBackground" class="restaurant--image"></div>
    <div class="restaurant--information">
      <div class="top">
        <p class="name">{{ info_restaurant.name }}</p>
        <br/>
        <p class="note">
          <span>{{ info_restaurant.note }}</span>
        </p>
      </div>
      <p class="time">{{ info_restaurant.drive_time }}</p>
    </div>
  </div>
</template>
<script>
import { computed } from "@vue/reactivity";
export default {
  name: "RestaurantCard",
  props: {
    info_restaurant: Object,
  },
  setup(props) {
    const changeBackground = computed(() => {
      return {
        backgroundImage: `url(${props.info_restaurant.image})`,
      };
    });
    //return
    return {
      changeBackground,
    };
  },
};
</script>
<style>
.restaurant--card {
  width:100%;
  height: 30vh;
}
p {
  margin: 0px;
}
.restaurant--image {
  background: url(../assets/fond47.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: center;
  background-position: center;
  height: 70%;
}
.restaurant--information .top {
  display: flex;
  margin-top: 10px 0px;
  align-items: center;
  justify-content: space-between;
}
.restaurant--information .top .note {
  background-color: #eee;
  height: 30px;
  width: 30px;
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
</style>
