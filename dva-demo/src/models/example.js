
export default {

  namespace: 'example',

  state: {
    count: 0
  },

  subscriptions: {
    setup({ dispatch, history }) {
    },
  },

  effects: {
    *increase({ payload }, { select, call, put }) {
      let { count } = yield select(({ example }) => example );
      yield put({ type: 'update', payload: { count: ++count} });
    },
    *decrease({ payload }, { select, call, put }) {
      let { count } = yield select(({ example }) => example );
      yield put({ type: 'update', payload: { count: --count } });
    },
  },

  reducers: {
    update(state, { payload }) {
      return { ...state, ...payload };
    },
  },

}
