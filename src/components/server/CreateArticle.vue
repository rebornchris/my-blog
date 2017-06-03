<template lang="html">
  <div class="createArticle">
    <div class="create">
      <div class="edit-meta">

      </div>
      <div class="markdown-editor">
        <markdown-editor></markdown-editor>
      </div>
    </div>
    <div class="preview">

    </div>
  </div>
</template>

<script>
import { markdownEditor } from 'vue-simplemde'
export default {
  components: {
    markdownEditor
  }
}
</script>

<style lang="less" scoped>
.createArticle{

  padding: 30px 50px;
  height: 80%;
  display: flex;
  justify-content: space-around;

  .create{
    width: 45%;
    height: 100%;

    .edit-meta{
      background-color: #ddd;
      height: 120px;
    }

    .markdown-editor{
      margin-top: 10px;
      
      textarea{
        height: 300px !important;
      }
    }
    }

  .preview{
    width: 45%;
    background-color: #666;
  }
}
</style>
