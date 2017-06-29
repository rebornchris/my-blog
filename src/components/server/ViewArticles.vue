<template>
  <div class="view-container">
    <div class="view-body">
      <div class="view-brand">
        <p>浏览所有文章</p>
        <p>共 {{ this.articles.length }} 篇文章</p>
      </div>
      <div class="view-main">
        <table class="view-table">
            <tr>
              <th>文章标题</th>
              <th>创建时间</th>
              <th>操作</th>
            </tr>
            <tr v-for="(article, index) in articles" :key="article._id">
              <td>{{ article.title }}</td>
              <td>{{ formatDate(article.createTime) }}</td>
              <td>
                <router-link :to="{ name: 'Article', params: { id: article._id }}">
                  <button type="button" name="button" class="btn view-btn">查看</button>
                </router-link>
                <router-link :to="{ name: 'changeArticle', params: { id: article._id } }">
                  <button type="button" name="button" class="btn change-btn">修改</button>
                </router-link>
                <button type="button" name="button" class="btn del-btn" @click="deleteArticle(article._id, index)">删除</button>
              </td>
            </tr>
          </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import URL from '../../../config/url.js'
import Tools from '../../config/tools'
export default {
  name: 'ViewArticles',
  created () {
    this.getArticlesInfo()
  },
  data () {
    return {
      articles: []
    }
  },
  methods: {
    getArticlesInfo () {
      axios.get(`${URL.BASE_URL}/back/getArticlesInfo`).then(response => {
        if (response.data === 'no login') {
          this.$router.push({name: 'login'})
          return
        }
        this.articles = response.data
      })
    },
    deleteArticle (id, index) {
      this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        axios.get(`${URL.BASE_URL}/back/deleteArticle`, {
          params: {
            id
          }
        }).then(() => {
          this.articles.splice(index, 1)
        })
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    formatDate (time) {
      return Tools.frontFormatDate(time)
    }
  }
}
</script>

<style lang="less" scoped>
  .view-container{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    .view-body{
      margin-top: 50px;
      margin-bottom: 100px;
      box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
      width: 60%;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .view-brand{
        height: 80px;
        width: 100%;

        background-color: rgb(232, 232, 232);
        line-height: 56px;
        color: rgba(0, 0, 0, 0.4);
        font-size: 20px;
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 30px;
        padding-right: 30px;
      }
      .view-main{
        display: flex;
        align-self: center;
        width: 80%;

        .view-table {
            width: 100%;
            font-size: 14px;
            color: rgba(0, 0, 0, 0.4);
            border-collapse: collapse;
            margin-top: 50px;
            tr {
              border-bottom: 1px solid rgb(228, 228, 228);
              td, th {
                padding: 15px 25px;
                font-weight: normal;
              }
              td {
                color: #3c3c3c;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
              &:last-child {
                border-bottom: none;
              }
              .btn {
                border: none;
                background-color: rgb(0, 171, 255);
                padding: 5px 15px;
                color: white;
                border-radius: 2px;
                box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
                cursor: pointer;
                outline: none;
                transition: background-color .3s ease;
                &:hover {
                  background-color: rgb(0, 151, 255);
                }
                &:active {
                  background-color: rgb(0, 131, 255);
                }
              }
              .del-btn {
                background-color: rgb(235, 60, 60);
                &:hover {
                  background-color: rgb(215, 60, 60);
                }
                &:active {
                  background-color: rgb(175, 60, 60);
            }
          }
        }
      }
    }
  }
}
</style>
