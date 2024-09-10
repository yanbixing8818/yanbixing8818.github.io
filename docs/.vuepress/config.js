module.exports = {
    title: '小闫要瘦的博客',
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
          text: "小闫要瘦的博客",
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
      subSidebar: 'auto'
    }
  }
