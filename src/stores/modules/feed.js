import { ArticleService } from '@/services/article.service';

export default {
  namespaced: true,
  state: {
    articleListData: {
      limit: 0,
      page: 0,
      results: [],
    },
    leftSideBar: {},
    feedDetail: null,
    loadingArticleListData: true,
    loadingDetail: true,
  },

  actions: {
    async getFeedSuggestion({ commit }) {
      try {
        commit('SET_LOADING_ARTICLE_LIST_DATA', true);
        const response = await ArticleService.getFeedSuggestion();
        commit('SET_FEED_SUGGESTION', response.data);
      } catch (err) {
        console.log('errr', err);
      } finally {
        console.log('finallyyyy');
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
        console.log(response, '---------------------------------response ArticleService');
        commit('SET_LEFT_SIDE_BAR', response.data);
      } catch (err) {
        console.log('errr', err);
      } finally {
        commit('SET_LOADING_DETAIL', false);
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
    SET_LEFT_SIDE_BAR(state, leftSideBar) {
      state.leftSideBar = leftSideBar;
      console.log(leftSideBar, '-------------------------hiiii');
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
    leftSide: (state) => {
      return state.leftSideBar;
    },
  },
};
