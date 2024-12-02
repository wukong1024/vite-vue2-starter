<template>
  <div class="boby">
    <div class="desc-box">
      <h2 class="desc-box-title">{{ title }}</h2>
      <!-- slot -->
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "my-box",
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: "标题",
    },
  },

  created() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.desc-box {
  position: relative;
  border: 1px solid #aaa;
  padding: 20px 10px;
  margin: 5px 5px 20px;
  display: block;
  border-radius: 5px;
  .desc-box-title {
    position: absolute;
    top: -10px; /* 将伪元素向上移动到边框区域，可根据边框粗细调整具体值 */
    left: 10px;
    background-color: white; /* 设置背景色与盒子内部背景色一致，使其看起来像是在边框中 */
    font-size: 16px; /* 设置字体大小等样式，可根据实际需求调整 */
    padding: 0 0.5rem;
    letter-spacing: 0.3rem;
    color: #666;
  }
}
</style>
