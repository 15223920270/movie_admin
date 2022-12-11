<template>
  <div>
    <el-header>
      <TypeCom></TypeCom>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </div>
</template>

<script>
import TypeCom from "@/components/TypeCom.vue";

export default {
  name: "IndexView",
  components: {TypeCom}
}
</script>

<style scoped>

</style>