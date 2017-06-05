<template lang="html">
  <div class="createArticle">
    <div class="create">
      <div class="edit-meta">
        <div class="filed-item">
          <p>文章标题</p>
          <input type="text" name="title" placeholder="请输入文章标题" autocomplete="off">
        </div>
        <div class="filed-item">
          <p>创建时间</p>
          <input type="date" name="time" placeholder="请输入文章创建时间" autocomplete="off">
        </div>
        <div class="filed-item">
          <p>文章标签</p>
          <input type="text" name="title" placeholder="请输入文章标签" autocomplete="off">
        </div>
      </div>
      <div class="markdown-editor">
        <markdown-editor v-model="content" ref="markdownEditor"></markdown-editor>
      </div>
    </div>
    <div class="preview">
      <p v-html='compiledMarkdown'></p>
    </div>
  </div>
</template>

<script>
import { markdownEditor } from 'vue-simplemde'
import Marked from 'marked'

export default {
  components: {
    markdownEditor,
    Marked
  },
  data () {
    return {
      content: ''
    }
  },
  computed: {
    compiledMarkdown: function () {
      return Marked(this.content, { sanitize: true })
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
  //    overflow: auto;
      color: black;
      margin-top: 20px;
      height: 600px;
    }
    }

  .preview{
    width: 45%;
    height: 100%;
    overflow: auto;

  //  background-color: #666;
  }

  .button-type{
    align-self: flex-end;
    height: 300px;
    width: 133px;
  }
}
</style>
