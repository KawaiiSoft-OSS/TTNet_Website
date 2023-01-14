<template>
  <v-sheet class="safe-box-centet" id="safe">
    <div class="grey-bg"></div>

    <v-container>

      <v-row align="center">
        <v-col cols="12" sm="4">
          <div class="top-right">
            <v-img src="../assets/images/elaina02.png" class="img img-anime" />
          </div>
        </v-col>

        <v-spacer></v-spacer>

        <v-col cols="12" sm="6">
          <div class="top-left">
            <h1 class="font-blod">{{ title }}</h1>
            <h2>{{ subTitle }}</h2>
            <p v-for="(introduce, i) in introduces" :key="i" :value="introduce">
              <v-icon left color="green">mdi-checkbox-marked-circle</v-icon>
              {{ introduce }}
            </p>
            <div class="top-btn">
              <v-btn dark large rounded color="primary" class="hover" href="/index.php/#/register">立即注册<v-icon right>mdi-arrow-right</v-icon></v-btn>
            </div>
          </div>
        </v-col>

      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  data: () => (
    {
      title: "为什么选择 TTNet Cloud",
      subtitle: "TTNet Cloud 与多家运营商合作，致力于为各位提供优质的网络代理服务，配合上累积经验与创新架构，为各位提供完美高速体验。",
      introduces: [
        "全线采用IEPL传输，更能保证数据安全快速",
        "全球内网接入，坚固稳定与速度",
        "以优质资源与冗余备份确保其畅通可靠，提供快速稳定的国际网络接入",
        "多技术及自身骨干网资源保障数据传输，保障稳定、安全、速度",
        "支持所有主流设备，包括路由器、手机、平板、Windows、Mac个人电脑"
      ]
    }),
};
</script>

<style lang="less" scoped>
.safe-box-centet {
  padding: 50px 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hover {
  transition: all 0.3s;
}

.hover:hover {
  font-weight: 900;
  font-size: 16px;
  background-color: #fffff00;
}

.font-strengthen {
  text-shadow: rgba(116, 116, 116, 0.5) 0.1em 0.1em 0.3em;
}

.font-blod {
  font-weight: 700;
}

.top-left {
  position: relative;
  align-items: center;
}

.top-left h1 {
  font-size: 36px;
  padding-bottom: 20px;
  color: #D81B60;
  text-shadow: #D81B6093 0 0 0.1em;
}

.top-left h2 {
  font-size: 16px;
  padding-bottom: 20px;
  color: #ff669e;
  text-shadow: #ff669e93 0 0 0.2em;
}

.top-left p {
  font-size: 16px;
  text-shadow: #38383893 0 0 0.2em;
  margin: 10px 0;
  color: #383838;
  font-weight: 400;
}

.top-left p .v-icon {
  text-shadow: #4caf4fb9 0 0 0.2em !important;
}

.top-left .top-btn {
  padding-top: 20px;
}

.top-right .img {
  margin-left: 0 0;
  border-radius: 25px !important;
  box-shadow: #38383893 0.1em 0.1em 1em;
}
</style>
