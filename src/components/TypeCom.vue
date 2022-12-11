<template>
  <el-header>
    <div>

      <el-menu :default-active="$route.path" class="el-menu-demo"
               mode="horizontal" router
               @select="handleSelect">
        <el-row>
          <el-col :span="3">
            <el-menu-item index="1">用户中心</el-menu-item>
          </el-col>
          <el-col :span="3">
            <el-menu-item index="2">订单管理</el-menu-item>
          </el-col>
          <el-col :span="3">
            <el-menu-item index="3">场次管理</el-menu-item>
          </el-col>
          <el-col :span="3">
            <el-menu-item index="/index/hall">影厅管理</el-menu-item>
          </el-col>
          <el-col :span="3">
            <el-menu-item index="/index/movie">电影管理</el-menu-item>
          </el-col>
          <el-col :span="3">
            <el-menu-item index="5">预定管理</el-menu-item>
          </el-col>
          <el-col :span="4">
            <el-sub-menu index="7">
              <template #title>我</template>
              <el-menu-item index="7-1">个人设置</el-menu-item>
              <el-menu-item index="7-2">退出</el-menu-item>
            </el-sub-menu>
          </el-col>
      </el-row>
      </el-menu>

    </div>
  </el-header>
</template>

<script>
export default {
  name: "TypeCom",
  data(){
    return{
        activeIndex: '4',
        activeIndex2: '4'
    }
  },
  methods:{
    handleSelect(key,KeyPath){
      console.log(key,KeyPath)
    }
  }
}
</script>