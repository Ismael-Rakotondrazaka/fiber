<template>
  <TheHeader />
  <TheHomeMain :opinions="opinions" :advantages="advantages" />
  <TheFooter />
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheHomeMain from "@/components/TheHomeMain.vue";
import opinions from "@/assets/json/Opinions.json";
import advantages from "@/assets/json/Advantages.json";

export default {
  name: "HomeView",
  components: {
    TheHeader,
    TheFooter,
    TheHomeMain,
  },
  data: function () {
    return {
      opinions: opinions,
      advantages: advantages,
    };
  },
};
</script>
