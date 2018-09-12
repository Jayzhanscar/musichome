<template>
   <el-header class="header">
     <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"  style="margin-left: 16rem" >
       <el-menu-item index="1">首页</el-menu-item>
       <el-menu-item index="2">活动</el-menu-item>
       <el-menu-item index="10" style="margin-left: 5rem"><el-input placeholder="请输入搜索内容" v-model="search"></el-input></el-menu-item>
       <el-menu-item index="3" style="margin-left: 20rem">写文章</el-menu-item>
       <el-menu-item index="4" @click="this.$store.u=true">登录</el-menu-item>
       <el-menu-item index="5">注册</el-menu-item>
       <el-submenu index="2">
         <template slot="title">我的账号</template>
         <el-menu-item index="2-1">选项1</el-menu-item>
         <el-menu-item index="2-2">选项2</el-menu-item>
         <el-menu-item index="2-3">选项3</el-menu-item>
         <el-submenu index="2-4">
           <template slot="title">选项4</template>
           <el-menu-item index="2-4-1">选项1</el-menu-item>
           <el-menu-item index="2-4-2">选项2</el-menu-item>
           <el-menu-item index="2-4-3">选项3</el-menu-item>
         </el-submenu>
       </el-submenu>
     </el-menu>
   </el-header>
</template>
<style>
  .header{
    height: 3.7rem;
    display: flex;
    background-color: white;
    position:fixed;
    top:0;
    width: 100%;
    line-height: 3.7rem;
    z-index: 100;
  }
  .header-url{
    margin: 0;
    display: flex;
    width: 100%;
    list-style: none;
    font-size: Medium;
    color:#71777c;
  }
  .header-url >li{
    margin-left: 2.5rem;
    cursor: pointer;
  }
  .header-url >li:hover{
    color: cornflowerblue;
  }
</style>
<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios

export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      search: ''
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    sub () {
      this.$ajax({
        method: 'post',
        url: '/user',
        data: {
          name: 'wise',
          info: 'wrong'
        }
      })
    }
  }
}
</script>
