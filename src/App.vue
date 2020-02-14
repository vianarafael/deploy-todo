<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <ul>
      <li v-for="task in todos" :key="task">{{ task.todo }}</li>
    </ul>
  </div>
</template>

<script>
// test
export default {
  name: "App",
  data: () => ({
    todos: []
  }),
  mounted() {
    fetch("/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: "{ getTodos { todo } }" })
    })
      .then(res => res.json())
      .then(res => res.data.getTodos.forEach(task => this.todos.push(task)))
      .then(() => console.log(this.todos));
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
