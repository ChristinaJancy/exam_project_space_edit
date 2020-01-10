<template>
  <v-app>

      <vue-particles
        class="particle"
        color="#ffffff"
        :particleOpacity="0.9"
        linesColor="#FFE302"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="1"
        :linesWidth="2"
        :lineLinked="false"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="false"
        hoverMode="grab"
        :clickEffect="false"
        clickMode="push"
      ></vue-particles>
 

      <v-card color="transparent" class="mx-auto" max-width="700" flat>

        
        <v-card-title id="pheader">Our Solar System</v-card-title>
        <v-spacer></v-spacer>

        <v-card-subtitle id="pheader2">-Scroll down to explore v </v-card-subtitle>
      </v-card>

      <!-- All planets begins here-->
      <div class="container">
        
        <v-row justify="center">
          <v-col class="mx-auto py-0">


            <v-row>
               <v-col cols="12" md="4" sm="12" class="mx-auto my-auto">
                   <v-expansion-panels inset popout focusable>
                      <v-expansion-panel>
                        <v-expansion-panel-header class="planetpaneltext">About the Sun</v-expansion-panel-header>
                        <v-expansion-panel-content>The size of the Sun compared to the largest known stars (red giants) is not very big. However, if compared to the most common type of star in the universe, the red dwarf, the Sun is quite a bit larger. Thus, the Sun is not the biggest type of star in the universe, but it is definitely larger than most.</v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
             </v-col>
              <v-col cols="auto"  class="mx-auto my-auto">
                <parallax-container
                  class="image-container"
                  :animationDuration="duration"
                  :easing="easing"
                >
                  <img :src="image1" style="opacity:0;" class="image" alt />
                  <parallax-element :type="rotation" :parallaxStrength="20" tag="img" id="sun" :src="image14"></parallax-element>
                  <parallax-element tag="h1" :type="rotation" :parallaxStrength="-20">The Sun</parallax-element>
                  
                 
                </parallax-container>
                
              </v-col>
           
            </v-row>

            <!--planet Mercury-->
            <v-row>
               <v-col cols="12" md="4" sm="12" class="mx-auto my-auto">
                   <v-expansion-panels inset popout focusable>
                      <v-expansion-panel>
                        <v-expansion-panel-header class="planetpaneltext">About Mercury</v-expansion-panel-header>
                        <v-expansion-panel-content>“The closest planet to the sun that orbits the sun within only 87.9 earth days, should be the hottest planet in the whole solar system”, one would think. Even though this is not entirely true, one would not be mistaken for thinking that way. Mercury has the most ironic temperature rage in the whole solar system. Since the planet virtually has no atmosphere, it makes it difficult for the sun to travel from the daylight side to the night side. This means that one half of the planet is always extremely hot at +430 degree C, while the other is so cold at -180 degree C. So to live on this planet, you would either burn or freeze to death instantly. </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
             </v-col>
              <v-col cols="auto" class="mx-auto">
                <parallax-container
                  class="image-container"
                  :animationDuration="duration"
                  :easing="easing"
                >
                  <img :src="image1" style="opacity:0;" class="image" alt />

                  <parallax-element :type="rotation" :parallaxStrength="20" tag="img" :src="image3"></parallax-element>
                  <parallax-element tag="h1" :type="rotation" :parallaxStrength="-20">Mercury</parallax-element>
                  <parallax-element :type="rotation" :parallaxStrength="30" tag="img" :src="image4"></parallax-element>
                  
                </parallax-container>
              </v-col>
           
            </v-row>

            <!-- Planet Venus-->
            <v-row>
            <v-col cols="12" md="4" sm="12" class="mx-auto my-auto">
                   <v-expansion-panels inset popout focusable>
                      <v-expansion-panel>
                        <v-expansion-panel-header class="planetpaneltext">About Venus</v-expansion-panel-header>
                        <v-expansion-panel-content>You’re still wondering what's the hottest planet in the whole solar system if its not mercury (the closest planet to the sun). You guessed right, Venus. Venus is the second closest planet to the sun, and the only planet that comes closer to earth more than any other planets. What's interesting about venus is that, it's the hottest planet in the whole solar system, and orbits in a whole different direction, compared to all the other planets excluding uranus. Venus and Uranus are the only two planets that orbits the sun in a clockwise direction. Venus has a very non compromising temperature, and its dense atmosphere pressure is 90 times in comparison to earth’s. It has the temperature of a +460 degree C, which is being being contained inside with a thick cloud of carbon dioxide. This is still hotter than if you slept in a hot sauna wearing 10 different types of skiboard suits. 
