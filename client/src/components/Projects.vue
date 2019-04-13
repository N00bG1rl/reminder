<template>
  <Panel title="Projects">
    <v-layout row wrap>
      <v-flex xs8>
        <v-text-field
          placeholder="Add List"
          @input="setNewProjectName"
          :value="newProjectName"
        ></v-text-field>
      </v-flex>
      <v-flex xs4>
        <v-btn
          @click="createProject"
          dark
          class="mt-2"
          color="green">
          <v-icon class="mr-2">add_circle</v-icon>
          Add
        </v-btn>
      </v-flex>
    </v-layout>
  </Panel>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('projects', [
      'newProjectName',
    ]),
  },
  methods: {
    ...mapMutations('projects', [
      'setNewProjectName',
    ]),
    ...mapActions('projects', [
      'createProject',
    ]),
  },
};
</script>

<style>

</style>
