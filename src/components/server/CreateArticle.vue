<template lang="html">
  <div class="createArticle">
    <div class="create">
      <div class="edit-meta">
        <div class="filed-item">
          <p>文章标题</p>
          <input type="text" name="title" placeholder="请输入文章标题" autocomplete="off" v-model='title'>
        </div>
        <div class="filed-item">
          <p>创建时间</p>
          <input type="date" name="time" placeholder="请输入文章创建时间(格式为yyyy-mm-dd)" autocomplete="off" v-model='createTime'>
        </div>
        <div class="filed-item">
          <p>文章标签</p>
          <input type="text" name="title" placeholder="请输入文章标签" autocomplete="off" v-model='tags'>
        </div>
      </div>
      <div class="markdown-editor">
        <markdown-editor v-model="content" ref="markdownEditor"></markdown-editor>
      </div>
      <div class="button-group">
        <button type="button" name="submit" @click='init'>初始化</button>
        <button type="button" name="submit" @click='post'>提交</button>
      </div>
    </div>
    <div class="preview">
      <p v-html='compiledMarkdown'></p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { markdownEditor } from 'vue-simplemde'
import Marked from '../../config/marked'

export default {
  components: {
    markdownEditor,
    Marked
  },
  data () {
    return {
      content: '',
      createTime: '',
      tags: '',
      title: ''
    }
  },
  computed: {
    compiledMarkdown: function () {
      return Marked(this.content)
    }
  },
  methods: {
    init () {
      this.content = ''
      this.createTime = ''
      this.title = ''
      this.tags = ''
    },

    post () {
      if (this.title === '' || this.content === '' || this.createTime === '' || this.tags === '') return
      axios.post('http://localhost:3000/back/saveArticle', {
        title: this.title,
        createTime: new Date(this.createTime).getTime(),
        tags: this.tags,
        content: Marked(this.content)
      }).then(response => {
        this.$router.push({name: 'Post'})
      })
    }
  }
}
</script>

<style lang="less" scoped>
.createArticle{
  margin-top: 30px;
  text-align: left;
  padding: 30px 50px;
  height: 80%;
  display: flex;
  justify-content: space-around;

  .create{
    width: 45%;
    height: 100%;

    .edit-meta{
      background-color: #fff;
      height: 120px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .filed-item{
        display: inline-flex;
        flex-direction: row;
      }

      p{
        margin-right: 25px;
      }

      input{
      //  font-size: 24px;
        border: none;
        outline: none;
        border-bottom: 1px solid rgb(228, 228, 228);
        width: 300px;
        transition: border-color .3s ease;
        font-size: 14px;
        padding: 0 10px;
        padding-bottom: 5px;

        &:focus{
            border-color: rgb(0, 171, 255);
        }
      }
    }

    .markdown-editor{
      color: black;
      margin-top: 20px;
      height: 600px;
    }
    }

  .preview{
    width: 45%;
    height: 100%;
    overflow: auto;

  }

  .button-group{

    display: flex;
    justify-content: space-around;
    button{
      /* color: black;
      background-color: #fff; */
      border: none;
      height: 30px;
      width: 70px;
      background-color: rgb(0, 171, 255);
      padding: 5px 15px;
      color: white;
      border-radius: 2px;
    //  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
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
  }
}
</style>
