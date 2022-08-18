<template>
  <header class="d-flex align-items-center justify-content-between py-4">
    <div class="">
      <h1>Fiber</h1>
    </div>

    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link text-body" href="#">Community</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-body" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-body" href="#">Features</a>
      </li>
    </ul>

    <div class="">
      <a href="" class="btn p-2">Sign in</a>
      <router-link to="/signup" class="btn btn-primary p-2">
        Sign up
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style></style>
