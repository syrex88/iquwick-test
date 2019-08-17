<template>
  <div>
    <el-row>
      <el-col>
        <el-menu :router="true" class="el-menu-demo" mode="horizontal">
          <el-menu-item route="/" index="">
            Счета
          </el-menu-item>
          <el-menu-item index="operation-days">
            Операционные дни
          </el-menu-item>
          <el-menu-item index="operations">
            Операции
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col>
        <nuxt />
      </el-col>
    </el-row>
  </div>
</template>
