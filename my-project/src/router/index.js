import Vue from 'vue'
import VueRouter from 'vue-router'
// const witDemo = () =>
//     import ('')

//使用Vue的插件
Vue.use(VueRouter)
export default new VueRouter({
    mode: 'history', // 去掉#号，为了好看
    routes: [{
            path: '/',
            name: 'witDemo',
            component: resolve => require(['@/components/tree.vue'], resolve),
            children: [{
                path: '/a',
                component: resolve => require(['@/components/card'], resolve)
            }]
        }

    ]
})