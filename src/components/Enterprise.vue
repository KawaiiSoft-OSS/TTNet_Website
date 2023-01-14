<template>
  <v-sheet class="enterprise-box-centet">
    <div class="enterprise-bg"></div>
    <div class="bg-overlay" style="margin: 50px 0;">

      <v-container>
        <v-row dense>

          <v-col cols="12" sm="12">
            <v-card class="mx-auto enterprise-title" color="#00000000" dark elevation="0">
              <h1> {{ title }} </h1>
              <p> {{ subTitle }} </p>
            </v-card>
          </v-col>

          <v-col cols="6" md="3" v-for="(enterprise, i) in enterprises" :key="i" :value="enterprise" class="enterprise-card">
            <v-hover v-slot="{ hover }">
              <v-card width="250" height="250" elevation="5">

                <v-img class="white--text align-end" height="250" :src="enterprise.image" lazy-src="https://pic.majokeiko.com/lazyload.png">
                  <v-card-title class="enterprise-card-title" v-text="enterprise.title"></v-card-title>
                  <v-expand-transition origin="center center">
                    <div v-if="hover" class="d-flex transition-fast-in-fast-out enterprise-card-transition">
                      {{ enterprise.text }}
                    </div>
                  </v-expand-transition>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>

        </v-row>
      </v-container>
    </div>
  </v-sheet>
</template>

<script>
export default {
  data: () => (
    {
      title: "为用户提供稳定高速的国际互联接入",
      subTitle: "TTNet Cloud 布局全球多个地理区域，拥有多种应用场景，提供高速稳定的全球云联接网络、贴近客户的本地化服务",
      enterprises: [
        {
          title: "个人用户",
          text: "全球网络接入，支持各种设备终端，随心所欲地访问网络世界",
          image: "/images/imagesource03.jpeg"
        },
        {
          title: "企业应用",
          text: "提供企业国际互联解决方案，实现企业高品质国际网络连接",
          image: "/images/imagesource02.jpg"
        },
        {
          title: "音视频工作者",
          text: "自由地享受创作，随时获取海量互联网资源，失去一个咕咕咕的理由（"
          ,
          image: "/images/imagesource04.png"
        },
        {
          title: "Coder",
          text: "更高效直接的学习过程，轻松访问 GitHub，帮助各位开发者提供更好的开发环境，远离垃圾桶(CSDN)",
          image: "/images/imagesource01.jpeg"
        }
      ]
    }),
};
</script>

<style lang="less" scoped>
.enterprise-box-centet {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.enterprise-card {
  display: flex;
  justify-content: center;
  align-items: center;
}

.enterprise-title {
  justify-content: center;
  align-items: center;

  h1 {
    text-align: center;
    font-size: 36px;
    text-shadow: rgba(80, 80, 80, 0.5) 0.1em 0.1em 0.3em;
    font-weight: bold;
  }

  p {
    padding-top: 10px;
    text-align: center;
    font-size: 16px;
    text-shadow: rgba(80, 80, 80, 0.8) 0.1em 0.1em 0.3em;
    font-weight: bold;
    padding-bottom: 20px;
  }
}

.font-strengthen {
  text-shadow: rgba(116, 116, 116, 0.5) 0.1em 0.1em 0.3em;
}

.font-blod {
  font-weight: 700;
}

.enterprise-bg {
  background: #FCE4EC;
  background-image: url(../assets/images/city.jpeg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.enterprise-card-transition {
  align-items: center;
  // justify-content: center;
  padding: 0 26px;
  bottom: 0;
  background: #0000003a;
  position: absolute;
  height: 100%;
  width: 100%;
  font-size: 14px;
  text-shadow: rgb(116, 116, 116) 0.1em 0.1em 0.3em;
  font-weight: 700;
  backdrop-filter: blur(10px);
  backdrop-webkit-filter: blur(10px);
  backdrop-moz-filter: blur(10px);
  backdrop-ms-filter: blur(10px);
}

.enterprise-card-title {
  font-size: 18px;
  font-weight: 900;
  text-shadow: rgb(116, 116, 116) 0 0 0.1em;
  padding: 26px;
}

.font-strengthen {
  text-shadow: rgb(116, 116, 116) 0.1em 0.1em 0.3em;
}

.font-blod {
  font-weight: 700;
}
</style>
