<template>
    <BACKCANVAS></BACKCANVAS>
    <HEADER></HEADER>
    <router-view v-slot="{ Component }" class="wrap">
        <transition :name="trans">
            <component :is="Component"></component>
        </transition>
    </router-view>
</template>

<script>
import BACKCANVAS from './layouts/BackCanvs.vue';
import HEADER from './layouts/Header.vue';

export default {
  name: 'App',
  data() {
    return {
      trans: 'slide-dn',
      scrollDir: 'dn',
    };
  },
  components: {
    BACKCANVAS, // 백그라운드 캔버스
    HEADER, // 헤더
  },
  computed: {
    getAllRoutes() {
      return this.$router.options.routes;
    },
  },
  mounted() {
    // const = _this = this;
  },
  watch: {
    $route($to, $from) {
      if (this.getRouteIdx($to) < this.getRouteIdx($from)) this.trans = 'slide-up';
      else this.trans = 'slide-dn';
    },
  },
  methods: {
    getRouteIdx($route) {
      return this.getAllRoutes.findIndex(($item) => $item.path === $route.path);
    },
  },
};
</script>

<style style="lang" scope>
@import '@/assets/scss/design.scss';

.wrap {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100%;
    height: 100%;
}
</style>
