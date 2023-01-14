<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style lang="less">
// html {
//   overflow-y: hidden !important;
// }

.bg {
  background: #fce4ec;
  background-image: url(http://pic.majokeiko.com);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  height: 100%;
  width: 100%;
  display: block;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
}

.bg::after {
  content: "";
  display: block;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  // backdrop-filter: blur(10px);
  // -webkit-backdrop-filter: blur(10px);
}

@keyframes bgAnime {
  0%,
  100% {
    background-size: 0vmax 0vmax;
  }
  50% {
    background-size: 130vmax 130vmax;
  }
}

.grey-bg {
  background: #f0b2d41c;
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bg-overlay {
  background: #fce4ec21;
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  backdrop-webkit-filter: blur(5px);
  backdrop-moz-filter: blur(5px);
  backdrop-ms-filter: blur(5px);
}

.font-strengthen {
  text-shadow: rgba(116, 116, 116, 0.5) 0.1em 0.1em 0.3em;
}

.font-blod {
  font-weight: 700;
}

.main-box-centet {
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 600px) {
  .mobile-hidden {
    display: none !important;
  }
}

@media (max-width: 960px) {
  .pad-hidden {
    display: none !important;
  }
}

@media (min-width: 959px) {
  .desktop-hidden {
    display: none !important;
  }
}

.rounded-fix25 {
  border-radius: 25px !important;
}

.img-anime {
  animation: 4s movement infinite;
}

.img-anime::after {
  content: "";
  display: block;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  // backdrop-filter: blur(10px);
  // -webkit-backdrop-filter: blur(10px);
}

@keyframes movement {
  0%,
  100% {
    transform: translateY(-20px);
  }
  50% {
    transform: translateY(0px);
  }
}
</style>
