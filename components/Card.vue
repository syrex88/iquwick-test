<template>
  <div>
    {{ Account }}
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from 'nuxt-property-decorator'
import { Account } from '~/types'

@Component({})
export default class Card extends Vue {
  @Prop() Account!: Account
}
</script>
