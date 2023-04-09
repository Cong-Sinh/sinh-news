<template>
  <div class="col-span-5 col-start-4 mt-14 pt-6">
    <div class="card">
      <div class="card__image">
        <Skeletor height="200" />
      </div>

      <div class="card__slim">
        <div class="card__avatar">
          <Skeletor circle size="48" class="post__avatar" />
        </div>

        <div class="card__meta">
          <h2>
            <Skeletor width="50%" />
          </h2>

          <p>
            <Skeletor width="75%" />
          </p>
        </div>
      </div>

      <div class="card__text">
        <Skeletor v-for="i in 5" :key="i" />
      </div>

      <div class="card__actions">
        <Skeletor width="96" height="36" pill style="margin-right: 4px" />
        <Skeletor width="96" height="36" pill />
      </div>
    </div>
  </div>
</template>
<script>
import "vue-skeletor/dist/vue-skeletor.css";
import { Skeletor } from "vue-skeletor";

export default {
  components: { Skeletor },
};
</script>