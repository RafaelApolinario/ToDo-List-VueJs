<template>
  <div class="container mt-2 col-6">
   <b-form>
    <b-form-group
      label="Titulo:"
      label-for="subject"
    >
      <b-form-input
        id="subject"
        v-model="form.subject"
        type="text"
        placeholder="Ex: lavar carro" 
        requered
        autocomplete="off"  
    >
      </b-form-input>
    </b-form-group>

    <b-form-group style="margin-top:10px"
      label="Descrição:"
      label-for="description"
    >
      <b-form-textarea 
        id="description"
        v-model="form.description"
        type="text"
        placeholder="Ex: Preciso lavar o carro" 
        requered
        autocomplete="off"  
      >
      </b-form-textarea>
    </b-form-group>
    <div style="margin-top: 20px;">
      <b-button type="submit" variant="info" @click="saveTask">Salvar</b-button>
      <b-button type="reset" variant="outline-primary" style="margin-left: 10px;">Limpar</b-button>
    </div>
   </b-form>
  </div>
</template>
<script>
  export default{
    name: "Form",

    data() {
      return {
        form:{
          subject:"",
          description:""
        },
        methodSave: "new"
      }
    },
    created(){
      if(this.$route.params.index === 0 || this.$route.params.index !== undefined) {
        this.methodSave = "update";
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        this.form = tasks[this.$route.params.index];
      }
    },

    methods: {
      saveTask(){
        if(this.methodSave === "update"){ 
          let tasks = JSON.parse(localStorage.getItem("tasks"));
          tasks[this.$route.params.index] = this.form
          localStorage.setItem("tasks", JSON.stringify(tasks));
          this.$router.push({name: 'list'});
          return;
        }
          let tasks =  (localStorage.getItem("task")) ? JSON.parse(localStorage.getItem("task")) : [];
          tasks.push(this.form);
          localStorage.setItem("tasks", JSON.stringify(tasks));
          this.$router.push({name: 'list'});
          // this.clearForm();
          // this.makeToast();
        
        },
      clearForm() {
        this.form.subject = "";
        this.form.description = "";
      },
      makeToast(){
        const vm = new Vue();
        vm.$bvToast.toast(`Tarefa salva com sucesso!`, {
          title: 'Sucesso',
          autoHideDelay: 4000,
          variants: 'success',
        })
      }
    }
  }
</script>