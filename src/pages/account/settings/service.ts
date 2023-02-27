import { request } from 'umi';

export async function queryCurrent(): Promise<{ data: WeHelp.CurrentUser }> {
  return request('/api/currentUser');
}

export async function queryProvince(): Promise<{ data: WeHelp.GeographicItemType[] }> {
  return request('/api/geographic/province');
}

export async function queryCity(province: string): Promise<{ data: WeHelp.GeographicItemType[] }> {
  return request(`/api/geographic/city/${province}`);
}

export async function query() {
  return request('/api/users');
}
