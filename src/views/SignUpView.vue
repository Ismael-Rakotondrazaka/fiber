<template>
  <div class="row">
    <main class="col-lg-6 d-flex flex-column p-5">
      <h2>Fiber</h2>
      <h1 class="mt-5">Create your Fiber Account</h1>
      <form action="">
        <div class="form-group mt-4">
          <label for="name">Your name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            class="form-control"
          />
        </div>
        <div class="form-group mt-4">
          <label for="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="john@example.com"
            class="form-control"
          />
        </div>
        <div class="form-group mt-4">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="At least 8 characters"
            class="form-control"
          />
        </div>
        <div class="form-group mt-4 form-check">
          <label for="accept">
            <input type="checkbox" name="accept" id="accept" />
            <p class="d-inline" id="">
              By creating an account on Fiber, you agree to the
              <a href="#">Terms & Conditions.</a>
            </p>
          </label>
        </div>
        <button type="submit" class="btn btn-primary container-fluid mt-4">
          Create Fiber Account
        </button>
      </form>
      <p class="text-center mt-3">
        Already have an account? <a href="#">Sign in</a>
      </p>
    </main>
    <div
      class="
        col-lg-6
        bg-primary
        d-flex
        flex-column
        align-items-center
        justify-content-around
        p-sm-5
        pt-5
      "
    >
      <figure class="">
        <img src="../assets/images/Sign-Up-Image.png" alt="" class="w-100" />
        <div class="text-center mt-2 px-5 pt-5">
          <h1>Unparalleled Templates</h1>
          <p>
            Crafted by a team of professional designers, our templates are
            unparalleled in the market.
          </p>
        </div>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUpView",
};
</script>

<style></style>
