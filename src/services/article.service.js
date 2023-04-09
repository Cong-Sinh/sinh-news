import { BaseService } from './base.service'
import { ErrorWrapper, ResponseWrapper } from './util'
import { getFeed } from '@/constants/endpoint'
import { API_BASE_URL } from "@/constants/environment";

export class ArticleService extends BaseService {

  static async getFeedSuggestion (params = {}) {
    const endpoint = `${API_BASE_URL + getFeed}`
    try {
      const response = await this.request({ auth: true }).post(endpoint, {
        fingerprint: 'fingerprint',
        limit: 10,
        page: 1,
        interaction: true,
      })

      return new ResponseWrapper(response, response.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }
}
