<template>
  <v-app>
    <v-overlay :value="overlay">
      <div class="loading">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
        <p>loading...</p>
      </div>
    </v-overlay>
    <v-dialog v-model="dialog" width="500" class="font-strengthen rounded-fix25" style="backdrop-filter: blur(5px);">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2 font-blod">
          {{ noticesTitle }}
        </v-card-title>

        <v-card-text style="padding-top: 20px" class="font-blod">
          <p v-for="(notice, i) in notices" :key="i">
            {{ notice }}
          </p>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" class="font-blod" text href="https://www.moyucloud.com/">前往摸鱼云</v-btn>
          <v-btn color="primary" class="font-blod" text @click="dialog = false">
            了解/Got it
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- <Snow /> -->
    <Navbar />
    <Tophead />
    <Safe />
    <Service />
    <Price />
    <Enterprise />
    <End />
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "../components/Navbar";
import Tophead from "../components/Tophead";
import Safe from "../components/Safe";
import Service from "../components/Service";
import Price from "../components/Price";
import End from "../components/End";
import Enterprise from "../components/Enterprise";
import Footer from "../components/Footer";
import Snow from "../components/Snow";

export default {
  name: "Home",

  components: {
    Navbar,
    Tophead,
    Service,
    Safe,
    Price,
    End,
    Enterprise,
    Footer,
    Snow,
  },

  data: () => ({
    overlay: true,
    imgUrl: "https://pic.majokeiko.com", dialog: true,
    noticesTitle: "注意/Notice ⚠️",
    notices: [
      "TTNet Cloud 因为受政策影响等不可抗拒原因于 2022年5月22日 被暂停运营，相关工作已经交接给摸鱼云。感谢你一路上对我们的支持。我们有缘再见。",
      "后续的工作请以官方 Telegram 频道/群组通知为准。 https://t.me/TTNetChannel/11",
      "TTNet Cloud 官网于 2023年1月14日 开源，您可能会遇到相似的网站，这是正常的。"
    ],
  }),

  beforeCreate() {
    this.overlay = true;
  },

  mounted() {
    let bgImg = new Image();
    bgImg.src = this.imgUrl;
    bgImg.onload = () => {
      this.overlay = false;
    };
  },
};
</script>