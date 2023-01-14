<template>
  <v-sheet class="overflow-y-auto main-box-centet" dark>
    <div class="bg"></div>
    <div class="bg-overlay">
      <v-container>
        <v-row dense align="center">
          <v-col cols="12" sm="5">
            <div class="top-left">
              <h1 class="font-blod">{{ mainTitle }}</h1>
              <p>{{ fristSubTitle }}</p>
              <p>{{ secondSubTitle }}</p>
              <div class="tips-box">
                <p v-for="(tip, i) in tips" :key="i" :value="tip">
                  <v-icon left>mdi-checkbox-marked-circle</v-icon>
                  {{ tip }}
                </p>
              </div>
              <v-row align="center" justify="start">
                <v-btn dark large rounded color="primary" class="hover" href="/index.php/#/register" elevation="1">立即注册
                  <v-icon right>mdi-arrow-right</v-icon>
                </v-btn>
                <v-btn dark large rounded class="hover" href="/index.php/#/login" elevation="1">我要登陆<v-icon right>
                    mdi-arrow-right</v-icon>
                </v-btn>
              </v-row>
            </div>
          </v-col>

          <v-spacer></v-spacer>

          <v-col cols="12" sm="4">
            <div class="top-right mobile-hidden">
              <v-img src="../assets/images/elaina01.png" class="img img-anime" max-height="400" />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    mainTitle: "可爱的网络加速",
    fristSubTitle: "在米那桑们的帮助下，一步一步成长至今～",
    secondSubTitle:
      "咱拥有全球多地的网络解決方案，标配各地内网传输、加密信道处理，多网络供应商、优化路由、多级冗余, 确保服务的可靠性。",
    tips: [
      "服务可用性 99.0%",
      "网络可用性 99.0%",
      "节点可用性 99.0%"
    ]
  }),
};
</script>

<style lang="less" scoped>
.top-left {
  margin-top: 50px;
  position: relative;
  align-items: center;
}

.top-left h1 {
  font-size: 48px;
  text-shadow: rgba(80, 80, 80, 0.5) 0.1em 0.1em 0.3em;
}

.top-left p {
  font-size: 16px;
  margin-bottom: 8px;
  text-shadow: rgba(80, 80, 80, 0.5) 0.1em 0.1em 0.3em;
}

.tips-box {
  margin-top: 20px;
  margin-bottom: 30px;
}

.tips-box p {
  font-size: 16px;
  font-weight: bold;
}

.top-right .img {
  // width: 300px;
  margin-left: 0 0;
  // border-radius: 25px !important;
  // box-shadow: rgb(185, 185, 185) 0.1em 0.1em 1em;
}

@media (max-width: 959px) {
  .top-left {
    margin-top: 10vh;
  }

  .top-right .img {
    width: 200px;
    margin-top: 10vh;
  }
}

.hover {
  transition: all 0.3s;
}

.hover:hover {
  font-weight: 900;
  font-size: 16px;
  background-color: #fffff00;
}
</style>