</v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
             </v-col>
              <v-col cols="auto" class="mx-auto">
                <parallax-container
                  class="image-container"
                  :animationDuration="duration"
                  :easing="easing"
                >
                  <img :src="image1" style="opacity:0;" class="image" alt />

          
                  <parallax-element :type="rotation" :parallaxStrength="20" tag="img" :src="image7"></parallax-element>
                  <parallax-element tag="h1" :type="rotation" :parallaxStrength="-20">Venus</parallax-element>
                  <parallax-element :type="rotation" :parallaxStrength="30" tag="img" :src="image4"></parallax-element>
                  
                </parallax-container>
              </v-col>
            </v-row>

            <!-- Planet Earth-->
            <v-row>
              <v-col cols="12" md="4" sm="12" class="mx-auto my-auto">
                   <v-expansion-panels inset popout focusable>
                      <v-expansion-panel>
                        <v-expansion-panel-header class="planetpaneltext">About The Earth</v-expansion-panel-header>
                        <v-expansion-panel-content>Space contains of many things including the solar system in which our very planet Earth finds its existence. In our solar system as you very well know contains of 9 planets, various moons and one huge star, that all the planets rotate around. Of Course rumour has it, that there's more than just 9 planets, in fact way more than we already know. At its 3rd place stands earth as the only planet with a life giving possibility, where air and water is available and the soil is healthy and fertilizing. All planets rotate around the sun, and which as you have guessed is the largest star in the whole Solar System. The distance position from the sun to our earth, makes it all possible for the planet to create life.</v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
             </v-col>
              <v-col cols="auto" class="mx-auto">
                <parallax-container
                  class="image-container"
                  :animationDuration="duration"
                  :easing="easing"
                >
                  <img :src="image1" style="opacity:0;" class="image" alt />

                  
                  <parallax-element :type="rotation" :parallaxStrength="20" tag="img" :src="image11"></parallax-element>
                  <parallax-element tag="h1" :type="rotation" :parallaxStrength="-20">Earth</parallax-element>
                 
                  
                </parallax-container>
              </v-col>
            
            </v-row>

            <!-- Planet Mars-->

            <v-row>
           <v-col cols="12" md="4" sm="12" class="mx-auto my-auto">
                   <v-expansion-panels inset popout focusable>
                      <v-expansion-panel>
                        <v-expansion-panel-header class="planetpaneltext">About Mars</v-expansion-panel-header>
                        <v-expansion-panel-content>I'm sure you have heard about mars. Rumours has it, that apart from earth, mars is the other only planet, that might have life, all though this is not fully proved yet. Mars is the 4th planet in the solar system, and it takes almost double as many days for the planet to orbit the sun, in comparison to earth. It takes the earth 364/365 days to orbit the sun, while it takes mars 686 earth days to complete an orbit around the sun. Mars also takes about 24 hours and 37 minutes to make a full rotation, which is surprisingly very similar to earth which takes 24 hours to do a full rotation from sunrise to sunrise. Due to the effects of the solar system interaction with its atmosphere, mars lost its magnetic field that protects its atmosphere. This means that with its thin atmosphere, mars can not store heat for such a long time, which explains its cold temperature in the winter season with a -146 degree C, and a max of +35 degree C on a summer. There has also been detected signs for water in mars, which also means signs for life, but research are still being taken, and missions are being planned to pay the planet a visit in 2020/2021.
