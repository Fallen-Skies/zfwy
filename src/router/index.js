import Vue from 'vue'
import Router from 'vue-router'
import rmgz from '@/components/shouye/rmgz'
import yqlj from '@/components/shouye/yqlj'
import zhuye from '@/components/shouye/zhuye'
import esfshouye from '@/components/esf/esfshouye'
import esfxiangqing from '@/components/esf/esfxiangqing'
import denglu from '@/components/wode/denglu'
import yidenglu from '@/components/wode/yidenglu'
import xiaoqu from '@/components/wode/xiaoqu'
import ptdl from '@/components/dlzc/ptdl'
import pt from '@/components/dlzc/pt'
import yzmdl from '@/components/dlzc/yzmdl'
import zhaohui from '@/components/dlzc/zhaohui'
import zhuce from '@/components/dlzc/zhuce'
import quyu from '@/components/esf/quyu'
import qy from '@/components/esf/qy'
import dt from '@/components/esf/dt'
import jiage from '@/components/esf/jiage'
import fangxing from '@/components/esf/fangxing'
import gengduo from '@/components/esf/gengduo'
import zufang from '@/components/zf/zufang'
import zufangxq from '@/components/zf/zufangxq'




Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/zhuye'},
    {
    	path:'/zhuye',component:zhuye,
    	children:[
    	{path:'/',redirect:'/rmgz'},
    	 {path:'/rmgz',component:rmgz},
    	{path:'/yqlj',component:yqlj},
    	]
    },
    {path:'/esfshouye',component:esfshouye,
      children:[
      {
      	path:'/quyu',component:quyu,
       children:[
        {path:'/',redirect:'/qy'},
        {path:'/qy',component:qy},
        {path:'/dt',component:dt},
       ]
      },
      {path:'/jiage',component:jiage},
      {path:'/fangxing',component:fangxing},
      {path:'/gengduo',component:gengduo},
      ]
    },
    {path:'/esfxiangqing',component:esfxiangqing},
    {path:'/denglu',component:denglu},
    {path:'/yidenglu',component:yidenglu},
    {path:'/xiaoqu',component:xiaoqu},
    {
    	path:'/ptdl',component:ptdl,
    	children:[
    	{path:'/',redirect:'/pt'},
    	 {path:'/pt',component:pt},
    	 {path:'/yzmdl',component:yzmdl},
    	],
    },
    {path:'/zhaohui',component:zhaohui},
    {path:'/zhuce',component:zhuce},
    {path:'/zufang',component:zufang},
    {path:'/zufangxq',component:zufangxq},
//  {path:'/esfshouye',component:esfshouye},
  ]
})
