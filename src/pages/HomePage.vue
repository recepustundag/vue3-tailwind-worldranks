<template>
  <div class="flex items-center justify-between py-6">
    <div class="text-gray-500 dark:text-gray-400 text-lg">
      Fount 234 countries
    </div>
    <div class="flex items-center relative search w-1/2">
      <svg
        class="w-6 h-6 absolute top-0 left-0 mt-3 ml-3"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clipRule="evenodd"
        />
      </svg>
      <input
        type="text"
        name=""
        class="search focus:outline-none w-full"
        placeholder="Filter by Name, Region, Subregion"
        @keyup="search($event)"
      />
    </div>
  </div>
  <div class="mt-20">
    <CountryTable :countries="filteredCountries" />
  </div>
</template>

<script>
import { ref, onMounted} from 'vue';
import CountryTable from '../components/CountryTable.vue';
export default {
  components: {
    CountryTable,
  },
  setup() {
    const exports = {};
    exports.countries = ref(null);
    exports.filteredCountries = ref(null);

    exports.search = (e) => {
     exports.filteredCountries.value = exports.countries.value.filter(
        (country) =>
          country.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          country.region.toLowerCase().includes(e.target.value.toLowerCase()) ||
          country.subregion.toLowerCase().includes(e.target.value.toLowerCase())
      );
    };

    onMounted(async () => {
      const res = await fetch('https://restcountries.eu/rest/v2/all');
      exports.countries.value = await res.json();
      exports.filteredCountries.value = exports.countries.value;
    });

    return {
      ...exports,
    };
  },
};
</script>