</v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
             </v-col>
              <v-col cols="auto" class="mx-auto">
                <parallax-container
                  class="image-container"
                  :animationDuration="duration"
                  :easing="easing"
                >
                  <!--  <parallax-element :type="depth" :parallaxStrength="-20" tag="img" :src="image1" class="pimg1"></parallax-element>-->
                  <img :src="image1" style="opacity:0;" class="image" alt />

                
                  <parallax-element :type="rotation" :parallaxStrength="20" tag="img" :src="image6"></parallax-element>
                  <parallax-element tag="h1" :type="rotation" :parallaxStrength="-20">Mars</parallax-element>
                  <parallax-element :type="rotation" :parallaxStrength="30" tag="img" :src="image4"></parallax-element>
                 
                </parallax-container>
              </v-col>
            </v-row>

            <!-- Planet Jupiter-->
            <v-row>
              <v-col cols="12" md="4" sm="12" class="mx-auto my-auto">
                   <v-expansion-panels inset popout focusable>
                      <v-expansion-panel>
                        <v-expansion-panel-header class="planetpaneltext">About Jupiter</v-expansion-panel-header>
                        <v-expansion-panel-content>Jupiter is the 5th and the largest planet in the solar system almost more than twice the mass as all the other planets put together. This planet is always referred to as the giant planet, due to its amazing size. Jupiter is almost made of gas with almost 75% hydrogen, and 24% helium. Its core is presumed rocky hard, while surrounded by a sea with metallic liquid.   </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
             </v-col>
              <v-col cols="auto" class="mx-auto">
                <parallax-container
                  class="image-container"
                  :animationDuration="duration"
                  :easing="easing"
                >
                  <img :src="image1" style="opacity:0;" class="image" alt />

                  <parallax-element :type="rotation" :parallaxStrength="20" tag="img" :src="image13"></parallax-element>
                  <parallax-element tag="h1" :type="rotation" :parallaxStrength="-20">Jupiter</parallax-element>
                  <parallax-element :type="rotation" :parallaxStrength="30" tag="img" :src="image4"></parallax-element>
                
                </parallax-container>
              </v-col>
          
            </v-row>

            <!-- Planet Saturn-->
            <v-row>
            <v-col cols="12" md="4" sm="12" class="mx-auto my-auto">
                   <v-expansion-panels inset popout focusable>
                      <v-expansion-panel>
                        <v-expansion-panel-header class="planetpaneltext">About Saturn</v-expansion-panel-header>
                        <v-expansion-panel-content>Saturn is the 6 planet placed away from the sun. As you very well know, its the planet with a ring around it, which off the record looks pretty cool. It's also the second largest planet in the solar system from Jupiter. Like Jupiter, the planet is also comprised with gas about 96% hydrogen, and 3% helium, which also makes Saturn's core just as rocky or even rockier than Jupiter's core. Again like jupiter, saturn is also surrounded by a sea with a metallic liquid. Fun info: Saturn generates more heat in itself than it receives from the sun. </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
             </v-col>
              <v-col cols="auto" class="mx-auto">
                <parallax-container
                  class="image-container"
                  :animationDuration="duration"
                  :easing="easing"
                >
                  <img :src="image1" style="opacity:0;" class="image" alt />

                 
                  <parallax-element :type="rotation" :parallaxStrength="25" tag="img" :src="image8"></parallax-element>
                  <parallax-element tag="h1" :type="rotation" :parallaxStrength="-20">Saturn</parallax-element>
                  <parallax-element :type="rotation" :parallaxStrength="30" tag="img" :src="image4"></parallax-element>
                 
                </parallax-container>
              </v-col>
            </v-row>

            <!-- Planet Uranus-->
            <v-row>
              <v-col cols="12" md="4" sm="12" class="mx-auto my-auto">
                   <v-expansion-panels inset popout focusable>
                      <v-expansion-panel>
                        <v-expansion-panel-header class="planetpaneltext">About Uranus</v-expansion-panel-header>
                        <v-expansion-panel-content>If you have to remember anything about Uranus, this is it: Its placed on the 7th place in the solar system and the 3rd largest planet after saturn. Like venus, Uranus rotates in the opposite direction, which makes it one of the few unique planets. Another thing to remember is how uranus is colder than what it was expected. Since Uranus is also one of the giant planets, its expected to be able to generate its own heat due to its rocky core, but it does not. It was measured by experts and uranus temperature is at a -224 degree C. This also makes uranus the coldest planet in the whole solar system. </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
             </v-col>
              <v-col cols="auto" class="mx-auto">
                <parallax-container
                  class="image-container"
                  :animationDuration="duration"
                  :easing="easing"
                >
                  <img :src="image1" style="opacity:0;" class="image" alt />

                  
                  <parallax-element :type="rotation" :parallaxStrength="20" tag="img" :src="image9"></parallax-element>
                  <parallax-element tag="h1" :type="rotation" :parallaxStrength="-20">Uranus</parallax-element>
                  <parallax-element :type="rotation" :parallaxStrength="30" tag="img" :src="image4"></parallax-element>
                 
                </parallax-container>
              </v-col>
                
            </v-row>

            <!-- Planet Neptune-->
           
              <v-card color="transparent" flat class="my-auto">
                <v-row>
                  <v-col cols="12" md="4" sm="12" class="mx-auto my-auto">
                   <v-expansion-panels inset popout focusable>
                      <v-expansion-panel>
                        <v-expansion-panel-header class="planetpaneltext">About Neptune</v-expansion-panel-header>
                        <v-expansion-panel-content>We used to think there were 9 planets, but since pluto got excluded from the list, Neptune closes the list of planets in the solar system. It's the 8th and last planet with the longest distance from the sun compared to all the other planets.This means the planets almost doesn't receive a lot of sunlight which means it's mostly cold. Neptune holds a temperature of -220 degree C, which is almost as cold as Uranus. </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
             </v-col>
                  <v-col cols="auto" class="mx-auto">
                    <parallax-container
                      class="image-container"
                      :animationDuration="duration"
                      :easing="easing"
                    >
                      <img :src="image1" style="opacity:0;" class="image" alt />
                     
                      <parallax-element :type="rotation" :parallaxStrength="20" tag="img" :src="image10"></parallax-element>
                      <parallax-element tag="h1" :type="rotation" :parallaxStrength="-20">Neptune</parallax-element>
                      <parallax-element :type="rotation" :parallaxStrength="30" tag="img" :src="image4"></parallax-element>
                     
                      
                    </parallax-container>
                  </v-col>
                    
                </v-row>
              </v-card>
          

            <!-- Planet Pluto-->
            <v-card color="transparent" flat class="planetcard my-auto">
              <v-row>
                <v-col cols="12" md="4" sm="12" class="mx-auto my-auto">
                   <v-expansion-panels inset popout focusable>
                      <v-expansion-panel>
                        <v-expansion-panel-header class="planetpaneltext">About Pluto</v-expansion-panel-header>
                        <v-expansion-panel-content>Discovered in 1930, Pluto is the second closest dwarf planet to the Sun and was at one point classified as the ninth planet. Pluto is the largest dwarf planet but only the second most massive, with Eris being the most massive. Pluto is 1/3 water - This is in the form of water ice which is more than 3 times as much water as in all the Earth’s oceans, the remaining two thirds are rock. Pluto’s surface is covered with ices, and has several mountain ranges, light and dark regions, and a scattering of craters. Also Fun fact: Pluto sometimes has an atmosphere.
