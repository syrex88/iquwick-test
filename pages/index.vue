<template>
  <section>
    <h3 style="text-align:center">
      Счета
    </h3>
    <div>
      <el-table
        :data="accountsBalance"
        style="width: 100%"
      >
        <el-table-column
          prop="accountNumder"
          label="accountNumder"
          width="180"
        />
        <el-table-column
          prop="balance"
          label="balance"
          width="80"
        />
        <el-table-column
          prop="updated"
          label="updated"
        />
      </el-table>
    </div>
  </section>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from 'nuxt-property-decorator'
import { State } from 'vuex-class'
import { AccountBalance } from '~/types'

@Component
export default class Index extends Vue {
  @State accountsBalance!: AccountBalance
}
</script>
