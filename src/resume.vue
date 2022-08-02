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
      <span>
        <a href="https://www.zhihu.com/people/wei-82-9">知乎</a>
      </span>
      <span>
        <a href="https://github.com/daGaiGuanYu">Github</a>
      </span>
      <span>17621968703</span>
    </div>
  </section>
  <section>
    <h4>期望职位</h4>
    <div class="items">
      <span>web 全栈</span>
      <span>前端开发</span>
      <span>Node.js 后端</span>
    </div>
    <div class="items">
      <span>上海</span>
      <span>20 ~ 23k</span>
    </div>
  </section>
  <section>
    <h4>主要技术</h4>
    <ul>
      <li>精通 js，熟悉 js 周边技术及 ts，热爱开发</li>
      <li>深耕 web 全栈开发（vue + nodejs）</li>
      <li>熟悉前端开发工具链（如 webpack）</li>
      <li>熟悉各类小程序开发</li>
    </ul>
  </section>
  <section>
    <h4>其他技能</h4>
    <ul>
      <li>熟悉 vscode 插件开发</li>
      <li>熟悉 docker、nginx 等工具的日常使用</li>
      <li>有 Serverless 产品使用经验</li>
      <li>编程基础过得去，Leecode 中等题一般都能做</li>
      <li>英文阅读无障碍，口语欠佳，CET Band6</li>
    </ul>
    <p>
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
      <p><b>特色</b> 在于使用了极少的依赖。除了必要的各主流数据库的驱动外，使用 Knex.js 统一各数据库的大多数操作、Vue.js 绘制 UI（仅有 Vue.js 的核心库）。引入其他库，将使插件体积极具膨胀，因此绝大多数操作均使用最原始的 API，以保持超轻量级和高运行效率。</p>
      <p><b>难点一</b> 在于统一各主流数据库的操作，目前支持 MySQL、PostgresSQL、MSSQL、Sqlite3 以及兼容以上“标准”的数据库。比如 MariaDB、TiDB、stoneDB 等均属于 MySQL 系，可以使用 MySQL 驱动连接；CockroachDB 等可以使用 PostgreSQL 的驱动；Azure Data 等可以使用 MSSQL 驱动。（OracleDB 的支持正在开发中。）</p>
      <p>不同的数据库虽然都支持 SQL 语句，但各家 SQL 语法不一致，可以通过 Knex.js 磨平，这一点非常简单。而除表数据的增删改查以外，其他操作几乎全不一样，需要挨个适配。比如 PostgreSQL 和 MSSQL 的架构是：Server -> Database -> Schema -> Table，而 MySQL 则合并了 Database 与 Schema，Sqlite 则合并了 Server 与 Database 与 Schema（一个 Sqlite3 Server，仅能管理一个 Database、一个 Schema）。</p>
      <p><b>难点二</b> vscode 没有相应成熟的开发框架，在架构方面是从零开始。皮皮仔的最底层是 Model 层，目前用于管理连接数据和版本信息（以便将来做数据迁移）。上层是 Service 层，实现各业务。再上层分别是 Command（接收用户命令）、Treeview（数据库浏览器）、Webview（主要操作界面）。</p>
      <ul>
        <li><a href="https://github.com/ppz-pro/ppz.vscode">项目地址</a></li>
        <li><a href="https://gitee.com/ppz-pro/ppz.vscode/wikis/pages">一些截图</a></li>
      </ul>
      <p class="comment">第一个版本发布于 6 月初，初期下载量极少。截止目前（2022-08-01 00:16），皮皮仔共有 923 的装机量（下载量 - 卸载量）。最近经多位素未谋面的朋友推荐，特别是<a href="https://www.ruanyifeng.com/blog/2022/07/weekly-issue-216.html">阮一峰老师在周刊里推荐</a>后，装机量开始有起色。目前<b>微软商店首页正在推荐</b>（“Trending this week”栏）。</p>
    </section>
    <section>
      <h5>
        智能枪弹柜管理系统
        <span>2016.6 ~ 至今</span>
      </h5>
      <p>全名“比茵沃智能枪弹柜管理系统”，这是一个面向政府的，高定制化的业务系统。主要用于管理警局、法院、押运组织的枪支弹药。</p>
      <ul>
        <li>人脸、指纹识别警员身份，匹配枪支弹药</li>
        <li>取、还日志</li>
        <li>本地、远程审批</li>
      </ul>
      <p><b>我的主要工作</b> 在于维护系统的“操作端”和“数据服务端”部分，并添加新功能。期间主导过一次前端项目重构，用 Vue.js 替换原来的 jQuery + Bootstrap。</p>
      <p><b>难点</b> 在于实现组织内部非常复杂的取枪流程和特殊的业务场景。比如“胁迫指纹”是指，取枪警员选定特定的手指，当使用这个手指验证身份时，会触发无声报警，报警信息直达各级指定的负责人。验证后，要发出“假的 bug”，但为保障警员生命安全，则要通过其他途径，允许警员把物品交给歹徒。主要用于机构遭遇入侵，被胁迫取枪。业务较为敏感，与公司签有保密协议，不方便多说。</p>
      <ul>
        <li>Vue.js</li>
        <li>Express.js</li>
        <li>Waterline.js</li>
      </ul>
      <p class="comment">柜机已出货 3000+ 台，除遍布整个上海的警局和法院，其他地区也有一定的业务量。</p>
    </section>
    <section>
      <h5>
        数据可视化平台
        <span>2018.10 ~ 2019.11</span>
      </h5>
      <p>全名“大蓝洞数据可视化平台”，一个数据可视化项目。简单来说，就是对数据进行筛选、聚合、提取之后，用图表的形式展示。</p>
      <ul>
        <li>支持配置数据源结构</li>
        <li>折线图、雷达图、盒须图、矩形阵图等</li>
        <li>制作数据可视化大屏</li>
        <li>支持手动拖拽、缩放、排列图表</li>
      </ul>
      <p>我的主要工作在于图表绘制、数据结构适配以及后期整体的维护工作。</p>
      <ul>
        <li>ECharts</li>
        <li>Vue.js</li>
      </ul>
    </section>
  </section>
  <section>
    <h4>工作经历</h4>
    <section>
      <h5>
        上海比茵沃汽车电子有限公司
      </h5>
      <ul>
        <li>2020.9 ~ 2022.8</li>
        <li>职位：全栈开发工程师</li>
        <li>主要项目：智能枪弹柜管理系统</li>
      </ul>
    </section>
    <section>
      <h5>
        大蓝洞（南京）科技有限公司
      </h5>
      <ul>
        <li>2018.7 ~ 2019.11</li>
        <li>职位：前端开发工程师</li>
        <li>主要项目：大蓝洞数据可视化平台</li>
      </ul>
      <p>除“大蓝洞”数据可视化平台以外，还参与过公司老项目的维护。当时工作内容仅在前端，期间开始学习 Node.js，为全栈开发做准备。</p>
    </section>
  </section>
  <section>
    <h4>教育经历</h4>
    <ul>
      <li>辽宁科技大学</li>
      <li>2014.9 ~ 2018.6</li>
      <li>获得两次二等奖学金</li>
      <li>参与学院辩论赛，获得亚军</li>
      <li>期间通过英语四级（534分）</li>
      <li>期间通过英语六级（543分）</li>
      <li>爱运动，曾参加校运动会 5000 米项目</li>
    </ul>
  </section>
</template>
