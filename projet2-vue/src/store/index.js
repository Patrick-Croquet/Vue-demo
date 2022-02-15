import { createStore } from 'vuex'

export default createStore({
    state: {
        mode: 'light',
        maskActive: false,
        user: '',
        userPass: ''
    },
    getters: {
        getMaskActive: state => {
            return state.maskActive
        },
        getUser: state => {
            return {
                user :state.user,
                userPass :state.userPass
            }
        }
    },
    mutations: {
        // ici synchrone
        toggleMode(state) {
            if (state.mode === 'light') {
                state.mode = 'dark'
            } else if (state.mode === 'dark') {
                state.mode = 'light'
            }
        },
        togMaskActive(state) {
            state.maskActive = !state.maskActive
        },
        setUser(state, obj){
            state.user = obj.user;
            state.userPass = obj.userPass;
        }

    },
    actions: {
        // ici asynchrone
    },
    modules: {}
})