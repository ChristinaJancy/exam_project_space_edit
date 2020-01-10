<template>
  <v-app id="app">
    
      <!-- Navigation -->
      <Navigation></Navigation>
      <br>
      <router-view />

      <Footer></Footer>
    
  </v-app>
</template>

<script>
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default {
  name: "App",
  components: {
    Navigation,
    Footer
  },
  props: {
    source: String
  }
};

</script>


<style>
#app {
  margin: 0;
  background-image:linear-gradient(#1b0010, #060016, #000000);  
  background-size: cover;

}
p{
font-family: 'Lato', sans-serif;
}

h1{
  font-family: "Press Start 2P", cursive;
}

h2{
font-family: 'Audiowide', cursive;
}

</style>