<template>
  <footer id="footer" class="footer masthead ">
  <div class="container">
    <div class="row offset-1">
      <div class="col-4 col-xs-4 text-center foot1">
         <div class="row mt-4">
          <span class="title">INFORMATION</span>
        </div>
        <div class="row mt-4">
          <router-link  class="link" to="/">
            Home
          </router-link>
        </div>
        <div class="row mt-4">
          <router-link  class="link" to="/media">
            Media
          </router-link>
        </div>
        <div class="row mt-4">
          <router-link  class="link" to="/about">
            About Us
          </router-link>
        </div>
        <div  class="row">
          <br>
          <!-- <img src="/img/icons/common/base-logo.png" class=" base_logo"> -->
          <h1 style="color: white">TORRE</h1>
        </div>
      </div>
      <div class="col-4 text-center foot2">
        <div class="row mt-4">
          <span class="title">MY ACCOUNT</span>
        </div>
        <div class="row mt-4">
          <router-link  class="link" to="/login">
            Login
          </router-link>
        </div>
        <div class="row mt-4">
          <router-link  class="link" to="/register">
            Sign Up
          </router-link>
        </div>
        <div class="row pt-4">
          <router-link  class="link" to="/media">
            Tv Schedule
          </router-link>
        </div>
      </div>
      <div class="col-md-4 col-xs-12 text-center">
        <div class="row mt-4">
          <span class="title">NEWSLETTER</span>
        </div>

        <div class="row mt-4">  
          <input type="text" class="form-control form" id="inputPassword">
        </div>

        <div class="row mt-4">
          <button type="button" class="btn button">SEND</button>
        </div>
      </div>
    </div>
  </div>
    </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
<style scoped>
.base-logo {
  width: 40%;
}
#footer.masthead {
  margin-top: -70px; 
  min-height: 300px;
  background-image: url("/img/bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.title {
  font-size: 15px;
  color: #FFFFFF !important;
  font-weight: bolder;
}
.link {
  font-family: Circular Std;
  font-size: 18px;
  line-height: normal;
  color: #FFAAAA;
}
.link:hover {
  text-decoration:none;
  color:#fff;
}
.form {
  background: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  width:60%;
  border:none;
  outline:none;
}
.button {
	color:  white;
	background-color: #AA3939;
  width: 40%;

}
.base_logo {
  margin-top: 50px;
  width: 200px;
  height:50px;
}
@media screen and (max-width:640px) {
.foot2 {
  margin-left:15%;
}
}
</style>
