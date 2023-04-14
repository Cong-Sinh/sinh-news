<template>
  <div class="col-span-5 col-start-4 pt-6 ">
    <div class="card rounded">
      <div class="bg-white card__slim py-4">
        <div class="flex items-center pl-4 card__avatar pb-4 bt-1 ">
          <Skeletor circle size="24" class="post__avatar mr-1" />
          <Skeletor width="186" height="12" pill style="margin-right: 4px" />

        </div>

        <div class="card__meta px-4 ">
          <Skeletor width="full" />
          <Skeletor width="full" />
        </div>

        <div class="card__image py-4">
          <Skeletor height="400" />
        </div>

        <div class="pl-4 card__meta">
          <Skeletor width="112" height="12" />
        </div>
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