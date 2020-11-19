<template>
	<section class="pb-0" id="section-components">
		<div class="container text-center py-5">
			<div class="row mb-3">
				<div class="col-lg-12 col-md-12  col-sm-12 col-xs-12">
					<h3 class="welcome">Welcome To Torre</h3>
				</div>
			</div>
				<div class="row text-line">
					<!-- <div class="col-lg-12 col-md-12  col-sm-12 col-xs-12">
						<p class="welcome-text">Welcome To Naija Lottery page where you can stake <br> and win big</p>
					</div> -->
			</div>
		</div>
	</section>
</template>

<script>
export default {};
</script>

<style scoped>
/* #section-components{
	background-image: url("/img/bg-welcome.png");
  background-color: #cccccc;
} */
#section-components .welcome{
	font-family: Circular Std;
	font-size: 38px;
	line-height: normal;
	color: #AA3939; 
}
#section-components .welcome-text{
	font-family: Circular Std;
	font-size: 24px;
	line-height: 36px;
	color: #666666;
}
@media screen and (max-width:640px) {
#section-components .welcome{
	font-size: 28px; 
}
#section-components .welcome-text{ 
	font-size: 16px; 
}
}
</style>
