import { BaseService } from './base.service';
import { ErrorWrapper, ResponseWrapper } from './util';
import { getFeed, getFeedById, letSideBar, getCategory } from '@/constants/endpoint';
import { API_BASE_URL } from '@/constants/environment';

export class ArticleService extends BaseService {
  static async getFeedSuggestion(params = {}) {
    const endpoint = `${API_BASE_URL + getFeed}`;
    try {
      const response = await this.request({ auth: true }).post(endpoint, {
        fingerprint: 'fingerprint',
        limit: 10,
        page: 1,
        interaction: true,
      });

      return new ResponseWrapper(response, response.data);
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText;
      throw new ErrorWrapper(error, message);
    }
  }

  static async getFeedDetail(feedId) {
    const endpoint = `${API_BASE_URL + getFeedById + feedId}`;
    try {
      const response = await this.request().get(endpoint);

      return new ResponseWrapper(response, response.data);
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText;
      throw new ErrorWrapper(error, message);
    }
  }

  static async getLefSideBar(params = {}) {
    const endpoint = `${API_BASE_URL + letSideBar}`;
    try {
      const response = await this.request().get(endpoint);
      return new ResponseWrapper(response, response.data);
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText;
      throw new ErrorWrapper(error, message);
    }
  }

  static async getFeedByCategory(params = {}) {
    const endpoint = `${API_BASE_URL + getCategory}`;
    console.log(endpoint);

    try {
      const response = await this.request().post(endpoint);
      console.log(endpoint, '-------------------------getFeedByCategory');

      return new ResponseWrapper(response, response.data);
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText;
      throw new ErrorWrapper(error, message);
    }
  }
}
