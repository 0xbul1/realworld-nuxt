// import request from '@/utils/request';
/**
 *
 * @param {*} params
 * 由于封装了plugins的axios，去除utils里的request
 */
import { request } from '@/plugins/request';

export const getArticles = (params = {}) => {
  return request({
    method: 'GET',
    url: 'api/articles',
    params,
  });
};
export const createArticle = (data) => {
  return request({
    method: 'POST',
    url: 'api/articles',
    data,
  });
};
