<template>
  <v-sheet class="footer-box-centet">
    <div class="footer-bg"></div>

    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-card class="mx-auto footer-title" color="#00000000" dark elevation="0">
            <h1>合作伙伴</h1>
            <v-chip link outlined href="https://kawaiisoft.net" class="mr-2">
              <v-icon left>mdi-label</v-icon>KawaiiSoft Ltd.
            </v-chip>
            <div style="padding-top: 20px">
              <a href="https://icp.gov.moe/?keyword=20216502">萌ICP备20216502号.</a>
              <!-- 使用代码不得去掉以下内容 Start -->
              <a href="https://github.com/KawaiiSoft-net/TTNet_Website" style="padding-left: 10px;">本网站使用开源代码</a>
              <p>Copyright 2020 ~ {{ new Date().getFullYear() }} © <strong>KawaiiSoft</strong> All rights reserved.</p>
              <!-- 使用代码不得去掉以下内容 End -->
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  mounted() {
    window.console.log("Website designed by keiko233");
    window.console.log("https://majokeiko.com");
  },
};
</script>

<style lang="less" scoped>
.footer-box-centet {
  padding: 50px 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}



.footer-title {
  padding: 0;
  color: #bdbdbd;

  h1 {
    font-size: 20px;
    text-shadow: rgba(80, 80, 80, 0.5) 0.1em 0.1em 0.3em;
    font-weight: bold;
    padding-bottom: 10px;
  }

  p {
    padding: 20px 0 0 0;
    font-size: 16px;
    text-shadow: rgba(80, 80, 80, 0.8) 0.1em 0.1em 0.3em;
  }

  a {
    text-decoration: none;
    font-weight: 700;
    color: #f85f89;
    transition: all 0.5s;
    font-size: 16px;
    text-shadow: rgba(80, 80, 80, 0.8) 0.1em 0.1em 0.3em;
  }

  a:hover {
    color: #ffffff;
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

.font-strengthen {
  text-shadow: rgba(116, 116, 116, 0.5) 0.1em 0.1em 0.3em;
}

.font-blod {
  font-weight: 700;
}

.footer-bg {
  background-color: #263238;
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
