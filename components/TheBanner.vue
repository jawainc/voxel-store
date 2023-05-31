<template>
  <div class="banner">
    <div class="banner__content-container">
      <h1>Welcome to Voxel</h1>
      <h2>Discover our wide range of products</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~assets/scss/variables';

.banner {
  position: relative;
  width: 100%;
  height: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.8) url('~assets/images/banner-bg-cp.png')
    no-repeat center center;
  background-blend-mode: color;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.banner__content-container {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 5px;
  h1 {
    color: $color-primary;
    font-weight: 600;
    font-size: 34px;
    line-height: 0;
  }
  h2 {
    color: $color-secondary;
    font-weight: 500;
    font-size: 16px;
    line-height: 0;
  }
}
</style>
