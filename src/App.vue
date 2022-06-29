<template>
  <div id="app">
    <div class="header">
      <div class="top">
        <div class="top-bg">
          <div>欢迎访问水立净环保科技官网！</div>
          <div>
            <span>企业分站 </span>| <span>网站地图 </span>|
            <span> 企业分站 </span>|
            <span> 企业分站</span>
          </div>
        </div>
      </div>
      <div class="logo">
        <img src="./assets/img/toplogo.png" alt />
        <div class="phone">
          联系电话
          <div class="number">13486435988/400-1682-986</div>
        </div>
      </div>
      <div class="menu">
        <!-- <el-menu
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
          <el-menu-item index="1">处理中心</el-menu-item>
        </el-menu> -->
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#236e2b"
          active-background-color="f0f"
          menu-trigger="click"
          text-color="#fff"
          active-text-color="#fff"
          @select="handleSelect"
        >
          <el-menu-item index="1">首页</el-menu-item>
          <el-submenu index="2" popper-class="menu-class">
            <template slot="title">关于我们</template>
            <el-menu-item index="2-1">公司简介</el-menu-item>
            <el-menu-item index="2-2">联系我们</el-menu-item>
          </el-submenu>
          <el-submenu index="3" popper-class="menu-class">
            <template slot="title">产品中心</template>
            <el-menu-item index="">废气处理设备</el-menu-item>
            <el-menu-item index="3-2">污水处理设备</el-menu-item>
            <el-menu-item index="3-2">河道处理设备</el-menu-item>
            <el-menu-item index="3-2">污水处理药剂</el-menu-item>
            <el-menu-item class="sp-item" index="3-2"
              >车间通风工程及可旋转式吸气罩</el-menu-item
            >
          </el-submenu>
          <el-submenu index="4" popper-class="menu-class">
            <template slot="title">工程案例</template>
            <el-menu-item index="4-1">打磨除尘粉尘收集</el-menu-item>
            <el-menu-item index="4-2">污水处理工程案例</el-menu-item>
            <el-menu-item index="4-2">河道清理工程案例</el-menu-item>
            <el-menu-item index="4-2">我们的客户</el-menu-item>
          </el-submenu>
          <el-submenu index="5" popper-class="menu-class">
            <template slot="title">新闻中心</template>
            <el-menu-item index="5-1">公司新闻</el-menu-item>
            <el-menu-item index="5-2">行业新闻</el-menu-item>
            <el-menu-item index="5-2">技术知识</el-menu-item>
          </el-submenu>
          <el-menu-item index="6">联系我们</el-menu-item>
        </el-menu>
      </div>
    </div>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      router: true,
      defaultActive: '/',
      isShow: false,
      activeIndex: '1'
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.header {
  height: 150px !important;
  width: 100%;
  .top {
    background-color: #2f2f2f;
    width: 100%;
    .top-bg {
      margin: 0 auto;
      width: 1200px;
      color: #fff;
      display: flex;
      justify-content: space-between;
      height: 22px;
      line-height: 22px;
      font-size: 12px;
      span {
        cursor: pointer;
      }
    }
  }
  .logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1200px;
    height: 91px;
    margin: 0 auto;
    .phone {
      font-size: 14px;
      font-weight: bold;
      color: #666;
      font-family: 微软雅黑, 'Microsoft YaHei';
      .number {
        font-size: 24px;
        font-family: 微软雅黑, 'Microsoft YaHei';
        color: #3b65ff;
      }
    }
    img {
      display: block;
      width: 430px;
      height: 71px;
    }
  }
  .menu {
    background-color: #236e2b;
    display: flex;
    justify-content: center;
    align-items: center;
    .el-menu-demo {
      height: 40px;
      li {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px !important;
        padding: 0;
        width: 124px;
        height: 40px;
        text-align: center;
        &:hover {
          background-color: #05ce1a !important;
        }
        i {
          display: none;
        }
        .el-submenu__title {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 16px !important;
          padding: 0;
          width: 124px;
          height: 40px;
          text-align: center;
          &:hover {
            background-color: #05ce1a !important;
          }
        }
      }
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

.menu-class {
  .el-menu--popup {
    min-width: unset !important;
  }
  ul {
    width: 124px;
    padding: 0 !important;
    margin-top: -5px !important;
    box-shadow: none !important;
    background-color: #4e4c4c !important;
  }
  li {
    width: 124px;
    height: 28px !important;
    line-height: 28px !important;
    font-size: 12px;
    padding: 0 !important;
    text-align: center;
    background-color: #4e4c4c !important;
    &:hover {
      background-color: #05ce1a !important;
    }
  }
  .sp-item {
    height: 50px !important;
    line-height: 25px !important;
    white-space: pre-wrap;
  }
}
</style>
