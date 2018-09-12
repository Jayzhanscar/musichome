<template>
  <div style="background-color: #f0f0f0">
    <my-header></my-header>
    <div id="main">
      <div id="main-body">
        <!---this is the content---->
          <el-main style="margin-top: 4rem;background-color: white;">
            <div style="float: left;width: 100%; border-bottom: 1px solid #f0f0f0;padding: 10px 10px">
              <span style="font-size: Medium; float: left">热门文章</span>
                <el-tag style="margin-left: 10%">吉他</el-tag>
                <el-tag type="success">电钢</el-tag>
                <el-tag type="info">古典</el-tag>
                <el-tag type="warning">琴谱</el-tag>
                <el-tag type="danger">个人show</el-tag>
                <el-tag type="success">音乐节</el-tag>
            </div>
            <div style="margin-top: 80px;">
              <a  class="a-items-index-a">
                <div class="a-items-index a-items-index-a">
                  <el-row type="flex" justify="start" style="flex-direction: column">
                    <el-col :span="9"><a><div style="font-size: 1rem;text-align: left">关于指弹吉他的个人见解</div></a></el-col>
                  </el-row>
                  <div style="text-align: left;display: flex;margin-top: 20px;line-height: 30px;color: #8f969c">
                    <el-button type="success" style="height: 20px; ;line-height: 2px;font-size: 12px;">吉他</el-button>
                    <span style="line-height: 30px;margin-left: 20px;">押尾光次郎</span>
                    <span style="line-height: 30px;margin-left: 20px;">2018-8-8</span>
                    <span style="line-height: 30px;margin-left: 5px;">-888次阅读</span>
                  </div>
                </div>
              </a>
            </div>
          </el-main>
        <!---this is the aside--->
        <el-aside style="margin-top: 4rem;margin-left: 5%;background-color: #f0f0f0">
          <div style="background-color: white;padding: 20px 20px">
            <span style="font-size: 20px;margin-left: 50px;">音乐家</span>
            <span>一个分享音乐的地方</span>
            <el-input placeholder="用户名"  class="aside-input"></el-input>
            <el-input placeholder="手机号" class="aside-input"></el-input>
            <el-input placeholder="密码" class="aside-input"></el-input>
            <el-button type="primary" style="width: 80%;margin-left: 5%;margin-top: 20px;">立即注册</el-button>
          </div>
          <div style="background-color: white;margin-top: 30px;padding: 20px 20px; ">
            <div style="border-bottom: 1px solid #f0f0f0">
              <span style="float: left">热门标签</span>
              <span style="float: right;color: #409EFF">查看全部</span>
              <div style="height: 30px;"></div>
            </div>
            <div style="margin-top: 20px;">
              <el-button type="info" plain>琴谱</el-button>
              <el-button type="info" plain>指弹中国</el-button>
              <el-button type="info" plain>我们的社区</el-button>
              <el-button type="info" plain>技术分析</el-button>
            </div>
            <div style="height: 30px;"></div>
          </div>
        </el-aside>
      </div>
      <footer>this is the footer</footer>
    </div>
    <!---注册弹窗---->
  </div>
</template>
<script>
import myheader from './head.vue'
import ElAside from '../../node_modules/element-ui/packages/aside/src/main.vue'
import ElMenu from '../../node_modules/element-ui/packages/menu/src/menu.vue'
import ElBreadcrumbItem from '../../node_modules/element-ui/packages/breadcrumb/src/breadcrumb-item.vue'
import ElButton from '../../node_modules/element-ui/packages/button/src/button.vue'
import ElInput from '../../node_modules/element-ui/packages/input/src/input.vue'
export default {
  components: {
    ElInput,
    ElButton,
    ElBreadcrumbItem,
    ElMenu,
    ElAside,
    'my-header': myheader
  },
  name: 'app',
  data () {
    return {
      currentDate: new Date(),
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ]
    }
  }
}
</script>
<style>
  #main{
    font-size: 12px;
    max-width: 960px;
    margin: auto;
    background-color: #f0f0f0;
  }
  #main-body{
    height: 1000px;
    margin-top: 1rem;
    display: flex;
  }
  .a-items{
    height: 40px;
    padding: 0 10px;
    background-color: tan;
    width: 100%;
  }
  .a-items-index{
    width: 100%;
    min-height: 5rem;
    border-bottom: 1px solid #f0f0f0;
    padding: 10px 15px;
  }
  .a-items-index-title{
    font-size: 1.2rem;
    color: #909090;
  }
  .a-items-index-a{
    cursor: pointer;
  }
  .a-items-index-a:hover{
    background-color: beige;
  }
  .aside-input{
    margin-top: 10px;
    width: 80%;
    margin-left: 5%
  }
</style>
