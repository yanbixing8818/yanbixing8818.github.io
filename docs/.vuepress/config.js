// import plugins from "./config/plugins"  


module.exports = {
    title: '小闫要瘦自留地',
    description: 'XXX',
    // base: '/blob/',
    theme: 'reco',
    locales: {
      '/': {
        lang: 'zh-CN'
      }
    },
    themeConfig: {
      nav: [
        { text: "首页", link: "https://yanbixing8818.github.io/" },
        {
          text: "友商链接",
          items: [
            { text: "CSDN主页", link: "https://blog.csdn.net/yanbixing123" },
            { text: "Android MultiMedia框架完全解析", link: "https://blog.csdn.net/yanbixing123/category_9287346.html?spm=1001.2014.3001.5482" },
            { text: "GStreamer专栏", link: "https://blog.csdn.net/yanbixing123/category_9267111.html?spm=1001.2014.3001.5482" },
            { text: "i.MX6-IPU子系统", link: "https://blog.csdn.net/yanbixing123/category_9266606.html?spm=1001.2014.3001.5482" },
            { text: "Github", link: "https://github.com/yanbixing8818/blob" }
          ]
        }
      ],
      sidebar: [
        {
          title: "欢迎学习",
          path: "/",
          collapsable: false,  // 是否折叠
          children: [{ title: "博客简介", path: "/" }],
        },
        {
          title: "基础篇",
          path: "/handbook/1",
          collapsable: true,
          children: [
            { title: "第一篇", path: "/handbook/1" },
            { title: "第二篇", path: "/handbook/2" },
          ]
        } 
      ],
      subSidebar: 'auto',
    },
    plugins: [
      ['vuepress-plugin-code-copy', true],  //复制代码块的插件
      'reading-progress', //显示阅读进度条
      [ //光标效果的插件
        'cursor-effects', {
          size: 2, // size of the particle, default: 2
          shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
          zIndex: 999999999, // z-index property of the canvas, default: 999999999
        }
      ],
      [ //背景音乐插件
        '@vuepress-reco/vuepress-plugin-bgm-player',
        {
          audios: [
            {
              name: 'LOSER',
              artist: '米津玄師',
              url: 'https://www.ytmp3.cn/down/73654.mp3',
              cover: 'https://p1.music.126.net/qTSIZ27qiFvRoKj-P30BiA==/109951165895951287.jpg?param=200y200'
            }
          ] ,
          // 是否默认缩小
          autoShrink: false ,
          // 缩小时缩为哪种模式
          shrinkMode: 'float',
          // 悬浮窗样式
          floatStyle:{ bottom: '10px', 'z-index': '999999' }
        }
      ],
      [ //看板娘插件
        '@vuepress-reco/vuepress-plugin-kan-ban-niang',
        {
          theme: [ 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16', 'blackCat', 'whiteCat', 'haru1', 'haru2',]
        }
      ]
    ]
  }
