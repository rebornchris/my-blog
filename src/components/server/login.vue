<template lang="html">
    <div class="main-container">
      <div class="">
        <div class="login">
          <el-input v-model='username' placeholder="请输入账号"></el-input>
          <el-input v-model='password' type='password' placeholder="请输入密码"></el-input>
        </div>
        <div class="login-btn">
          <el-button type="success" @click='login'>登录</el-button>
          <el-button type="info" @click='reset'>重置</el-button>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (this.username === '' || this.password === '') {
        this.$message({
          type: 'error',
          message: '请输入账号或密码！'
        })
      }
      axios.post(`http://localhost:3000/back/login`, {
        username: this.username,
        password: this.password
      }).then(response => {
        if (response.data === 'no such user' || response.data === 'password incorrect') {
          this.$message({
            type: 'error',
            message: '账号或密码错误！'
          })
          this.username = ''
          this.password = ''
          return
        }
        this.$router.push({
          name: 'viewArticles'
        })
      })
    },
    reset () {
      this.username = ''
      this.password = ''
    }
  }
}
</script>

<style lang="less" scoped>
.main-container {
    height: 80%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .login {
        height: 150px;
        width: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .login-btn {
        margin-top: 10px;
    }
}
</style>
