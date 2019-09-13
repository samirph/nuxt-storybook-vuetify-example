/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

import StatsCard from '@/components/StatsCard.vue'

storiesOf('StatsCard', module)
  .add('stats-card default color', () => ({
    components: { StatsCard },
    template:
      '<v-container grid-list-xl fluid><v-layout row wrap><v-flex xs4><stats-card title="1.200" sub-title="assigned credits"/></v-flex></v-layout></v-container>'
  }))
  .add('stats-card green color', () => ({
    components: { StatsCard },
    template:
      '<v-container grid-list-xl fluid><v-layout row wrap><v-flex xs4><stats-card title="1.200" sub-title="assigned credits" color="green" icon="mdi-plus" /></v-flex></v-layout></v-container>'
  }))

  storiesOf('Buttons', module)
  .add('disabled button', () => ({
    template: '<v-btn disabled>Save</v-btn>'
  }))
  .add('primary button', () => ({
    template: '<v-btn color="primary">Save</v-btn>'
  }))