<template>
  <div id="app" style="font-family: Arial, sans-serif; padding: 20px;">
    <h1>Vue SPA with Express Server</h1>
    <p>Current path: {{ $route || 'home' }}</p>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
    <p>This is a Single Page Application. All routes are served from index.html.</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      $route: window.location.pathname
    }
  },
  mounted() {
    window.addEventListener('popstate', () => {
      this.$route = window.location.pathname
    })
  }
}
</script>

<style>
a {
  color: #42b883;
  text-decoration: none;
  margin-right: 10px;
}

a:hover {
  text-decoration: underline;
}

ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 20px;
}
</style>
