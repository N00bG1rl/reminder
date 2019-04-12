<template>
  <v-container>
    <v-layout>
      <v-flex xs4>
        <Projects></Projects>
      </v-flex>

      <v-flex xs8>
        <panel title="Tasks">
          <h1>Testing</h1>

        </panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Projects from '@/components/Projects.vue';

export default {
  components: {
    Projects,
  },
};
</script>
