<template>
	<section id="game-card" style="padding:5px;">   
		<!--Run v-for="(detail, index) in details" :key="index" on you page and pass the required data to utilize component-->
		<div class="col">
			<div class="row">
				<div class="col-sm d-flex">
					<div class="card card-body flex-fill">
						<p class="success-text">{{detail.organizations[0].name}}</p> 
            <div class="row" style="margin-top: 5%">
				  		<div class="col-4 mx-auto text-center">
            		<img class="img-circle img" :src="detail.organizations[0].picture"> 
          		</div>   
						</div>
						<div class="row" style="margin-top: 5%">
				  		<div class="col-4">
            		<span class="text-left">status: {{detail.status}}</span>
          		</div>   
						  <div class="col-8">
                <span class="text-right">Type: {{detail.type}}</span>
              </div>
						</div>
					  <div class="row" style="margin-top: 5%;">
							<p class="text-center" style="margin-left: 5%;">{{detail.objective.substring(0, 40)}} {{detail.objective.length > 40 ? '....' : ' ' }}</p>
						</div>
						<div class="row" style="margin-top: 2%">
							<p class="time" :id="detail.id">{{detail.locations.join(", ")}} {{detail.locations.length > 0 ? " " : "Location unavailable"}}</p>
						</div>
						<div class="card result py-2" style="margin-top: 2%;"> 
							<div class="d-flex justify-content-center">
								<router-link class="px-md-3 btn button" to="/result">VIEW DETAILS
													</router-link>    
							</div> 
			      </div>
					</div>
				</div>
			</div>
			</div>
	</section>
</template>

<script>
import moment from 'moment';
export default {
  props: { 
    detail: Object
	},
	mounted () {
	},
	methods: {
	}
}
</script>

<style scoped> 
#game-card .success-text { 
	font-family: Circular Std;
	font-size: 18px;
	line-height: normal;
	color: #666666;
}
#game-card {
	min-height: 360px;
}
#game-card img {
	width:120px;
	height:120px; 
}
.img {
  margin-left: -15%;
}
#game-card .estimated,
#game-card .draw { 
	font-family: Circular Std;
	font-size: 14px; 
	color: #666666;
	font-weight: bold; 
} 
#game-card .draw {  
	margin-top:-5px;
}
#game-card .money {
	font-family: Circular Std;
	font-size: 30px;
	line-height: normal;
	color: #333333;
	font-weight: bold;
}
#game-card .time{
	font-family: Circular Std;
	font-size: 16px;
	line-height: 18px;
	font-weight: bolder;
	color: #666666;
	letter-spacing: 4px;
	border: 1px solid #DADADA;
	padding: 8px;
	border-radius: 10px;
	margin-bottom: 2%;
  width: 100%;
}

.img{
	margin-bottom: 13px;
}
.nxt {
	margin-top: 5px;
}

.lst {
	margin-top: 15px;
}
#game-card .result {
	background: #FFAAAA;
	border:none;
	overflow:hidden; 
	margin-top:-10px;
	border-radius:8px;
} 
#game-card .time-count {
	font-size: 10px;
	font-weight: bold; 
	color: #666666; 
	margin-top:-15px;
}
#game-card button {
	background-color: #FFAAAA;
	font-family: Circular Std;
	font-size: 12px;
	line-height: normal;
	text-transform: uppercase;
	color:#269A4C;
	text-align:left;
	border:none;
	box-shadow:none;
	outline:none;
}
#game-card button:hover {
	text-decoration:none;
	border:none;
	box-shadow:none;
	outline:none;
}

@media screen and (max-width:1040px) {
#game-card .success-text {
	font-size: 13px; 
}
#game-card .money { 
	font-size: 20px;
}
#game-card button {
	font-size: 12px; 
}
}
@media screen and (max-width:640px) {
#game-card button {
	font-size: 15px; 
}
#game-card .bg-white {
	padding-left:4rem!important;
}
}
</style>
