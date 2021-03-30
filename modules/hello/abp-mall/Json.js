const userInfo = {
    status: 1,
    data: {
        id: 1,
        mobile: 18888888888,
        nickname: '校长',
        portrait: 'http://117.50.40.186/static/孙允珠/1/001.png'
    },
    msg: '提示'
}
/* 首页轮播图 */
const carouselList = [{
    src: "http://117.50.40.186/static/1.jpg",
    background: "rgb(203, 87, 60)",
},
{
    src: "http://117.50.40.186/static/孙允珠/1/001.png",
    background: "rgb(205, 215, 218)",
},
{
    src: "http://117.50.40.186/static/孙允珠/1/002.png",
    background: "rgb(183, 73, 69)",
}
]
/* 商品列表 */
const goodsList = [{
    image: "http://117.50.40.186/static/孙允珠/1/003.png",
    image2: "http://117.50.40.186/static/孙允珠/1/004.png",
    image3: "http://117.50.40.186/static/孙允珠/1/005.png",
    title: "古黛妃 短袖t恤女夏装2019新款韩版宽松",
    price: 179,
    sales: 61,
},
{
    image: "http://117.50.40.186/static/孙允珠/1/006.png",
    image2: "http://117.50.40.186/static/孙允珠/1/007.png",
    image3: "http://117.50.40.186/static/孙允珠/1/008.png",
    title: "潘歌针织连衣裙",
    price: 78,
    sales: 16,
},
{
    image: "http://117.50.40.186/static/孙允珠/3/005.png",
    image2: "http://117.50.40.186/static/孙允珠/3/005.png",
    image3: "http://117.50.40.186/static/孙允珠/3/005.png",
    title: "巧谷2019春夏季新品新款女装",
    price: 108.8,
    sales: 5,
}, {
    image: "http://117.50.40.186/static/孙允珠/1/009.png",
    image2: "http://117.50.40.186/static/孙允珠/1/010.png",
    image3: "http://117.50.40.186/static/孙允珠/1/011.png",
    title: "私萱连衣裙",
    price: 265,
    sales: 88,
}, {
    image: "http://117.50.40.186/static/孙允珠/1/012.png",
    image2: "http://117.50.40.186/static/孙允珠/1/013.png",
    image3: "http://117.50.40.186/static/孙允珠/1/014.png",
    title: "娇诗茹-原宿风学生潮韩版春夏短",
    price: 422,
    sales: 137,
}, {
    image: "http://117.50.40.186/static/孙允珠/2/001.png",
    image2: "http://117.50.40.186/static/孙允珠/2/002.png",
    image3: "http://117.50.40.186/static/孙允珠/2/003.png",
    title: "古黛妃 短袖t恤女夏装2019新款韩版宽松",
    price: 179,
    sales: 95,
},
]

