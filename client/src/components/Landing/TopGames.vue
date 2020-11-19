<template>
  <section class="bg-#E5E5E5" id="top-game">
    <div class="container">
      <h3 class="top-text text-center my-5">Unavailable Games</h3>
      <div class="row d-flex justify-content-between">
        <talent-card class="game-card" v-for="(detail, index) in filteredGame" :key="index" :detail="detail"/>
      </div>
    </div>
  </section>
</template>
<script>
import GameCard from "@/components/GameCard.vue";
import {mapGetters, mapActions} from 'vuex';
import games from '../../utils/games';
import moment from 'moment';
export default { 
	components: { GameCard },
	data() {
		return {	 
			details: games
		}
	},
		computed: {
    ...mapGetters([
        'getNewSchedule'
		]),
				filteredGame: function() {
			// console.log("new schedule", this.getNewSchedule);
			const dets = [];
			const names = [];
			const self = this;
			self.details.forEach(element => {
				self.getNewSchedule.forEach(el => {
					if (element.name !== el.name && !names.includes(element.name)) {
						let splittedTime = element.time.split(':');
						element.date = moment().startOf('day').add(splittedTime[0], 'hours').add(splittedTime[1], 'minutes').format('YYYY-MM-DD HH:MM');
						element.available = true;
						dets.push(element);
						names.push(element.name);
					}
					names.push(el.name);
					
				})
			});
			return dets;
		}
	},
	mounted () {
  	// this.getSchedule()
	},
	methods: {
    ...mapActions([
        ]),
    getSchedule: function(){
        this.$store.dispatch('getSchedule');
		}
  }
}
</script>
<style scoped>
#top-game .top-text {
  font-family: Circular Std;
	font-size: 38px;
	line-height: normal;
	color: #21703A;
  text-align: center; 
} 
#top-game  .game-card { 
	width:32.5%;
}
@media screen and (max-width:640px) {
#top-game .game-card {
	width:80%;
	margin:auto;
	margin-bottom:1rem;
}
} 
</style>
