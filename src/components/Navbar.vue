<template>
  <v-app-bar absolute color="#FFCDD211" class="navbar" elevation="0">
    <v-container class="py-0 fill-height">
      <img max-width="160" src="@/assets/images/logo-pink-1.png" class="mr-8" href="/">

      <div class="pad-hidden">
        <v-btn class="mr-2" text href="/">主頁<v-icon right>mdi-cast-variant</v-icon></v-btn>
        <v-btn class="mr-2" text @click="$vuetify.goTo('#safe')">特点<v-icon right>mdi-arrow-right</v-icon></v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-btn class="pad-hidden" href="/index.php" outlined rounded style="text-transform:none;">控制面板<v-icon right>mdi-dns-outline</v-icon></v-btn>

      <div class="text-center desktop-hidden">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" fab small outlined
              style="text-transform:none;"><v-icon>mdi-menu</v-icon></v-btn>
          </template>
          <v-list dense nav>
            <v-list-item>
              <v-btn class="mr-2" text href="/"><v-icon left>mdi-cast-variant</v-icon>主页</v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn class="mr-2" text href="/index.php"><v-icon left>mdi-dns-outline</v-icon>控制面板</v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    navbar: [
      {
        name: "特点",
        tag: "#safe"
      }
    ]
  }),
};
</script>

<style lang="less" scoped>
img {
  height: 40px;
}

// .navbar {
//   height: 90px !important;
//   padding: 10px;
// }

.navbox {
  display: absolute;
}
</style>
