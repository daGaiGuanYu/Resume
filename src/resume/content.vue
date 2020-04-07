<template lang="pug">
  .resume-content
    .person
      .txt
        h1.name 韦现法
        .detail
          div 26岁
          div 男
          div 本科
          div 18年毕业
        .detail
          div 南京、上海、杭州
          div 17621968703
        .detail
          div vue
          div 原生微信小程序
          div 原生 node
      img.photo(:src="photo")

    .developer

    .project

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
      div
        line-height: 1
        float: left
      div + div::before
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
</style>