import { Request, Response } from 'express';
import type { BasicListItemDataType } from 'mock/data';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const titles = ['任务1', '任务2', '任务3', '任务4', '任务5', '任务6', '任务7', '任务8'];
const statuses = ['done', 'done', 'wip', 'wip', 'exception', 'done', 'wip', 'exception'];
const percents = [100, 100, 40, 98, 19, 100, 44, 46];
const avatars = [
  'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png', // Alipay
  'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png', // Angular
  'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png', // Ant Design
  'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png', // Ant Design Pro
  'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png', // Bootstrap
  'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png', // React
  'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png', // Vue
  'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png', // Webpack
];

const covers = [
  'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
  'https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png',
  'https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png',
  'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
];
const desc = [
  '任务1：完成80以上老人的信息统计调查',
  '任务2：小区流浪猫信息数据统计',
  '任务3：生命就像一盒巧克力，结果往往出人意料',
  '任务4：城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
  '任务5：那时候我只会想自己想要什么，从不想自己拥有什么',
  '任务6：那时候我只会想自己想要什么，从不想自己拥有什么',
  '任务7：那时候我只会想自己想要什么，从不想自己拥有什么',
  '任务8：那时候我只会想自己想要什么，从不想自己拥有什么',
];

const user = [
  '付小小',
  '梅西',
  '梅西',
  '付小小',
  '付小小',
  '王彦哲',
  '王彦哲',
  '王彦哲',
  '梅西',
  '付小小',
];

const usernames = [
  'xiaoxiao',
  'meixi',
  'meixi',
  'xiaoxiao',
  'xiaoxiao',
  'yanzhe',
  'yanzhe',
  'yanzhe',
  'meixi',
  'xiaoxiao',
];

function fakeList(count: number, status: string, username: string): BasicListItemDataType[] {
  console.log('fakeList ' + count + ', ' + status + ',' + username);
  const list = [];
  for (let i = 0; i < count; i += 1) {
    console.log(">>" + user[i]);
    if(username === 'yanzhe' || usernames[i] === username) {
      console.log("insert task.");
    list.push({
      id: `fake-list-${i}`,
      owner: user[i],
      title: titles[i],
      avatar: avatars[i],
      cover: parseInt(`${i / 4}`, 10) % 2 === 0 ? covers[i % 4] : covers[3 - (i % 4)],
      // status: ['done', 'exception', 'wip'][i % 3] as
      //   | 'done'
      //   | 'exception'
      //   | 'wip'
      //   | 'success',
      status: statuses[i],
      percent: percents[i], // Math.ceil(Math.random() * 50) + 50,
      logo: avatars[i % 8],
      href: 'https://ant.design',
      updatedAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i).getTime(),
      createdAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i).getTime(),
      subDescription: desc[i % 5],
      description:
        '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      activeUser: Math.ceil(Math.random() * 100000) + 100000,
      newUser: Math.ceil(Math.random() * 1000) + 1000,
      star: Math.ceil(Math.random() * 100) + 100,
      like: Math.ceil(Math.random() * 100) + 100,
      message: Math.ceil(Math.random() * 10) + 10,
      content:
        '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
      members: [
        {
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
          name: '曲丽丽',
          id: 'member1',
        },
        {
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
          name: '王昭君',
          id: 'member2',
        },
        {
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
          name: '董娜娜',
          id: 'member3',
        },
      ],
    });
  }
  }

  if (status !== 'all') {
    console.log('filter ' + status);
    return list.filter((x) => x.status === status);
  }

  return list;
}

let sourceData: BasicListItemDataType[] = [];

function getFakeList(req: Request, res: Response) {
  console.log('getFakeList');
  const params = req.query as any;
  const count = Number(params.count) * 1 || 20;
  const status = params?.status || 'all';
  const username = params?.username || 'yanzhe';
  console.log('getFakeList ' + count + ', ' + status + ',' + username);
  let result = fakeList(count, status, username);
  sourceData = result;
  // if(username === 'yanzhe') {
  //   // do nothing
  // } else {
  //   result = result.filter((item) => item.owner === username);
  // }
  // console.log(result);
  res.send({
    code: 200,
    data: { list: result },
  });
}

function postFakeList(req: Request, res: Response) {
  const { /* url = '', */ body } = req;
  // const params = getUrlParams(url);
  const { method, id } = body;
  // const count = (params.count * 1) || 20;
  let result = sourceData || [];

  console.log('postFakeList. method = ' + method + '; id = ' + id);

  switch (method) {
    case 'delete':
      result = result.filter((item) => item.id !== id);
      break;
    case 'update':
      result.forEach((item, i) => {
        if (item.id === id) {
          result[i] = { ...item, ...body };
        }
      });
      break;
    case 'post':
      result.unshift({
        ...body,
        id: `fake-list-${result.length}`,
        createdAt: new Date().getTime(),
      });
      break;
    default:
      break;
  }

  return res.send({
    code: 200,
    data: {
      list: result,
    },
  });
}

export default {
  'GET  /api/get_list': getFakeList,
  'POST  /api/post_fake_list': postFakeList,
};
