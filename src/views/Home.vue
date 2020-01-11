<template>
  <v-content id="home">
     <vue-particles
        class="particle"
        color="#ffffff"
        :particleOpacity="0.9"
        linesColor="#ffffff"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="1"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="50"
        :moveSpeed="3"
        :hoverEffect="false"
        hoverMode="grab"
        :clickEffect="false"
        clickMode="push"
      ></vue-particles>

    <!-- Parallax begins (no framework) -->


  <v-row justify="center">
    <v-col cols="12">
        <div class="main-title">
          <h1 absolute>Safe Space</h1>
        </div>
    </v-col>
  </v-row>
  <v-row class="mx-auto my-auto" justify="space-around">
 <v-col 
 style="margin-top:300px;"
  cols="12"
  
  >
          <v-img
          id="mascottext"
          contain
          max-height="800"
          max-width="1300"
           src="../assets/mascot/mascot_text_svg.svg"
          ></v-img>
         
          <!-- <div style="background-color:#00000070;">
          <h2 tag="h2" class="white--text text-md-center text-sm-center ">Hello, I am Ceres!</h2>
          <p tag="p" class="white--text text-md-center text-sm-center ">and welcome to Safe Space</p>
          <p tag="p" class="white--text text-md-center text-sm-center">-a place to have fun while learning!</p>
     </div> -->
  </v-col>

  <v-col
 style="margin-top:-400px;"
  cols="4"
  >
          <v-img
          id="mascot"
          max-height="450"
          max-width="450"
          contain
           src="../assets/mascot/spaceman mascot.png"
          ></v-img>
  </v-col>
   </v-row>


  </v-content>
</template>

<!-- import AnimatedRocket from "../components/AnimatedRocket"; -->
<script scoped>
export default {
  name: "App",
  components: {
  },
  props: {
    source: String
  }
};
</script>



<!-- AMP framweork style -->

<style amp custom>
</style>

<!-- SCSS style rocket and parallax 
<style lang="scss">
.fixed-parallax {
  .image {
    // basic parallax class
    position: relative;
    height: 100vh;
    background-attachment: fixed; // key
    background-position: center top;
    background-size: cover;

    // individual parallax images
    &.one {
      background-image: url("https://raw.githubusercontent.com/chrispxpx/codepen-poc-images/master/pxpx-rocket-black.png");
    }
    &.two {
      background-image: url("https://raw.githubusercontent.com/chrispxpx/codepen-poc-images/master/pxpx-rocket-black-invert.png");
    }
    &.three {
      background-image: url("https://raw.githubusercontent.com/chrispxpx/codepen-poc-images/master/pxpx-rocket-orange.png");
    }
    &.four {
      background-image: url("https://raw.githubusercontent.com/chrispxpx/codepen-poc-images/master/pxpx-rocket-orange-invert.png");
    }
  }
}
</style>
-->



<style lang="scss" scoped>


.main-title {
  color: #ffcd2b;
  z-index: 1;
  position: absolute;
  text-align: center;
  width: 100%;
  h1 {
    font-size: 4rem;
    font-family: "Press Start 2P", cursive;
    text-shadow: 4px 8px #000000;
    text-transform: uppercase;
    margin-top: 150px;
  }
}

#home{
  position: relative;
}

.particle {
  height: 100%;
  width: 100%;
  position: absolute;
  margin-top:-20px;
}

p{
  font-size: 20px;
}

h2{
  font-size: 50px;
}


/*Media scaling changes*/


@media (max-width: 1250px){
  p{
  font-size: 16px;
}
h2{
  font-size: 35px;
}

}



@media (max-width: 850px) {
  .main-title h1 {
    font-size: 3rem;
  }
  p{
  font-size: 14px;
}
h2{
  font-size: 30px;
}
#mascottext{
  margin-top:-50px;
}

#mascot{
 margin-top:100px;
}
}

@media (max-width: 600px) {
  .main-title h1 {
    font-size: 2rem;
    margin-top:50px;
  }
  #mascottext{
  margin-top:-190px;
}

#mascot{
 margin-top:240px;
}
   
}
@media (max-width: 300px) {
  .main-title h1 {
    margin-top:20px;
  }
  h2{
  font-size: 20px;
}
}
@media (max-width: 200px) {
  .main-title h1 {
    font-size: 1rem;
  }
}
/*..*/

</style>