When Pluto elliptical orbit takes it closer to the Sun, its surface ice thaws and forms a thin atmosphere primarily of nitrogen which slowly escapes the planet. It also has a methane haze that overs about 161 kilometres above the surface. The methane is dissociated by sunlight into hydrocarbons that fall to the surface and coat the ice with a dark covering. When Pluto travels away from the Sun the atmosphere then freezes back to its solid state.

</v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
             </v-col>
                <v-col cols="auto" class="mx-auto">
                 
                  <parallax-container
                    class="image-container"
                    :animationDuration="duration"
                    :easing="easing"
                  >
                    <img :src="image1" style="opacity:0;" class="image" alt />

                    
                    <parallax-element :type="rotation" :parallaxStrength="25" tag="img" :src="image12"></parallax-element>
                    <parallax-element tag="h1" :type="rotation" :parallaxStrength="-20">Pluto</parallax-element>
                    <parallax-element :type="rotation" :parallaxStrength="30" tag="img" :src="image4"></parallax-element>
                   
                  </parallax-container>
                </v-col>
             
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <!--random svg test-->
      <!-- <v-img id="layerplanet" src="../assets/planet1.png"></v-img> -->

  </v-app>
</template>

<!-- 
export default {
 
  data: () => ({
  isActive: false,
  show: false,
  show2: false,
  show3: false,
  show4: false,
  show5: false,
  show6: false,
  show7: false,
  show8: false,
  show9: false,
  })
};

