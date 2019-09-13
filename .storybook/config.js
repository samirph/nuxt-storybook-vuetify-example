/* eslint-disable import/no-extraneous-dependencies */
import { configure, addDecorator } from "@storybook/vue";
import VuetifyConfig from "@/plugins/vuetify"

// Ensures every story is wrapped in a v-app tag
addDecorator(() => ({
  vuetify: VuetifyConfig,
  template: "<v-app><story/></v-app>"
}));

function loadStories() {
    require('../stories/common.stories.js');
}

configure(loadStories, module);