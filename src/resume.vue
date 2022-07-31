<template>
  <section class="overview">
    <img
      src="https://files20220620.oss-cn-shanghai.aliyuncs.com/other/me.jpg"
      title="韦现法的照片"
    >
    <h1 class="name">韦现法</h1>
    <div class="items">
      <span>1994.09 出生</span>
      <span>2018.07 毕业</span>
      <span>男</span>
    </div>
    <div class="items">
      <span>身体健康</span>
      <span>性格开朗</span>
      <span>容易沟通</span>
    </div>
    <div class="items">
      <span>上海</span>
      <span>17621968703</span>
      <span>
        <a href="https://github.com/daGaiGuanYu">Github</a>
      </span>
      <span>
        <a href="https://www.zhihu.com/people/wei-82-9">知乎</a>
      </span>
    </div>
  </section>
  <section>
    <h4>主要技术</h4>
    <ul>
      <li>精通 js，热爱技术</li>
      <li>深耕 web 全栈开发（vue + nodejs）</li>
      <li>熟悉前端开发工具链（如 webpack）</li>
      <li>熟悉各类小程序</li>
    </ul>
  </section>
  <section>
    <h4>其他技能</h4>
    <ul>
      <li>熟悉 vscode 插件开发</li>
      <li>熟悉 docker、nginx 等工具的日常使用</li>
      <li>编程基础过得去，Leecode 中等题一般都能做</li>
      <li>英文阅读无障碍，口语欠佳，CET Band6</li>
    </ul>
    <p class="comment">
      工作 4 年以来，一直混迹于小公司，没有“大项目”经验，实属惭愧，但掌握了一身杂七杂八的技能。
    </p>
  </section>
  <section>
    <h4>项目经历</h4>
    <section>
      <h5>
        PPZ.vscode
        <span>2022.3 ~ 至今</span>
      </h5>
      <p>中文名：<a href="https://github.com/ppz-pro/ppz.vscode">皮皮仔</a>。是一款 vscode 插件，提供关系型数据库的图形操作界面，在 Github 开源。目前由我一人开发、维护、部署。</p>
      <ul>
        <li>支持多种数据库</li>
        <li>连接管理</li>
        <li>数据管理</li>
        <li>数据或表结构导出</li>
        <li>SQL 终端</li>
        <li>全功能的数据搜索</li>
        <li>适配任何颜色模式</li>
      </ul>
      <p>技术方面，皮皮仔的特色在于，使用了极少的依赖，以保持超轻量级。除了连接各主流数据库的驱动外，使用 Knex.js 统一数据库的大多数操作。在数据操作页面使用 Vue.js 绘制 UI，仅有 Vue.js 的核心库，而没有任何组件库。</p>
      <p>第一个版本发布于 6 月初，初期下载量极少。截止目前（2022-08-01 00:16），皮皮仔共有 923 的装机量（下载量 - 卸载量）。最近经多位素未谋面的朋友推荐，特别是<a href="https://www.ruanyifeng.com/blog/2022/07/weekly-issue-216.html">阮一峰老师在周刊里推荐</a>后，装机量开始有起色。曾被微软商店首页推荐过。</p>
      <ul>
        <li><a href="https://github.com/ppz-pro/ppz.vscode">项目地址</a></li>
        <li><a href="https://gitee.com/ppz-pro/ppz.vscode/wikis/pages">一些截图</a></li>
      </ul>
    </section>
    <section>
      <h5>
        智能枪弹柜管理系统
        <span>2016.6 ~ 至今</span>
      </h5>
      <p>这是一个面向政府的，高定制化的业务系统。主要用于管理警局、法院、押运组织的枪支弹药。</p>
      <ul>
        <li>人脸、指纹识别警员身份，匹配枪支弹药</li>
        <li>取、还日志</li>
        <li>本地、远程审批</li>
      </ul>
      <p>业务较为敏感，不易透露。</p>
      <p>我的主要工作在于维护系统的“操作界面”和“后台数据”部分，并添加新功能。期间做过一次项目重构，用 Vue.js 替换原来的 jQuery + Bootstrap。</p>
      <ul>
        <li>Vue.js</li>
        <li>Express.js</li>
        <li>Waterline.js</li>
      </ul>
    </section>
  </section>
</template>
