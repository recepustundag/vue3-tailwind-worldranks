<template>
  <template v-if="item">
  <img :src="item.flag" :alt="item.name" class="w-full rounded h-20" />
    <span class="color-green mt-2">{{ item.name }}</span>
  </template>
</template>
<script>
import { ref, toRefs, onMounted, watch, watchEffect } from 'vue';
export default {
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
    alpha3Code: String,
  },
  setup(props) {
    const { items, alpha3Code } = toRefs(props);
    const item = ref(null);
    watchEffect(() => {
      if (items) {
        setTimeout(() => {
          for (const key in items.value) {
            if (items.value[key].alpha3Code === alpha3Code.value) {
              item.value = items.value[key];
            }
          }
        }, 3000);
      }
    });
    return {
      item,
    };
  },
};
</script>
