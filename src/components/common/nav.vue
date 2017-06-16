<template lang="html">
  <div class='nav-container'>
    <nav class="nav-top">
      <div class="nav-logo">
        <img src="../../assets/logo.jpeg" alt="" class="logo">
        <router-link :to="{name:'Post'}">
          <span class="brand">RebornChris</span>
        </router-link>
      </div>
      <ul class="nav-list" v-if="$route.path.indexOf('/back') === -1">
        <router-link :to="{name:'Post'}">
          <li :class="{ cur: $route.name === 'Post' }">Articles</li>
        </router-link>
        <router-link :to="{name:'Tags'}">
          <li :class="{ cur: $route.name === 'Tags' }">Tags</li>
        </router-link>
        <a href="http://rebornchris.com/vue-cnode" target="_blank">
          <li>Things</li>
        </a>
        <router-link :to="{name:'Me'}">
          <li :class="{ cur: $route.name === 'Me' }">Me</li>
        </router-link>

      </ul>
      <ul class="nav-list" v-if="$route.path.indexOf('/back') !== -1">
        <router-link :to="{name:'createArticle'}">
          <li :class="{ cur: $route.name === 'createArticle' }">CreateArticle</li>
        </router-link>
        <router-link :to="{name:'viewArticles'}">
          <li :class="{ cur: $route.name === 'viewArticles' }">ViewArticles</li>
        </router-link>
        <router-link :to="{name:''}">
          <li>Comments</li>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style lang='less' scoped>
@font-face {
    font-family: 'satisfy';
    font-style: normal;
    font-weight: 400;
    src: local('satisfy'), local('satisfy'), url(../../assets/satisfy.woff);
  }
.nav-container{
  /* position: absolute;
  top: 0;
  right: 0;
  left: 0; */
  z-index: 100;
  background: #fff;
  box-shadow: 0 0 4px rgba(0,0,0,0.25);

  .nav-top{
    max-width: 1200px;
    margin: 0 auto;
    height: 80px;
    padding: 25px 0;
    display: flex;
    justify-content: space-between;

    .nav-logo{
      display: flex;
      justify-content: center;
      align-items: center;
      font:normal 21px 'satisfy', 'Helvetica Neue', Helvetica, Arial;
      text-decoration: none;
      color: #42b983;
      font-weight: 600;

      .logo{
        width: 50px;
        height: 50px;

        &:hover{
          transform: scale(1.2);
        }
      }

      .brand{
        padding-left: 12px;
        color: #2c3e50;
        font-size: 1.5em;
        font-weight: 500;
      }
    }

    .nav-list{
      display: flex;
      align-items: center;
      list-style-type: none;
      margin: 0;
      padding: 0;

      a{
        text-decoration: none;
        color: inherit;
      }

      li{
        margin-left: 15px;
        cursor: pointer;
        font: normal 25px 'satisfy', 'Helvetica Neue', Helvetica, Arial;
        &:hover{
          border-bottom: 1px solid #42b983;
        }

      }

      .cur{
        border-bottom: 1px solid #42b983;
      }

    }
  }
}
</style>
