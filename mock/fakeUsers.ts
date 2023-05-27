// fake users

/**
 * it follows the UserInfo in ./data.d
 */
const mock_users_info = [
  {
    username: 'yanzhe',
    userid: '1',
    access: 'admin',
    password: '123456',
  },
  {
    username: 'meixi',
    userid: '2',
    access: 'volunteer',
    password: '123456',
  },
  {
    username: 'xiaoxiao',
    userid: '3',
    access: 'resident',
    password: '123456',
  },
  {
    username: 'zhang',
    userid: '4',
    access: 'resident',
    password: '123456',
  },

];

/**
 * It follows the UserDetail in ./data.d
 */
const mock_users_detail = [
  {
    username: 'yanzhe',
    userid: '1',
    access: 'admin',

    name: '王彦哲',
    avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    email: 'yanzhe.wang@wehelp.com',
    signature: '海纳百川，有容乃大',
    title: '社区管理员',
    group: '社区管理部',
    tags: [
      {
        key: '0',
        label: '很有想法的',
      },
      {
        key: '1',
        label: '热心助人',
      },
      {
        key: '2',
        label: '梅西粉',
      },
    ],
    notifyCount: 6,
    unreadCount: 6,
    country: 'China',
    geographic: {
      province: {
        label: '上海',
        key: '20100',
      },
      city: {
        label: '浦东',
        key: '201318',
      },
    },
    address: '文馨雅苑 77 号',
    phone: '021-80881240',
    weekTasks: '1个任务',
    averageTaskTime: '32分钟',
  },
  {
    username: 'meixi',
    name: '梅西',
    access: 'volunteer',
    avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    userid: '2',
    email: 'meixi@wehelp.com',
    signature: '梅西是个好同志',
    title: '社区志愿者',
    group: '社区足球组',
    tags: [
      {
        key: '0',
        label: '世界杯冠军',
      },
      {
        key: '1',
        label: '个不高但速度快',
      },
      {
        key: '2',
        label: 'I love China',
      },
    ],
    notifyCount: 5,
    unreadCount: 5,
    country: '阿根廷',
    geographic: {
      province: {
        label: '布宜诺斯艾利斯',
        key: '50100',
      },
      city: {
        label: '桑巴',
        key: '501318',
      },
    },
    address: '日不落大道 77 号',
    phone: '021-80881240',
    weekTasks: '1个任务',
    averageTaskTime: '28分钟',
  },
  {
    username: 'xiaoxiao',
    name: '付小小',
    access: 'volunteer',
    avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    userid: '3',
    email: 'xiaoxiao@wehelp.com',
    signature: '付小小就是付小小',
    title: '社区志愿者',
    group: '文艺剧社',
    tags: [
      {
        key: '0',
        label: '女汉子',
      },
      {
        key: '1',
        label: '知前后五百年但是不知氦氖氩',
      },
      {
        key: '3',
        label: '我爱学习天天向上',
      },
    ],
    notifyCount: 4,
    unreadCount: 4,
    country: '中国',
    geographic: {
      province: {
        label: '杭州',
        key: '50120',
      },
      city: {
        label: '杭州',
        key: '901318',
      },
    },
    address: '雷锋晚照巷',
    phone: '021-80881240',
    weekTasks: '1个任务',
    averageTaskTime: '40分钟',
  },
  {
    username: 'zhang',
    name: '张老师',
    access: 'resident',
    avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    userid: '4',
    email: 'zhang@wehelp.com',
    signature: '退而不休',
    title: '退休教师',
    group: '老年活动室',
    tags: [
      {
        key: '0',
        label: '退而不休',
      },
      {
        key: '1',
        label: '发挥余热',
      },
    ],
    notifyCount: 4,
    unreadCount: 4,
    country: '中国',
    geographic: {
      province: {
        label: '上海',
        key: '50120',
      },
      city: {
        label: '浦东',
        key: '901318',
      },
    },
    address: '人民路112号',
    phone: '021-80881240',
    weekTasks: '2个任务',
  },
];

export { mock_users_info as FakeUsersInfo, mock_users_detail as FakeUsersDetail };
