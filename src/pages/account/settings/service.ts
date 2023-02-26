import { request } from 'umi';

export async function queryCurrent(): Promise<{ data: API.CurrentUser }> {
  return request('/api/currentUser');
}

export async function queryProvince(): Promise<{ data: API.GeographicItemType[] }> {
  return request('/api/geographic/province');
}

export async function queryCity(province: string): Promise<{ data: API.GeographicItemType[] }> {
  return request(`/api/geographic/city/${province}`);
}

export async function query() {
  return request('/api/users');
}
