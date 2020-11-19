<template>
  <section class="section" id="navigation-landing">
    <div class="py-5 secondary">
      <div class="container justify-content-center align-items-center">
        <div class="row">
          <div class="col  m-4 pt-5 square text-center">
            <h2 class="download-text">Are you recruiting</h2>
            <div class="col">
               <img class="download"  src="/img/new.png" alt="logo">
            </div>
            <a class="btn mx-auto play btn-lg mt-3" href="/">Post a job</a>
            <div>

            </div>
          </div>
          <div class="col  m-4 pt-5 square text-center">
          <img class="ima"  src="/img/new.png" alt="logo">
            <h2 class="win-text">Are you a Talent?</h2>
            <a class="btn mx-auto play btn-lg mt-3" href="/">Find jobs</a>
          </div>
        </div>
      </div>
    </div> 
  </section>
</template>
<script>

export default {
}
</script>
<style scoped>
#navigation-landing .square {
  height: 300px;
  width: 300px;
  background-color: #fff;
  border-radius: 15px;
  border: 0px solid;
}

.ima{
  width: 30%;
}


.download {
  width: 200px;
  margin-top: 10px;
  height: 100px
}
#navigation-landing .download-text {
  font-weight: bold;
  padding-left: 30px;
  padding-top: 40px;
  color: #666666;
}
#navigation-landing .win-text {
  font-weight: bolder;
  padding-top: 10px;
  color: #666666;
}
#navigation-landing .play { 
  background-color: #AA3939; 
  color:#fff;
  padding:.5rem 2rem;
} 
#navigation-landing .secondary {
  background: #F4F4F4;
}
</style>
