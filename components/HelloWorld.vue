<template>
  <v-flex xs12 my-3>
    <v-layout justify-center row>
      <v-flex xs4 pa-2>
        <stats-card title="1.200" sub-title="assigned credits" color="primary" icon="mdi-plus" />
      </v-flex>
      <v-flex xs4 pa-2>
        <stats-card title="1.000" sub-title="used credits" color="secondary" icon="mdi-minus" />
      </v-flex>
      <v-flex xs4 pa-2>
        <stats-card title="200" sub-title="remaining credits" color="accent" icon="mdi-sigma" />
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
import StatsCard from "@/components/common/StatsCard";
export default {
  components: {
    StatsCard
  }
};
</script>