<template>
  <div class="grid grid-cols-3 gap-12 p-8 md:p-0">
    <div class="col-span-3 md:col-span-1">
      <div class="shadow-gray bg-lightcolor p-6 text-center rounded">
        <img :src="country.flag" class="w-full rounded" />
        <div class="color-three font-semibold text-3xl pt-6 pb-4">
          {{ country.name }}
        </div>
        <span class="color-green text-sm">{{ country.region }}</span>
        <div class="mt-6 grid grid-cols-2 gap-4">
          <div class="flex flex-col items-center justify-center leading-10">
            <div class="color-green">{{ country.population }}</div>
            <span class="text-sm color-gray">Population</span>
          </div>
          <div class="flex flex-col items-center justify-center leading-10">
            <div class="color-green">{{ country.area }}</div>
            <span class="text-sm color-gray">Area(km )</span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-3 md:col-span-2">
      <div class="shadow-gray bg-lightcolor p-6 rounded">
        <div class="font-semibold py-4 color-three text-xls">Details</div>
        <div
          class="flex items-center justify-between py-4 border-b border-gray-200"
        >
          <span class="color-gray">Capital</span>
          <span class="color-green">{{ country.capital }}</span>
        </div>
        <div
          class="flex items-center justify-between py-4 border-b border-gray-200"
        >
          <span class="color-gray">Subregion</span>
          <span class="color-green">{{ country.subregion }}</span>
        </div>
        <div
          class="flex items-center justify-between py-4 border-b border-gray-200"
        >
          <span class="color-gray">Languages</span>
          <span class="color-green">{{
            languages.map(({ name }) => name).join(', ')
          }}</span>
        </div>
        <div
          class="flex items-center justify-between py-4 border-b border-gray-200"
        >
          <span class="color-gray">Currencies</span>
          <span class="color-green">{{
            currencies.map(({ name }) => name).join(', ')
          }}</span>
        </div>
        <div
          class="flex items-center justify-between py-4 border-b border-gray-200"
        >
          <span class="color-gray">Native Name</span>
          <span class="color-green">{{ country.nativeName }}</span>
        </div>
        <div
          class="flex items-center justify-between py-4 border-b border-gray-200"
        >
          <span class="color-gray">Gini</span>
          <span class="color-green">{{ country.gini }}</span>
        </div>
        <div class="mt-6">
          <div class="grid grid-cols-3 md:grid-cols-5 gap-6">
            <div
              class="flex flex-col items-center"
              v-for="border in borders"
              :key="border"
            >
              <Borders :items="allCountry" :alpha3Code="border" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Borders from '../components/Borders.vue';
export default {
  components: {
    Borders
  },
  setup() {
    const route = useRoute();
    const exports = {};
    exports.country = ref({});
    exports.allCountry = ref({});
    exports.languages = ref([]);
    exports.currencies = ref([]);
    exports.borders = ref(null);
    onMounted(async () => {
      const res = await fetch(
        `https://restcountries.eu/rest/v2/alpha/${route.params.id}`
      );
      exports.country.value = await res.json();
      exports.languages.value = exports.country.value.languages;
      exports.currencies.value = exports.country.value.currencies;
      exports.borders.value = exports.country.value.borders;
      const resAll = await fetch(`https://restcountries.eu/rest/v2/all`);
      exports.allCountry.value = await resAll.json();
    });

    return {
      ...exports,
    };
  },
};
</script>
