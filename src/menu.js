module.exports = [
    {
        id: "sysInfo", icon: "user", name: "系统信息", route: "/"
    },
    //文章管理
    {
        id: "manage", icon: "user", name: "文章管理", children:[
            {
                id: "manage_01", pid:"manage", name: "文章列表", route: "/articleList"
            },
        ]
    }, 
    //主页管理
    {
        id: "dashboard", icon: "user", name: "主页管理", children:[
            {
                id: "dashboard_01", pid:"dashboard",name: "轮播图管理", route: "/bannerManage"
            },
        ]
    }, 
    //用户管理
    {
        id: "userManage", icon: "user", name: "用户管理", children:[
            {
                id: "userManage_01",pid:"userManage", name: "站内成员", route: "/member"
            },
        ]
    },
]