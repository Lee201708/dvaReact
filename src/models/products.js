import dva from 'dva';

export default {
  namespace: 'products',
  //state 标识Model 的状态数据
  state: [],
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
};