import { Request, Response } from 'express';

const fake_notices = [
  {
    id: '000000001',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
    title: '你有一个新任务',
    datetime: '2023-05-27',
    type: 'notification',
    owner: 'meixi',
  },
  {
    id: '000000002',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
    title: '你的报表需要提交新数据',
    datetime: '2023-05-27',
    type: 'notification',
    owner: 'yanzhe'
  },
  {
    id: '000000003',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
    title: '你的任务已经分配',
    datetime: '2023-05-27',
    type: 'notification',
    owner: 'zhang',
  },
  {
    id: '000000004',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
    title: '通知1',
    datetime: '2023-05-27',
    type: 'notification',
    read: true,
    owner: 'xiaoxiao',
  },
  {
    id: '000000005',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
    title: '通知2',
    datetime: '2023-05-27',
    type: 'notification',
    owner: 'all',
  },
  {
    id: '000000006',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
    title: '消息1',
    description: '描述信息描述信息描述信息',
    datetime: '2023-05-27',
    type: 'message',
    clickClose: true,
  },
  {
    id: '000000007',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
    title: '消息2',
    description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
    datetime: '2023-05-27',
    type: 'message',
    clickClose: true,
    owner: 'all',
  },
  {
    id: '000000008',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
    title: '消息3',
    description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
    datetime: '2023-05-27',
    type: 'message',
    clickClose: true,
    owner: 'yanzhe',
  },
  {
    id: '000000009',
    title: '任务1',
    description: '任务需要在 2023-05-28 20:00 前启动',
    extra: '未开始',
    status: 'todo',
    type: 'event',
    owner: 'yanzhe',
  },
  {
    id: '000000010',
    title: '小区互助报表提交',
    description: '冠霖提交于 2017-01-06，需在 2023-05-28 前完成报告提交',
    extra: '马上到期',
    status: 'urgent',
    type: 'event',
    owner: 'meixi',
  },
  {
    id: '000000011',
    title: '信息安全考试',
    description: '指派你于 2023-06-01 前完成更新并发布',
    extra: '已耗时 8 天',
    status: 'doing',
    type: 'event',
    owner: 'xiaoxiao',
  },
  {
    id: '000000012',
    title: '所有人注意：',
    description: '论文提交需在 2023-05-29 前完成',
    extra: '进行中',
    status: 'processing',
    type: 'event',
    owner: 'all'
  },
];

function fakeNotices(owner: string): Partial<WeHelp.NoticeIconItem>[] {
  const list: Partial<WeHelp.NoticeIconItem>[] = [];

  fake_notices.forEach(notice => {
    if(notice.owner === 'all' || owner === notice.owner) {
      list.push(notice);
    }
  });

  return list;
}

const getNotices = (req: Request, res: Response) => {
  const params = req.query as any;
  let list = fakeNotices(params.owner);
  res.json({
    data: list
  });
};

export default {
  'GET /api/notices': getNotices,
};
