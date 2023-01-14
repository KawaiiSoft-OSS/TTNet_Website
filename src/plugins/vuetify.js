import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#f85f89',
            },
            dark: {
                primary: '#f74777',
            },
        },
    },
});
