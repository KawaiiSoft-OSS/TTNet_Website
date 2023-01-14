<template>
  <v-sheet class="overflow-y-auto price-box-centet" id="scrolling-navbar">
    <div class="price-bg"></div>
    <v-container>
      <v-row dense>
        <v-col cols="12" sm="12">
          <v-card class="mx-auto price-title" color="#00000000" light elevation="0">
            <h1>{{ title }}</h1>
            <p>{{ subTitle }}</p>
          </v-card>
        </v-col>

        <v-col cols="12" sm="4" v-for="(price, i) in prices" :key="i" :value="price">
          <v-card class="mx-auto hover price rounded-fix25" max-width="300">
            <v-img class="white--text align-end card-img" height="160px" :src="price.picUrl" lazy-src="https://pic.majokeiko.com/lazyload.png">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
              </template>
              <v-card-title class="font-strengthen">{{ price.name }}</v-card-title>
              <v-card-subtitle class="font-strengthen sub-title">¥ {{ price.value }}/每月</v-card-subtitle>
            </v-img>
            <v-divider></v-divider>
            <v-card-text class="tips-box">
              <div>
                <p>
                  <v-icon left color="green">mdi-checkbox-marked-circle</v-icon>
                  每月可用流量: <bolck>{{ price.traffic }}</bolck>
                </p>
                <p>
                  <v-icon left color="green">mdi-checkbox-marked-circle</v-icon>
                  可享受的速率: <bolck>{{ price.rate }}</bolck>
                </p>
                <p>
                  <v-icon left color="green">mdi-checkbox-marked-circle</v-icon>
                  限制设备数量: <bolck>{{ price.deviceLimit }}</bolck>
                </p>
                <p>
                  <v-icon left color="green">mdi-checkbox-marked-circle</v-icon>
                  全球流媒体解锁: <bolck>{{ price.streamingUnlock }}</bolck>
                </p>
                <p>
                  <v-icon left color="green">mdi-checkbox-marked-circle</v-icon>
                  全线IEPL/IPLC接入: <bolck>{{ price.dedicatedline }}</bolck>
                </p>
              </div>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions class="btn-box-fix">
              <v-btn text rounded elevation="0" right :href="price.buyUrl"><v-icon left>mdi-thumb-up</v-icon>
                <black> 立即订阅 </black>
              </v-btn>
              <v-spacer></v-spacer>
              <v-card-subtitle class="bottom-title">每月仅需 {{ price.value }} ¥</v-card-subtitle>
            </v-card-actions>
          </v-card>
        </v-col>

      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    title: "可选择的客制化套餐",
    subTitle: "优质的 TTNet Cloud 提供了不同套餐的选择，让大家都可以精确地找到满足需求的套餐，精准定位。",
    prices: [
      {
        name: "TTNet Premium 中杯",
        value: "20.99",
        traffic: "199GB",
        rate: "1Gbps",
        deviceLimit: "不限制",
        streamingUnlock: "Yes",
        dedicatedline: "Yes",
        picUrl: "https://pic.majokeiko.com/random01",
        buyUrl: "/index.php/#/plan/29"
      },
      {
        name: "TTNet Premium 大杯",
        value: "29.99",
        traffic: "399GB",
        rate: "1Gbps",
        deviceLimit: "不限制",
        streamingUnlock: "Yes",
        dedicatedline: "Yes",
        picUrl: "https://pic.majokeiko.com/random02",
        buyUrl: "/index.php/#/plan/30"
      },
      {
        name: "TTNet Premium 超大杯",
        value: "72.99",
        traffic: "779GB",
        rate: "1Gbps",
        deviceLimit: "不限制",
        streamingUnlock: "Yes",
        dedicatedline: "Yes",
        picUrl: "https://pic.majokeiko.com/random03",
        buyUrl: "/index.php/#/plan/31"
      }
    ]
  }),
};
</script>

<style lang="less" scoped>
.price-bg {
  background: linear-gradient(#fff3f3, #fff5f8);
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.price-box-centet {
  padding: 60px 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.price-title {
  justify-content: center;
  align-items: center;
  padding: 0 0 30px 0;

  h1 {
    text-align: center;
    font-size: 36px;
    text-shadow: #cacaca93 0 0 0.2em;
    font-weight: bold;
    padding-bottom: 10px;
  }

  p {
    text-align: center;
    font-size: 16px;
    text-shadow: #cacaca93 0 0 0.2em;
    font-weight: bold;
  }
}

.price {
  .tips-box {
    padding-top: 30px;
    padding-bottom: 16px;
    padding-left: 20px;
  }

  .sub-title {
    font-size: 16px;
    font-weight: bold;
    text-shadow: #33333393 0 0 0.2em;
  }

  .bottom-title {
    color: #2b2b2b;
    font-size: 15px;
    font-weight: bold;
    text-shadow: #7070706e 0 0 0.2em;
  }

  p {
    font-size: 15px;
    color: #0f0f0f;
    text-shadow: #33333393 0 0 0.1em;
    font-weight: 500;
    margin-bottom: 10px;
  }

  bolck {
    color: #ff0a58d3;
    text-shadow: #ff6c9dc0 0 0 0.1em;
  }

  black {
    font-weight: bold;
    color: #0f0f0f;
    text-shadow: #33333393 0 0 0.1em;
  }
}

.btn-box-fix {
  padding: 8px 8px 8px 14px;

  .btn-large {
    margin: 10px;
  }
}

.btn-center-fix {
  justify-content: center;
  align-items: center;
  padding-top: 45px;
  padding-bottom: 50px;
}

.hover {
  transition: all 0.3s;
}

.hover:hover {
  transform: translateY(-5px);
}

.font-strengthen {
  text-shadow: rgba(41, 41, 41, 0.8)0 0 0.2em;
  font-size: bold;
}
</style>