/* 购物车 */
const cartList = [{
    id: 1,
    image: 'https://www.tallper.net/api/app/image/6',
    attr_val: '你好，校长',
    stock: 15,
    title: 'OVBE 长袖风衣',
    price: 278.00,
    number: 1
},
{
    id: 3,
    image: 'http://117.50.40.186/static/孙允珠/2/005.png',
    attr_val: '激光导航 扫拖一体',
    stock: 3,
    title: '科沃斯 Ecovacs 扫地机器人',
    price: 1348.00,
    number: 5
},
{
    id: 4,
    image: 'http://117.50.40.186/static/孙允珠/2/006.png',
    attr_val: 'XL',
    stock: 55,
    title: '朵绒菲小西装',
    price: 175.88,
    number: 1
},
{
    id: 5,
    image: 'http://117.50.40.186/static/孙允珠/1/008.png',
    attr_val: '520 #粉红色',
    stock: 15,
    title: '迪奥（Dior）烈艳唇膏',
    price: 1089.00,
    number: 1
},
{
    id: 6,
    image: 'http://117.50.40.186/static/孙允珠/2/006.png',
    attr_val: '樱花味润手霜 30ml',
    stock: 15,
    title: "欧舒丹（L'OCCITANE）乳木果",
    price: 128,
    number: 1
},
{
    id: 7,
    image: 'http://117.50.40.186/static/孙允珠/1/008.png',
    attr_val: '特级 12个',
    stock: 7,
    title: '新疆阿克苏苹果 特级',
    price: 58.8,
    number: 10
},
{
    id: 8,
    image: 'http://117.50.40.186/static/孙允珠/2/009.png',
    attr_val: '激光导航 扫拖一体',
    stock: 15,
    title: '科沃斯 Ecovacs 扫地机器人',
    price: 1348.00,
    number: 1
},
{
    id: 9,
    image: 'http://117.50.40.186/static/孙允珠/2/010.png',
    attr_val: 'XL',
    stock: 55,
    title: '朵绒菲小西装',
    price: 175.88,
    number: 1
},
{
    id: 10,
    image: 'http://117.50.40.186/static/孙允珠/1/008.png',
    attr_val: '520 #粉红色',
    stock: 15,
    title: '迪奥（Dior）烈艳唇膏',
    price: 1089.00,
    number: 1
},
{
    id: 11,
    image: 'http://117.50.40.186/static/孙允珠/2/011.png',
    attr_val: '樱花味润手霜 30ml',
    stock: 15,
    title: "欧舒丹（L'OCCITANE）乳木果",
    price: 128,
    number: 1
},
{
    id: 12,
    image: 'http://117.50.40.186/static/孙允珠/1/008.png',
    attr_val: '特级 12个',
    stock: 7,
    title: '新疆阿克苏苹果 特级',
    price: 58.8,
    number: 10
},
{
    id: 13,
    image: 'http://117.50.40.186/static/孙允珠/1/008.png',
    attr_val: '春装款/m',
    stock: 15,
    title: '女装2019春秋新款',
    price: 420.00,
    number: 1
}
];
//详情展示页面
const detailData = {
    title: '纯种金毛幼犬活体有血统证书',
    title2: '拆家小能手 你值得拥有',
    favorite: true,
    imgList: [{
        src: 'http://117.50.40.186/static/孙允珠/2/016.png'
    },
    {
        src: 'http://117.50.40.186/static/孙允珠/2/012.png'
    },
    {
        src: 'http://117.50.40.186/static/孙允珠/2/013.png'
    },
    {
        src: 'http://117.50.40.186/static/孙允珠/2/014.png'
    },
    ],
    episodeList: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24
    ],
    guessList: [{
        src: 'http://117.50.40.186/static/孙允珠/2/020.png',
        title: '猫眼指甲油',
        title2: '独树一帜的免照灯猫眼指甲'
    },
    {
        src: 'http://117.50.40.186/static/孙允珠/3/005.png',
        title: '创意屋',
        title2: '创意屋形上下双层高低床'
    },
    {
        src: 'http://117.50.40.186/static/孙允珠/3/001.png',
        title: 'MissCandy 指甲油',
        title2: '十分适合喜欢素净的妹纸，尽显淡雅的气质'
    },
    {
        src: 'http://117.50.40.186/static/孙允珠/3/002.png',
        title: 'RMK 2017星空海蓝唇釉',
        title2: '唇釉质地，上唇后很滋润。少女也会心动的蓝色，透明液体形状。'
    }
    ],
    evaList: [{
        src: 'http://117.50.40.186/static/孙允珠/3/007.png',
        nickname: 'Ranth Allngal',
        time: '09-20 12:54',
        zan: '54',
        content: '评论不要太苛刻，不管什么产品都会有瑕疵，'
    },
    {
        src: 'http://117.50.40.186/static/孙允珠/3/008.png',
        nickname: 'Ranth Allngal',
        time: '09-20 12:54',
        zan: '54',
        content: '楼上说的好有道理。'
    }
    ]
}
const shareList = [{
    type: 1,
    icon: '/static/temp/share_wechat.png',
    text: '微信好友'
},
{
    type: 2,
    icon: '/static/temp/share_moment.png',
    text: '朋友圈'
},
{
    type: 3,
    icon: '/static/temp/share_qq.png',
    text: 'QQ好友'
},
{
    type: 4,
    icon: '/static/temp/share_qqzone.png',
    text: 'QQ空间'
}
]
const lazyLoadList = [{
    src: 'http://117.50.40.186/static/孙允珠/3/005.png'
},
{
    src: 'http://117.50.40.186/static/孙允珠/3/005.png'
},
{
    src: 'http://117.50.40.186/static/孙允珠/2/005.png'
},
{
    src: 'http://117.50.40.186/static/孙允珠/3/005.png'
},
{
    src: 'http://117.50.40.186/static/孙允珠/3/005.png'
},
{
    src: 'http://117.50.40.186/static/孙允珠/3/005.png'
},
{
    src: 'http://117.50.40.186/static/孙允珠/3/005.png'
},
{
    src: 'http://117.50.40.186/static/孙允珠/3/005.png'
},
{
    src: 'http://117.50.40.186/static/孙允珠/3/005.png'
},
{
    src: 'http://117.50.40.186/static/孙允珠/3/005.png'
},
{
    src: 'http://117.50.40.186/static/孙允珠/3/005.png'
},
{
    src: 'http://117.50.40.186/static/孙允珠/3/005.png'
},
{
    src: 'http://117.50.40.186/static/孙允珠/4/005.png'
},
{
    src: 'http://117.50.40.186/static/孙允珠/4/005.png'
},
{
    src: 'http://117.50.40.186/static/孙允珠/4/005.png'
},
{
    src: 'http://117.50.40.186/static/孙允珠/4/005.png'
},
{
    src: 'http://117.50.40.186/static/孙允珠/5/005.png'
},
{
    src: 'http://117.50.40.186/static/孙允珠/3/005.png'
},
{
    src: 'http://117.50.40.186/static/孙允珠/3/005.png'
},
{
    src: 'http://117.50.40.186/static/孙允珠/3/005.png'
},
]

