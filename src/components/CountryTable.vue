<template>
  <div class="grid grid-cols-4 gap-3 mb-6">
    <div class="text-center color-gray">Name</div>
    <div class="text-center color-gray">Population</div>
    <div class="text-center color-gray">Area(km )</div>
    <div class="text-center color-gray">Gini</div>
  </div>
  
  <div
    class="grid grid-cols-4 gap-3 mb-6 table-rows"
    v-for="country in countries"
    :key="country.name"
  >
    <div class="col-span-1 flex items-center">
      <router-link
        :to="{ name: 'Details', params: { id: country.alpha3Code } }"
      >
        <div class="flex items-center">
          <img :src="country.flag" class="w-16 rounded mr-3" />
          {{ country.name }}
        </div>
      </router-link>
    </div>
    <div class="col-span-1 flex items-center justify-center">
      <div>{{ country.population }}</div>
    </div>
    <div class="col-span-1 flex items-center justify-center">
      <div>{{ country.area }}</div>
    </div>
    <div class="col-span-1 flex items-center justify-center">
      <template v-if="country.gini == null">No Data</template>
      <template v-else>
        <div class="relative pt-1">
          <div class="flex mb-2 items-center justify-between">
            <div>
              <span
                class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 opacity-0"
              >
                Task in progress
              </span>
            </div>
            <div class="text-right">
              <span class="text-xs font-semibold inline-block text-green-600">
                {{ country.gini }}%
              </span>
            </div>
          </div>
          <div
            class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200"
          >
            <div
              :style="'width:' + country.gini"
              class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
            ></div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    countries: Array,
  },
};
</script>
