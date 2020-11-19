<template>
  <div id="landing"> 
    <welcome-note /> 
    <top-talents />
    <top-opportunities />
    <navigation />
  </div>
</template>

<script> 
import WelcomeNote from "@/components/Landing/WelcomeNote.vue";
import TopTalents from "@/components/Landing/TopTalents.vue";
// import TopGames from "@/components/Landing/TopGames.vue";
import TopOpportunities from "@/components/Landing/TopOpportunities.vue";
import Navigation from "@/components/Landing/Navigation.vue";
// import TopOpportunities from '../components/Landing/TopOpportunities.vue';

export default {
  name: "components",
  components: { WelcomeNote, TopTalents, TopOpportunities, Navigation}
};
</script>

<style> 
</style>
