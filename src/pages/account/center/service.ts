import { request } from 'umi';
// import type { CurrentUser, ListItemDataType } from './data.d';
type CurrentUser = WeHelp.CurrentUser;
type ListItemDataType = WeHelp.ListItemDataType;

export async function queryCurrent(): Promise<{ data: CurrentUser }> {
  //return request('/api/currentUserDetail');
  return request('/api/currentUser');
}

export async function queryFakeList(params: {
  count: number;
}): Promise<{ data: { list: ListItemDataType[] } }> {
  return request('/api/fake_list_Detail', {
    params,
  });
}
