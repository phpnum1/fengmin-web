<template>
  <div id="app">
    <el-container>
      <el-header>
        <div>
          欢迎访问水立净环保科技官网！
        </div>
        <div class="logo">
          <img src="./assets/img/toplogo.png" alt />
          <div>
            联系电话
            <div class="phone">
              13486435988/400-1682-986
            </div>
          </div>
        </div>
        <div>
          <el-menu
          :default-active="defaultActive"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          :router="router"
        >
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/1">关于我们</el-menu-item>
          <el-menu-item index="/2">产品中心</el-menu-item>
          <el-menu-item index="/3">工程案例</el-menu-item>
          <el-menu-item index="/4">新闻中心</el-menu-item>
          <el-menu-item index="/5">联系我们</el-menu-item>
        </el-menu>
        </div>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <div class="footer" v-show="isShow">
        <div class="footer-content">
          <ul class="content-nav">
            <li>
              <p>走进科建</p>
              <span>发展历程</span>
              <span>企业文化</span>
              <span>资质荣誉</span>
              <span>合作伙伴</span>
            </li>
            <li>
              <p>新闻资讯</p>
              <span>公司新闻</span>
              <span>行业动态</span>
            </li>
            <li>
              <p>产品中心</p>
              <span>介绍视频</span>
              <span>管理模式</span>
              <span>平台目标</span>
              <span>功能模块</span>
            </li>
            <li>
              <p>联系我们</p>
              <span>邮箱</span>
              <span>电话</span>
            </li>
          </ul>
        </div>
        <div class="copyright">
          <span>版权所有</span>
        </div>
      </div>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      router: true,
      defaultActive: "/",
      isShow: false
    };
  },
  methods: {
    handleSelect(key) {
      this.isShow = this.defaultActive != key;
      window.console.log(this.isShow);
    }
  }
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
html,
body {
  height: 100%;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.el-header {
  // display: flex;
  // justify-content: space-between;
  // align-content: center;
  width: 1240px;
  margin: 0 auto;
  height: 150px!important;
  //background-color: #fff;

  .logo {
    display: flex;
    justify-content: space-between;
  align-content: center;
    width: 100%;
    padding: 10px;
    .phone{
      font-size: 24px;
    font-family: 微软雅黑, "Microsoft YaHei";
    color: #3b65ff;
    }
    img {
      display: block;
      width: 430px;
      height: 71px;
    }
  }
}
.el-main {
  padding: 0 !important;
}

.footer {
  width: 100%;
  height: 216px;
  overflow: hidden;
  background-color: #14679f;
  &-content {
    width: 1240px;
    margin: 0 auto;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    .content-nav {
      display: flex;
      justify-content: space-around;
      li {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        //justify-content: center;
        align-items: flex-start;
        p {
          font-size: 20px;
          color: #d4edff;
          padding: 10px 0;
        }
        span {
          color: #f7f7f7;
          font-weight: 300;
          padding: 5px 0;
        }
      }
    }
    img {
      width: 170px;
      height: 170px;
      padding: 10px;
    }
  }
  .copyright {
    height: 30px;
    background: #125688;
    span {
      color: #fff;
      line-height: 30px;
    }
  }
}
</style>
