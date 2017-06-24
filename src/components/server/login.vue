<template lang="html">
    <div class="main-container">
      <div class="">
        <div class="login">
          <el-input v-model='username' placeholder="请输入账号"></el-input>
          <el-input v-model='password' placeholder="请输入密码"></el-input>
        </div>
        <div class="login-btn">
          <el-button type="success" @click='login'>登录</el-button>
          <el-button type="info" @click='reset'>重置</el-button>
          <el-button type="info" @click='addUser'>注册</el-button>
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

    addUser () {
      axios.post(`http://localhost:3000/saveUser`, {
        username: this.username,
        password: this.password
      }).then(response => {
        console.log(response)
      })
    },

    login () {
      if (this.username === '' || this.password === '') return
      axios.post(`http://localhost:3000/back/login`, {
        username: this.username,
        password: this.password
      }).then(response => {
        if (response.data === 'no such user' || response.data === 'password incorrect' || response.data === 'no login') {
          this.$router.push({
            name: 'login'
          })
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
