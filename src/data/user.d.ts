// @ts-ignore
/* eslint-disable */

declare namespace WeHelp {
  export type tabKeyType = 'articles' | 'applications' | 'projects';
  export interface TagType {
    key: string;
    label: string;
  }
  
  export type GeographicItemType = {
    label: string;
    key: string;
  };

  export type GeographicType = {
    province: GeographicItemType;
    city: GeographicItemType;
  };
  
  export type NoticeType = {
    id: string;
    title: string;
    logo: string;
    description: string;
    updatedAt: string;
    member: string;
    href: string;
    memberLink: string;
  };

  export type Member = {
    avatar: string;
    name: string;
    id: string;
  };
  
  export type ListItemDataType = {
    id: string;
    owner: string;
    title: string;
    avatar: string;
    cover: string;
    status: 'normal' | 'exception' | 'active' | 'success';
    percent: number;
    logo: string;
    href: string;
    body?: any;
    updatedAt: number;
    createdAt: number;
    subDescription: string;
    description: string;
    activeUser: number;
    newUser: number;
    star: number;
    like: number;
    message: number;
    content: string;
    members: Member[];
  };

  export type CurrentUserInfo = {
    username : string;
    userid : string;
    access : string;
    password: string;
  };
  
  type CurrentUser = {
    // basic info
    username?: string;
    userid?: string;
    access?: string;

    name?: string;
    avatar?: string;
    email?: string;
    signature?: string;
    title?: string;
    group?: string;
    tags?: { key?: string; label?: string }[];
    notifyCount?: number;
    unreadCount?: number;
    country?: string;
    geographic?: {
      province?: GeographicItemType;
      city?: GeographicItemType;
    };
    address?: string;
    phone?: string;
    averageTaskTime?: string;
    weekTasks?: string;
  };

  type LoginResult = {
    status?: string;
    type?: string;
    currentAuthority?: string;
  };

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  type LoginParams = {
    username?: string;
    password?: string;
    autoLogin?: boolean;
    type?: string;
  };

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type  NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeFilter = {
    owner?: string;
  };

  type NoticeIconItem = {
    id?: string;
    owner?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };
}
