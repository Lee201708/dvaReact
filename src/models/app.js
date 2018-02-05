export default {
    namespace: 'app',
    state: {
        collapsed: false,
    },
    subscriptions: {},
    effects: {},
    reducers: {
        onToggle(state){
            return {...state, 
                collapsed:!state.collapsed}
        }
    },

}