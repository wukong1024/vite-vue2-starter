<template>
  <div>
    <h1>{{ $route.name }}</h1>
    <my-box title="标题"></my-box>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },

  created() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
h1 {
  color: $main-color;
}
</style>
