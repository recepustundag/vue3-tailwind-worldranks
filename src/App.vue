<template>
  <div class="container max-w-5xl mx-auto min-h-screen">
    <div class="flex justify-center py-4">
      <router-link :to="{ name: 'Home' }"><Logo /></router-link>
      <label for="changerTheme" class="flex items-center cursor-pointer ml-12">
        <!-- toggle -->
        <div class="relative">
          <!-- input -->
          <input
            @click="toggleTheme"
            id="changerTheme"
            type="checkbox"
            class="hidden"
          />
          <!-- line -->
          <div
            class="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"
          ></div>
          <!-- dot -->
          <div
            class="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"
          ></div>
        </div>
        <!-- label -->
        <div class="ml-3 text-gray-700 font-medium color-gray">Change Mode</div>
      </label>
    </div>
    <router-view />
  </div>
</template>
<script>
import { ref, onMounted } from 'vue';
import Logo from './components/Logo.vue';
export default {
  components: {
    Logo,
  },
  setup() {
    const exports = {};
    if (localStorage.getItem('theme') != null) {
      exports.theme = ref(localStorage.getItem('theme'));
    } else {
      exports.theme = ref('light');
    }
    document.body.setAttribute('data-theme', exports.theme.value);
    
    exports.toggleTheme = () => {
      console.log(exports.theme.value);
      if (exports.theme.value == 'dark') {
        exports.theme.value = 'light';
        document.body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      } else {
        exports.theme.value = 'dark';
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      }
    };

    onMounted(async () => {
      document.getElementById("changerTheme").checked = exports.theme.value == 'dark' ? true : false;
    });

    return {
      ...exports,
    };
  },
};
</script>
