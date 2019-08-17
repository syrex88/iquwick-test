<template>
  <section>
    <h1 class="header">
      Nuxt TypeScript Starter
    </h1>
    <el-button type="primary" @click="click">
      Primary
    </el-button>
    <el-input-number :min="1" :max="10" />
    <div class="cards">
      <Card
        v-for="person in peoples"
        :key="person.id"
        :person="person"
      />
    </div>
  </section>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from 'nuxt-property-decorator'
import { State } from 'vuex-class'
import { Person } from '~/types'
import Card from '~/components/Card.vue'

@Component({
  components: {
    Card
  }
})
export default class extends Vue {
  @State peoples!: Person
  @State name!:string
  click() {
    // alert('click');
  }
}
</script>

<style scoped>
.header {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}
</style>
