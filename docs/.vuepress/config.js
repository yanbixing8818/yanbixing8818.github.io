module.exports = {
    title: '小闫要瘦的博客',
    description: 'XXX',
    // base: '/blob/',
    theme: 'reco',
    themeConfig: {
      nav: [
        { text: "首页", link: "/" },
        {
          text: "小闫要瘦的博客",
          items: [
            { text: "CSDC主页", link: "https://blog.csdn.net/yanbixing123" },
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
      ]
    }
  }
