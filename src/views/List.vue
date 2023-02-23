<template>
  <div class="d-flex justify-content-center">
    <div v-for="(task, index) in tasks" :key="index" class="col-6 mt-2">
      <b-card :title="tasks.subject" style="margin-top:10px">
        <b-card-text>
            {{ task.description }}
        </b-card-text>
        <b-button variant="info" @click="edit(index)">Editar</b-button>
        <b-button variant="danger" @click="remove(task, index)" style="margin-left: 10px;">Excluir</b-button>
      </b-card>
    </div>
    <b-modal ref="modalRemove" hide-footer title="Exclusão de tarefa">
      <div class="d-block text-center">
        Deseja realmente excluir essa tarefa? {{ taskselected.subject }}
      </div>
      <div class="d-flex justify-content-end" style="margin-top: 10px;">
        <b-button variant="info" @click="hideModal">Cancelar</b-button>
        <b-button variant="danger" @click="confirmeRemoveTask" style="margin-left: 10px;">Confirmar</b-button>
      </div>
    </b-modal>
  </div>
</template>
<script>
  export default{
    name: "List",

    data() {
      return {
        tasks: []
      }
    },
    created() {
      this. tasks =  (localStorage.getItem("task")) ? JSON.parse(localStorage.getItem("task")) : [];
    },
    methods: {
      edit(index) {
        this.$router.push({ name:"form", params: { index }})
    },
      remove(task, index){
        this.taskselected = task;
        this.taskselected.index = index;
        this.$refs.modalRemove.show();
    },
    hidelModal(){
      this.$refs.modalRemove.hide();
    },
    confirmRemoveTask(){
      this.tasks.splice(this.tasksSelected.index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      this.hidelModal;
    }
  }
}
</script>

