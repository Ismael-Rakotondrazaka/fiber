<template>
  <main>
    <div class="row pb-5 mb-5">
      <div class="col-lg d-flex flex-column justify-content-center">
        <div>
          <img src="../assets/images/star.svg" alt="" />
          <img src="../assets/images/star.svg" alt="" />
          <img src="../assets/images/star.svg" alt="" />
          <img src="../assets/images/star.svg" alt="" />
          <img src="../assets/images/star.svg" alt="" />
          <p class="d-inline mb-0 ms-2">Rated 4.8/5 (243 reviews)</p>
        </div>
        <div class="my-3">
          <h1 class="display-3">Create your portfolio in minutes.</h1>
          <p class="mb-0">
            With Fiber, you can setup your own personal portfolio in minutes
            with dozens of premade, beautiful templates.
          </p>
        </div>
        <div>
          <a href="#" class="btn btn-primary">Start Free Trial</a>
          <a href="#" class="ms-4">Views Examples</a>
        </div>
        <div>
          <ul class="list-inline my-3">
            <li class="list-inline-item">No Credit Card Required</li>
            <li class="list-inline-item">10 Free Templates</li>
          </ul>
        </div>
      </div>
      <img
        class="col-lg container-fluid"
        src="../assets/images/hero-Illustration.png"
        alt=""
      />
    </div>
    <div id="mt-5">
      <p class="text-primary">Why Fiber?</p>
      <h2>A good portfolio means good employability.</h2>
      <div class="row justify-content-between my-5">
        <div
          class="col-md-4 my-3"
          v-for="(advantage, key) in advantages"
          :key="key"
        >
          <img :src="require('../assets/images/' + advantage.image)" alt="" />
          <h2 class="mt-3">{{ advantage.title }}</h2>
          <p>{{ advantage.description }}</p>
        </div>
      </div>
    </div>
    <div class="row bg-primary align-items-center rounded px-sm-5">
      <div class="col-lg-6 text-white mt-5">
        <h2 class="display-5">Diversify your portfolio.</h2>
        <p>
          Create an even more impressive portfolio by creating case studies for
          your projects. Simply follow our step-by-step guide.
        </p>
        <button class="btn btn-action bg-white text-primary">
          Start Free Trial
        </button>
      </div>
      <img class="col-lg-6 mt-5" src="../assets/images/Page-Image.png" alt="" />
    </div>
    <div class="row justify-content-around my-5">
      <div
        v-for="(opinion, key) in opinions"
        :key="key"
        class="col-lg border rounded-3 p-4 m-2"
      >
        <div class="row align-items-center">
          <img
            :src="require('../assets/images/' + opinion.image)"
            alt=""
            class="col-3"
          />
          <div class="col-9">
            <h1 class="small font-weight-bold text-primary">
              {{ opinion.ownerFullName }}
            </h1>
            <h2 class="small">{{ opinion.revenue + " in revenue" }}</h2>
          </div>
        </div>
        <div class="my-3">
          <p>{{ opinion.description }}</p>
        </div>
        <div class="text-center">
          <button class="btn border text-primary">
            Views {{ opinion.ownerFirstName }}'s Portfolio
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "TheHomeMain",
  props: ["advantages", "opinions"],
};
</script>

<style></style>
