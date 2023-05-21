import { request } from 'umi';
import type { BasicListItemDataType } from 'mock/data';

type ParamsType = {
  count?: number;
  status?: string;
} & Partial<BasicListItemDataType>;

export async function queryFakeList(
  params: ParamsType,
): Promise<{ data: { list: BasicListItemDataType[] } }> {
  const res = await request('api/get_list', {
    params,
  });
  return res;
}

export async function removeFakeList(
  params: ParamsType,
): Promise<{ data: { list: BasicListItemDataType[] } }> {
  return request('api/post_fake_list', {
    method: 'POST',
    data: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addFakeList(
  params: ParamsType,
): Promise<{ data: { list: BasicListItemDataType[] } }> {
  return request('api/post_fake_list', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateFakeList(
  params: ParamsType,
): Promise<{ data: { list: BasicListItemDataType[] } }> {
  return request('api/post_fake_list', {
    method: 'POST',
    data: {
      ...params,
      method: 'update',
    },
  });
}
