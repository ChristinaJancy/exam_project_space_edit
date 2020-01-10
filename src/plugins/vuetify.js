import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import VueMouseParallax from 'vue-mouse-parallax';
import VueParticles from 'vue-particles';


Vue.use(Vuetify, VueMouseParallax);

export default new Vuetify({
    icons: {
        iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
      },
});

Vue.use(VueParticles);

