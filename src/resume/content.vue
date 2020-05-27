<template lang="pug">
  .resume-content
    .person
      .txt
        h1.name 韦现法
        .detail
          .item 26岁
          .item 男
          .item 本科
          .item 18年毕业
        .detail
          .item vue
          .item 原生微信小程序
          .item 原生 node
        .detail
          .item
            img(src="https://gitee.com/dggy/picpic/raw/master/position.png")
            span 上海
          .item
            img(src="https://gitee.com/dggy/picpic/raw/master/wx.png")
            span 17621968703
          .item
            img(src="https://gitee.com/dggy/picpic/raw/master/money.png")
            span 12k
          .item
            a(href="https://blog.csdn.net/csdn372301467") 博客
      img.photo(:src="photo")

    .developer
      .title 概况
      ul
        li 专注网站建设，熟悉前、后端开发及运维工作
        li 熟悉微信小程序原生开发
        li 英文良好
        li 好(hǎo)说话
    .developer
      .title 技能树
      ul
        li
          span 精通 javascript、
          span.css3 css3
        li vue 技术栈（ vue\vue-router\vuex\element-ui\iview ）
        li 前端流行的工具库（ echarts\axios\jQuery\... ）
        li 原生微信小程序开发
        li
          span 偏爱 node 原生 api 开发服务端程序，有自己开发的工具库&nbsp;
          a(href="https://github.com/daGaiGuanYu/chopstick") Chopstick
          span （文档未完善）
        li 熟练操作 docker、nginx
        li 有 Javaweb 开发经验（ SSM\SpringBoot ）
    
    .project

    a.source(href="https://github.com/daGaiGuanYu/Resume") 获取简历源码请点这里
</template>

<script>
import photo from '../common/me.jpg'

export default {
  data(){
    return { photo }
  }
}
</script>

<style lang="stylus">
@import '../common/inheritance'

.resume-content
  padding 50px
  box-shadow 0 0 10px #ccc

.person
  clearFloat()
  normalBorder(bottom)
  padding-bottom: 20px
  .txt
    float left
    width calc(100% - 160px)
    .name
      fontSize lg
      margin 0
      font-weight 300
    .detail
      margin: 20px 0
      clearFloat()
      .item
        line-height: 1
        float: left
        display: flex
        align-items: center
        img, span 
          display: block
        img
          width: 16px
          margin-right: 4px
      .item + .item::before
        float: left
        content: ''
        display: block
        width: 1px
        height: $fontSize
        background: #ddd
        margin: 0 30px
  .photo
    float left
    width 140px
    border-radius: 70px

.developer
  padding: 36px 0
  normalBorder(bottom)
  .title
    border-left: 3px solid $color
    line-height: 1
    padding-left: 10px
    font-weight: bold
    color: #888
  ul
    line-height: 2
    padding-left: 30px
    margin: 20px 0 0

.source
  text-align: right
  color: #ccc
  fontSize: sm
  display: block
  transform: translate(0, 50%)
  &:hover
    color: #333
    opacity: 1
a
  text-decoration: none
  color: $color
  transition: all 0.3s
  &:hover
    opacity: 0.6

@keyframes go
  0%, 50%, 100%
    font-weight: 1000
    color: red
  50%
    transform: scale(2, 2)

.css3
  display: inline-block
  cursor: pointer
.css3:hover
  animation: go .3s infinite
</style>