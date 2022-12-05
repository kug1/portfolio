<template #fallback>
  <div class="self-center grid place-content-center py-24">
    <span class="grid place-content-center">
      <Icon icon="line-md:loading-loop" />
    </span>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
  components: {
    Icon,
  },
};
</script>
