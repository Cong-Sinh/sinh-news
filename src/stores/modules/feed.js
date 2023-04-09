import { ArticleService } from "@/services/article.service"

export default {
  namespaced: true,
  state: {
    articleListData: {
      limit: 0,
      page: 0,
      results: []
    },
    loadingArticleListData: true,
  },

  actions: {
    async getFeedSuggestion({commit})  {
      try {
        commit("SET_LOADING_ARTICLE_LIST_DATA", true)
        const response = await ArticleService.getFeedSuggestion()
        commit('SET_FEED_SUGGESTION', response.data)
      } catch (err) {
        console.log('errr', err)
      } finally {
        console.log('finallyyyy')
        commit('SET_LOADING_ARTICLE_LIST_DATA', false)
      }

    }
  },

  mutations: {
    SET_FEED_SUGGESTION(state, data) {
      state.articleListData = data
    },

    SET_LOADING_ARTICLE_LIST_DATA(state, isLoading) {
      state.loadingArticleListData = isLoading
    }
  },

  getters: {
    articleList: state => {
      return state.articleListData.results
    },
    isLoading: state => {
      return state.loadingArticleListData
    }
  }
}
