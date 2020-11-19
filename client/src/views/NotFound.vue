<template>
  <div id="not-found" class="d-flex justify-content-center align-items-center">
		<div class="container"> 
			<img src="/img/not-found.png" class="mb-3">
			<h2 class="oops">Oooops! Page Not Found</h2>
			<p>We are sorry for the inconvenience. Please try again.</p>
      <router-link to="/">
			  <button class="btn mx-auto d-block play btn-lg">Back to Homepage</button> 
      </router-link>
		</div>
	</div> 
</template>

<script>
export default {

}
</script>

<style scoped>
#not-found {
  background: #ffffff;
  height:100vh;
  text-align:center;
}
#not-found img { 
  height:25%; 
  width:60%;
}
#not-found .oops {
  font-weight: bolder;  
  color: #333333;
  font-size: 48px;
}
#not-found p {
  font-size: 24px;
  line-height: normal; 
  color: #666666;
}
#not-found .play {
  padding:.5rem 2rem;
  background-color: #269A4C; 
  color:#fff;
}
@media screen and (max-width:1040px) {
#not-found .oops {
  font-size: 28px;
}
#not-found p {
  font-size: 16px;
}
#not-found .play {
  padding:.3rem 2rem;
  font-size:12px;
}
}
</style>
