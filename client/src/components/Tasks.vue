
<template>
  <Panel title="Tasks">
    <div
      class="tasks mt-2"
      v-for="task in tasks"
      :key="task.id"
    >
    {{task.description}}
    </div>

    <CreateRecord
      placeholder="Add list"
      @onInput="setNewTaskName"
      :value="newTaskName"
      @create="createTask"
    />
  </panel>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import CreateRecord from '@/components/CreateRecord.vue';

export default {
  components: {
    CreateRecord,
  },
  computed: {
    ...mapState('tasks', [
      'tasks',
      'newTaskName',
    ]),
  },
  methods: {
    ...mapActions('tasks', [
      'createTask',
    ]),
    ...mapMutations('tasks', [
      'setNewTaskName',
    ]),
  },
};
</script>

<style>

</style>
