<template>
  <footer class="footer">
    <StoreLogo />
  </footer>
</template>

<style lang="scss" scoped>
@import '~assets/scss/mixins';

.footer {
  @include border-top;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
