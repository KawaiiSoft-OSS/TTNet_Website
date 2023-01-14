<template>
  <v-sheet class="service-box-centet">
    <div class="service-bg"></div>
    <div class="bg-overlay">
      <v-container>
        <v-row>
          <v-col cols="12" sm="12">
            <v-card class="mx-auto service-title" color="#00000000" dark elevation="0">
              <h1>{{ title }}</h1>
              <p>{{ subTitle }}</p>
            </v-card>
          </v-col>

          <v-col cols="12" sm="4" v-for="(introduce, i) in introduces" :key="i" :value="introduce">
            <v-card outline class="mx-auto" color="#00000000" dark elevation="0">
              <v-list-item three-line>
                <v-icon left color="#ffffff93" size="80" class="font-strengthen">{{ introduce.icon }}</v-icon>
                <v-list-item-content>
                  <v-card-title class="mb-1 subtitle">
                    {{ introduce.title }}
                  </v-card-title>
                  <v-card-subtitle class="subtext">
                    {{ introduce.text }}
                  </v-card-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    title: "超强技术实力与基础设施",
    subTitle:
      "成熟的智能接入点分配技术根据您的本地运营商与地理位置来智能分配接入点，无需专业知识或繁琐操作即可获得最佳性能。",
    introduces: [
      {
        title: "专线传输",
        text: "运营商直签专线，全球跨区域低延迟大带宽数据传输。",
        icon: "mdi-server-network",
      },
      {
        title: "BGP互联互通",
        text: "与数家运营商、内容提供商、互联网交换中心直接互联。",
        icon: "mdi-server-network",
      },
      {
        title: "稳定可靠的骨干网络",
        text: "全冗余设计，让您面对复杂多变的网络环境安枕无忧。",
        icon: "mdi-server-network",
      },
    ],
  }),
};
</script>

<style lang="less" scoped>
.service-box-centet {
  // height: 80vh;
  // border: 50px 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bg-overlay {
  padding: 50px 0;
}

.service-title {
  justify-content: center;
  align-items: center;
  padding: 0 0 50px 0;

  h1 {
    text-align: center;
    font-size: 36px;
    text-shadow: #cacaca93 0 0 0.2em;
    font-weight: bold;
  }

  p {
    text-align: center;
    font-size: 16px;
    text-shadow: #cacaca93 0 0 0.2em;
    font-weight: bold;
  }
}

.hover {
  transition: all 0.5s;
}

.hover:hover {
  transform: translateY(-5px);
}

.font-strengthen {
  text-shadow: #cacaca93 0 0 0.2em;
}

.font-blod {
  font-weight: 700;
}

.btn-box-fix {
  padding-left: 16px;
  padding-bottom: 18px;
}

.service-bg {
  background-image: url("../assets/images/elaina03.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgb(60, 157, 248);
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.subtitle {
  font-weight: 700;
  text-shadow: #cacaca93 0 0 0.2em;
  color: #ffffff;
}

.subtext {
  font-weight: 500;
  text-shadow: #cacaca93 0 0 0.2em;
  color: #ffffff;
}
</style>
