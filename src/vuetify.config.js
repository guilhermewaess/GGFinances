import Vue from 'vue';
import {
  Vuetify,
  VApp,
  VBtn,
  VCard,
  VDivider,
  VExpansionPanel,
  VFooter,
  VForm,
  VList,
  VGrid,
  VIcon,
  VNavigationDrawer,
  VTextField,
  VToolbar,
  transitions,
} from 'vuetify';
import '../node_modules/vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  components: {
    VApp,
    VBtn,
    VCard,
    VDivider,
    VExpansionPanel,
    VFooter,
    VForm,
    VList,
    VGrid,
    VIcon,
    VNavigationDrawer,
    VTextField,
    VToolbar,
    transitions,
  },
  theme: {
    primary: '#1A237E',
    secondary: '#304FFE',
    accent: '#5C6BC0',
    error: '#B71C1C',
    warning: '#ffeb3b',
    info: '#2196f3',
    success: '#4caf50',
  },
});