const orderList = [{
    time: '2019-04-06 11:37',
    state: 1,
    goodsList: [{
        image: 'http://117.50.40.186/static/孙允珠/1/008.png',
    },
    {
        image: 'http://117.50.40.186/static/孙允珠/3/005.png',
    },
    {
        image: 'http://117.50.40.186/static/孙允珠/3/005.png',
    },
    {
        image: 'http://117.50.40.186/static/孙允珠/3/005.png',
    },
    {
        image: 'http://117.50.40.186/static/孙允珠/3/005.png',
    },
    {
        image: 'http://117.50.40.186/static/孙允珠/3/005.png',
    },
    {
        image: 'http://117.50.40.186/static/孙允珠/3/005.png',
    }
    ]
},
{
    time: '2019-04-06 11:37',
    state: 9,
    goodsList: [{
        title: '古黛妃 短袖t恤女 春夏装2019新款韩版宽松',
        price: 179.5,
        image: 'http://117.50.40.186/static/孙允珠/3/005.png',
        number: 1,
        attr: '珊瑚粉 M'
    }]
},
{
    time: '2019-04-06 11:37',
    state: 1,
    goodsList: [{
        image: 'http://117.50.40.186/static/孙允珠/3/005.png',
    },
    {
        image: 'http://117.50.40.186/static/孙允珠/3/005.png',
    },
    {
        image: 'http://117.50.40.186/static/孙允珠/3/005.png',
    },
    ]
},
{
    time: '2019-04-06 11:37',
    state: 1,
    goodsList: [{
        title: '回力女鞋高帮帆布鞋女学生韩版鞋子女2019潮鞋女鞋新款春季板鞋女',
        price: 69,
        image: 'http://117.50.40.186/static/孙允珠/3/005.png',
        number: 1,
        attr: '白色-高帮 39'
    }]
},
{
    time: '2019-04-06 11:37',
    state: 1,
    goodsList: [{
        image: 'http://117.50.40.186/static/孙允珠/3/005.png',
    },
    {
        image: 'http://117.50.40.186/static/孙允珠/3/005.png',
    },
    ]
},
{
    time: '2019-04-06 11:37',
    state: 1,
    goodsList: [{
        image: 'http://117.50.40.186/static/孙允珠/3/005.png',
    },
    {
        image: 'http://117.50.40.186/static/孙允珠/3/005.png',
    },
    {
        image: 'http://117.50.40.186/static/孙允珠/3/005.png',
    },
    ]
}

]
const cateList = [{
    id: 1,
    name: '手机数码'
},
{
    id: 2,
    name: '礼品鲜花'
},
{
    id: 3,
    name: '男装女装'
},
{
    id: 4,
    name: '母婴用品'
},
{
    id: 5,
    pid: 1,
    name: '手机通讯'
},
{
    id: 6,
    pid: 1,
    name: '运营商'
},
{
    id: 8,
    pid: 5,
    name: '全面屏手机',
    picture: '/static/temp/cate2.jpg'
},
{
    id: 9,
    pid: 5,
    name: '游戏手机',
    picture: '/static/temp/cate3.jpg'
},
{
    id: 10,
    pid: 5,
    name: '老人机',
    picture: '/static/temp/cate1.jpg'
},
{
    id: 11,
    pid: 5,
    name: '拍照手机',
    picture: '/static/temp/cate4.jpg'
},
{
    id: 12,
    pid: 5,
    name: '女性手机',
    picture: '/static/temp/cate5.jpg'
},
{
    id: 14,
    pid: 6,
    name: '合约机',
    picture: '/static/temp/cate1.jpg'
},
{
    id: 15,
    pid: 6,
    name: '选好卡',
    picture: '/static/temp/cate4.jpg'
},
{
    id: 16,
    pid: 6,
    name: '办套餐',
    picture: '/static/temp/cate5.jpg'
},
{
    id: 17,
    pid: 2,
    name: '礼品',
},
{
    id: 18,
    pid: 2,
    name: '鲜花',
},
{
    id: 19,
    pid: 17,
    name: '公益摆件',
    picture: '/static/temp/cate7.jpg'
},
{
    id: 20,
    pid: 17,
    name: '创意礼品',
    picture: '/static/temp/cate8.jpg'
},
{
    id: 21,
    pid: 18,
    name: '鲜花',
    picture: '/static/temp/cate9.jpg'
},
{
    id: 22,
    pid: 18,
    name: '每周一花',
    picture: '/static/temp/cate10.jpg'
},
{
    id: 23,
    pid: 18,
    name: '卡通花束',
    picture: '/static/temp/cate11.jpg'
},
{
    id: 24,
    pid: 18,
    name: '永生花',
    picture: '/static/temp/cate12.jpg'
},
{
    id: 25,
    pid: 3,
    name: '男装'
},
{
    id: 26,
    pid: 3,
    name: '女装'
},
{
    id: 27,
    pid: 25,
    name: '男士T恤',
    picture: '/static/temp/cate13.jpg'
},
{
    id: 28,
    pid: 25,
    name: '男士外套',
    picture: '/static/temp/cate14.jpg'
},
{
    id: 29,
    pid: 26,
    name: '裙装',
    picture: '/static/temp/cate15.jpg'
},
{
    id: 30,
    pid: 26,
    name: 'T恤',
    picture: '/static/temp/cate16.jpg'
},
{
    id: 31,
    pid: 26,
    name: '上装',
    picture: '/static/temp/cate15.jpg'
},
{
    id: 32,
    pid: 26,
    name: '下装',
    picture: '/static/temp/cate16.jpg'
},
{
    id: 33,
    pid: 4,
    name: '奶粉',
},
{
    id: 34,
    pid: 4,
    name: '营养辅食',
},
{
    id: 35,
    pid: 4,
    name: '童装',
},
{
    id: 39,
    pid: 4,
    name: '喂养用品',
},
{
    id: 36,
    pid: 33,
    name: '有机奶粉',
    picture: '/static/temp/cate17.jpg'
},
{
    id: 37,
    pid: 34,
    name: '果泥/果汁',
    picture: '/static/temp/cate18.jpg'
},
{
    id: 39,
    pid: 34,
    name: '面条/粥',
    picture: '/static/temp/cate20.jpg'
},
{
    id: 42,
    pid: 35,
    name: '婴童衣橱',
    picture: '/static/temp/cate19.jpg'
},
{
    id: 43,
    pid: 39,
    name: '吸奶器',
    picture: '/static/temp/cate21.jpg'
},
{
    id: 44,
    pid: 39,
    name: '儿童餐具',
    picture: '/static/temp/cate22.jpg'
},
{
    id: 45,
    pid: 39,
    name: '牙胶安抚',
    picture: '/static/temp/cate23.jpg'
},
{
    id: 46,
    pid: 39,
    name: '围兜',
    picture: '/static/temp/cate24.jpg'
},
]

export default {
    carouselList,
    cartList,
    detailData,
    lazyLoadList,
    userInfo,
    shareList,
    goodsList,
    orderList,
    cateList
}
