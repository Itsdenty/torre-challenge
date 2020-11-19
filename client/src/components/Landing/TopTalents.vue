<template>
  <section class="section" id="trending-game">
    <div class="container">
      <h3 class="trending-text text-center mb-5">Top Talents</h3>
      <div class="row d-flex justify-content-between">
        <talent-card class="game-card" v-for="peep in getNewPeople" :key="peep.id" :detail="peep"/>
				<ul>
					<!-- <li v-for="schedule in getShedule" v-bind:key="schedule.id">{{schedule}}</li> -->
				</ul>
      </div>
    </div>
  </section>
</template>
<script>
import TalentCard from "@/components/TalentCard.vue";
import {mapGetters, mapActions} from 'vuex';
export default { 
	components: { TalentCard },
	data() {
		return {	 
			details: [
			]
		}
	},
	computed: {
    ...mapGetters([
        'getNewPeople'
		]),
		// people: {
    //     get() { return this.getPeople; },
    //     set: (value) => this.$store.commit('setPeople', value )
    //  }
	},
	mounted () {
  	this.getPeople()
	},
	methods: {
    ...mapActions([
        ]),
    getPeople: function(){
        this.$store.dispatch('getPeople');
    }
  }
}
</script>
<style scoped>
#trending-game {
	background: #F4F4F4;
}
#trending-game .trending-text{  
  font-family: Circular Std;
	font-size: 38px;
	line-height: normal;
	color: #AA3939;
  text-align: center; 
} 
#trending-game .game-card {
	width:32.5%;
}
@media screen and (max-width:640px) {
#trending-game .game-card {
	width:80%;
	margin:auto;
	margin-bottom:1rem;
}
}
</style>
