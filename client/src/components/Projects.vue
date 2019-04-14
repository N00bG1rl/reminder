<template>
  <Panel title="Projects">
    <div
      class="project mt-2"
      v-for="project in projects"
      :key="project.id"
    >
      <v-layout>
        <v-flex xs9 class="text-xs-left">
          <span
            v-if="!project.isEditMode">
            {{project.title}}
          </span>
          <v-text-field
            autofocus
            v-if="project.isEditMode"
            :value="project.title"
            @keyup.enter="saveProject(project)"
            @input="setProjectTitle({
              project,
              title: $event,
            })"
          ></v-text-field>
        </v-flex>
        <v-flex xs3>
          <v-icon
            v-if="!project.isEditMode"
            @click="setEditMode(project)">
            edit
          </v-icon>
          <v-icon
            v-if="project.isEditMode"
            @click="saveProject(project)">
            check
          </v-icon>
          <v-icon
            class="trash"
            @click="deleteProject(project)">
            delete
          </v-icon>
        </v-flex>
      </v-layout>
    </div>
    <v-layout row wrap class="mt-4">
      <v-flex xs8>
        <v-text-field
          placeholder="Add List"
          @input="setNewProjectName"
          :value="newProjectName"
          @keyup.enter="createProject"
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
  mounted() {
    this.fetchProjects();
  },
  computed: {
    ...mapState('projects', [
      'newProjectName',
      'projects',
    ]),
  },
  methods: {
    ...mapMutations('projects', [
      'setNewProjectName',
      'setEditMode',
      'setProjectTitle',
    ]),
    ...mapActions('projects', [
      'createProject',
      'fetchProjects',
      'saveProject',
      'deleteProject',
    ]),
  },
};
</script>

<style>
.project {
  font-size: 18px;
}
.icon {
  cursor: pointer;
}
.v-icon:hover {
  color: green;
}
.trash:hover {
  color: red;
}
</style>
