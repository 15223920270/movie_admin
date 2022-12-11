<template>
  <div class="logs">
    <h1>管理员登陆</h1>
    <el-form :model="users" label-width="120px">
      <el-form-item label="用户名">
        <el-input placeholder="请输入用户名" v-model="users.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" placeholder="请输入密码" show-password v-model="users.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit()" style="width: 100%;">登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data(){
    return {
      users: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit(){
      console.log('username'+this.users.username)
      console.log('password'+this.users.password)
      this.$router.push('/index');
    }
  }
}
</script>

<style scoped>
   .logs{
      display:flex;
      justify-content: center;
      align-items: center;
      width: 80%;
      height: 500px;
   }
</style>