import { ArticleService } from '@/services/article.service';

export default {
  namespaced: true,
  state: {
    articleListData: {
      limit: 0,
      page: 0,
      results: [],
      totalPages: 0,
      totalResults: 0,
    },
    categories: [],
    rightBar: {},
    feedDetail: null,
    loadingArticleListData: true,
    loadingDetail: true,
  },

  actions: {
    async getFeedSuggestion({ commit, state }, payload) {
      try {
        commit('SET_LOADING_ARTICLE_LIST_DATA', true);
        const response = await ArticleService.getFeedSuggestion(payload);
        let results = [];
        if (payload.loadMore) {
          results = [...state.articleListData.results, ...response.data.results];
        } else {
          results = response.data.results;
        }
        commit('SET_FEED_SUGGESTION', { ...response.data, results: results });
      } catch (err) {
        console.log('errr', err);
      } finally {
        commit('SET_LOADING_ARTICLE_LIST_DATA', false);
      }
    },
    async getFeedDetail({ commit }, feedId) {
      try {
        commit('SET_LOADING_DETAIL', true);
        const response = await ArticleService.getFeedDetail(feedId);
        commit('SET_FEED_DETAIL', response.data);
      } catch (err) {
        console.log('errr', err);
      } finally {
        commit('SET_LOADING_DETAIL', false);
      }
    },
    async getLefSideBar({ commit }) {
      try {
        const response = await ArticleService.getLefSideBar();
        commit('SET_CATEGORIES', response.data);
      } catch (err) {
        console.log('errr', err);
      } finally {
        commit('SET_LOADING_DETAIL', false);
      }
    },
    async getFeedByCategory({ commit }, payload) {
      try {
        commit('SET_LOADING_ARTICLE_LIST_DATA', true);
        const response = await ArticleService.getFeedByCategory(payload);
        commit('SET_FEED_SUGGESTION', response.data);
      } catch (err) {
        console.log('errr', err);
      } finally {
        commit('SET_LOADING_ARTICLE_LIST_DATA', false);
      }
    },
  },

  mutations: {
    SET_FEED_SUGGESTION(state, data) {
      state.articleListData = data;
    },
    SET_LOADING_ARTICLE_LIST_DATA(state, isLoading) {
      state.loadingArticleListData = isLoading;
    },
    SET_FEED_DETAIL(state, feedDetail) {
      state.feedDetail = feedDetail;
    },
    SET_LOADING_DETAIL(state, isLoading) {
      state.loadingDetail = isLoading;
    },
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
  },

  getters: {
    articleList: (state) => {
      return state.articleListData.results;
    },
    isLoading: (state) => {
      return state.loadingArticleListData;
    },
    isLoadingDetail: (state) => {
      return state.loadingDetail;
    },
    articleDetail: (state) => {
      return state.feedDetail;
    },
    categoriesList: (state) => {
      return state.categories;
    },
  },
};