-->

<!-- actual image 1-5
import image1 from "@/assets/mouse-parallax/1.8125ea14.png";
import image2 from "@/assets/mouse-parallax/2.2edb70bc.png";
import image3 from "@/assets/mouse-parallax/3.4ee471cf.png";
import image4 from "@/assets/mouse-parallax/4.4c33fe51.png";
import image5 from "@/assets/mouse-parallax/5.19bc2110.png";
-->
<script>
export default {
  data: () => ({
    isActive: true
  })
};
</script>



<script scoped>
import parallaxContainer from "@/components/parallax-container.vue";
import parallaxElement from "@/components/parallax-element.vue";
import image1 from "@/assets/mouse-parallax/1.8125ea14.png";
import image2 from "@/assets/mouse-parallax/2.2edb70bc.png";
import image4 from "@/assets/mouse-parallax/4.4c33fe51.png";
import image5 from "@/assets/mouse-parallax/5.19bc2110.png";

import image3 from "@/assets/solarsystem/mercury.png";
import image6 from "@/assets/solarsystem/mars.png";
import image7 from "@/assets/solarsystem/venus.png";
import image8 from "@/assets/solarsystem/saturn.png";
import image9 from "@/assets/solarsystem/uranus.png";
import image10 from "@/assets/solarsystem/neptune.png";
import image11 from "@/assets/solarsystem/earth2.png";
import image12 from "@/assets/solarsystem/pluto.png";
import image13 from "@/assets/solarsystem/jupiter.png";
import image14 from "@/assets/solarsystem/sun.png";

export default {
  props: {
    type: {
      type: String,
      default: "depth"
    },
    duration: {
      type: Number,
      default: 1000
    },
    easing: {
      type: String,
      default: "cubic-bezier(0.23, 1, 0.32, 1)"
    }
  },
  components: {
    parallaxContainer,
    parallaxElement
  },
  data() {
    return {
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9,
      image10,
      image11,
      image12,
      image13,
      image14
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;

  &.image {
    position: relative;
  }
}


@media only screen and (max-width: 670px) {
  img {
    left: 0;
    right: 0;
    margin: auto;
    height: auto;
    width: 100%;

    &.image {
      position: relative;
    }
  }

}

.image-container {
  position: relative;
  height: 70vh;
}

h1 {
  position: absolute;
  color: #ffcd2b;
  text-shadow: 4px 8px #000000;
  top: 60%;
  font-size: 40px;
  font-weight: 700;
  left: 0;
  right: 0;
  font-family: "Press Start 2P", cursive;
  text-align: center;
  text-transform: uppercase;
}

#pheader,
#pheader2 {
  font-family: 'Audiowide', cursive;
  color: #ffcd2b;
  text-shadow: 4px 4px #000000;
  font-size:40px;
  line-height: 0.9;
}

#app {
  margin-top: -10;
  padding-top:120px;
  position: relative;
 background-image:linear-gradient(#1b0010, #060016, #000000); 
}

.particle {
  height: 100%;
  width: 100%;
  position: absolute;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}

/*@Media scaling*/

@media (max-width: 900px) {
  p {
    font-size: 20px;
    margin-top: -130px;
  }
}

@media (max-width: 850px) {
}

@media (max-width: 400px) {
  p {
    font-size: 15px;
   
  }
}

@media (max-width: 230px) {
  p {
    font-size: 10px;
    margin-top: -230px;
  }
}

</style>
  



