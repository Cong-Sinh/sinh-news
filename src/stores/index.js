import modules from './modules';
import { createStore } from 'vuex';

export default createStore({
  modules,
  strict: process.env.NODE_ENV === 'development',
});
