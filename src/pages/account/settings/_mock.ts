// eslint-disable-next-line import/no-extraneous-dependencies
import type { Request, Response } from 'express';

const city = require('./geographic/city.json');
const province = require('./geographic/province.json');

function getProvince(_: Request, res: Response) {
  return res.json({
    data: province,
  });
}

function getCity(req: Request, res: Response) {
  return res.json({
    data: city[req.params.province],
  });
}

// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  // 支持值为 Object 和 Array
  'GET  /api/geographic/province': getProvince,
  'GET  /api/geographic/city/:province': getCity,
};
