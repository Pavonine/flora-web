<template>
  <div class="header">
    <section class="app-heading">
      <h1>{{ appName }}</h1>
    </section>
    <section class="app-settings">
      <button class="settings-button"></button>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  @Prop() private appName!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  display: grid;
  background: white;
  box-shadow: 0px 1px 50px rgba(0, 0, 0, 0.1);
  grid-template-columns: 0.9fr 0.1fr;
  padding: 0 20px;
  height: 60px;
  .app-heading {
    grid-column: 1;
    display: flex;
    flex-flow: column;
    justify-content: center;
    h1 {
      text-align: left;
      font-weight: 500;
      font-size: 20px;
    }
  }

  .app-settings {
    grid-column: 2;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    .settings-button {
      border: none;
      border-radius: 100%;
      background: url('../assets/settings.svg') no-repeat center;
      height: 40px;
      width: 40px;
      box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
