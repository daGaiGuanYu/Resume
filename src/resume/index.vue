<template lang="pug">
  .resume-container
    resume-content
</template>

<script>
import ResumeContent from './content.vue'

export default {
  components: { ResumeContent }
}
</script>

<style lang="stylus">
@import '../common/inheritance'

.resume-container
  margin 0 auto
  width 800px
  background: #fff

</style>