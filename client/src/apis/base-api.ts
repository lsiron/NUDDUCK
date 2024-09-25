/*
 * File Name    : base-api.ts
 * Description  : base-api create
 * Author       : 김민지
 *
 * History
 * Date          Author      Status      Description
 * 2024.09.10    김민지      Created      환경변수로 base-api 설정
 * 2024.09.11    김민지      Modified     baseApi 옵션 추가, import qs
 */

import axios from 'axios';
import qs from 'qs';

export const api = {
  auth: '/auth',
  home: '/home',
  myPage: '/my',
  simulation: '/simulation',
  community: '/community',
  expert: '/expert',
  lifeGraph: '/life-graph',
  chat: '/chat',
};

export const baseApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 20000,
  withCredentials: true, // 자격 증명 포함
  paramsSerializer: (parameters) =>
    qs.stringify(parameters, { arrayFormat: 'repeat', encode: false }),
});
