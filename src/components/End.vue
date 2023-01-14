<template>
  <v-sheet class="end-box-centet">
    <div class="end-bg"></div>
    <div class="bg-overlay">
      <v-container>
        <v-row>

          <v-col cols="12" sm="12">
            <v-card class="mx-auto end-title" color="#00000000" dark elevation="0">
              <h1> {{ title }} </h1>
              <p> {{ subTitle }} </p>
              <v-row align="center" justify="center">
                <v-btn dark large rounded color="primary" class="hover" :href="telegram.group.url" elevation="1">
                  {{ telegram.group.name }}
                  <v-icon right>mdi-arrow-right</v-icon></v-btn>
                <v-btn dark large rounded class="hover" :href="telegram.channel.url" elevation="1">
                  {{ telegram.channel.name }}
                  <v-icon right>mdi-arrow-right</v-icon></v-btn>
              </v-row>
            </v-card>
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
      title: "加入我们的 Telegram 频道/群组",
      subTitle: "获取最新通知并与我们取得联系",
      telegram: {
        group: {
          name: "Telegram 群组",
          url: "https://t.me/+uExFwvcQsjU0OWZl"
        },
        channel: {
          name: "Telegram 频道",
          url: "https://t.me/TTNetChannel"
        }
      }
    }),
};
</script>

<style lang="less" scoped>
.end-box-centet {
  height: 50vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.end-title {
  justify-content: center;
  align-items: center;
  padding: 0 0 50px 0;

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

.end-bg {
  background: #FCE4EC;
  background-image: url(http://pic.majokeiko.com/anime);
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

.end-btn {
  padding-top: 10px;
  text-align: center;
}
</style>
