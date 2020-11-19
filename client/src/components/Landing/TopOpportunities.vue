<template>
  <section class="section" id="trending-game">
    <div class="container">
      <h3 class="trending-text text-center mb-5">Top Opportunities</h3>
      <div class="row d-flex justify-content-between">
        <opportunity-card class="game-card" v-for="opportunity in getNewOpportunities" :key="opportunity.id" :detail="opportunity"/>
				<ul>
				</ul>
      </div>
    </div>
  </section>
</template>
<script>
import OpportunityCard from "@/components/OpportunityCard.vue";
import {mapGetters, mapActions} from 'vuex';
export default { 
	components: { OpportunityCard },
	data() {
		return {	 
		}
	},
	computed: {
    ...mapGetters([
        'getNewOpportunities'
		]),
		// people: {
    //     get() { return this.getPeople; },
    //     set: (value) => this.$store.commit('setPeople', value )
    //  }
	},
	mounted () {
  	this.getOpportunities()
	},
	methods: {
    ...mapActions([
        ]),
    getOpportunities: function(){
        this.$store.dispatch('getOpportunities');
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
