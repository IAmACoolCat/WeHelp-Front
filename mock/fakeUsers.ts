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
    access: 'user',
    password: '123456',
  }
];

/**
 * It follows the UserDetail in ./data.d
 */
const mock_users_detail = [
  {
    username: 'yanzhe',
    userid: '1',

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
    notifyCount: 12,
    unreadCount: 11,
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
  },
  {
    username: 'meixi',
    name: '梅西',
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
    notifyCount: 12,
    unreadCount: 11,
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
  }
];

export {
  mock_users_info as FakeUsersInfo, 
  mock_users_detail as FakeUsersDetail
};