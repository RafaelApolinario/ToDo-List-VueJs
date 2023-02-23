<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
          <b-navbar-brand href="#">Todo List</b-navbar-brand>
      
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item to="/">Lista de Tarefas</b-nav-item>
                <b-nav-item to="/form">Cadastro</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div> 
</template>

<script>
export default {
    name: 'NavBarComponent'

}
</script>