import { login, endSession, getMyProfile } from '@/api/account'
const state = {
    token: '',
    id: '',
    status:1,
    nickname: '',
    avatar: '',
    hasLogin: false,
    userInfo: {
        portrait: '123'
    },
    introduction: '',
    roles: []
}
const getters = {
    token: state => state.token,
    avatar: state => state.avatar,
    name: state => state.name,
    roles: state => state.roles,
    introduction: state => state.introduction,
}
const mutations = {
    login(state, provider) {
        state.hasLogin = true;
        state.userInfo = provider;
        uni.setStorage({//缓存用户登陆状态
            key: 'userInfo',
            data: provider
        })
        console.log(state.userInfo);
    },
    logout(state) {
        state.hasLogin = false;
        state.userInfo = {};
        uni.removeStorage({
            key: 'userInfo'
        })
    },
    setToken: (state, token) => {
        state.token = token
    },
    SET_INTRODUCTION: (state, introduction) => {
        state.introduction = introduction
    },
    setName: (state, name) => {
        state.name = name
    },
    SET_AVATAR: (state, avatar) => {
        state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
        state.roles = roles
    }
}

const actions = {

    login(state, provider) {
        state.hasLogin = true;
        state.userInfo = provider;
        uni.setStorage({//缓存用户登陆状态
            key: 'userInfo',
            data: provider
        })
        console.log(state.userInfo);
    },

    getMyProfile({ commit, state }) {
        return new Promise((resolve, reject) => {
            getMyProfile().then(response => {
                const { data } = response
                const users = {
                    'admin-token': {
                        roles: ['admin'],
                        introduction: 'I am a super administrator',
                        avatar: 'https://w.wallhaven.cc/full/1j/wallhaven-1j1oqg.jpg',
                        name: 'Super Admin'
                    },
                    'editor-token': {
                        roles: ['editor'],
                        introduction: 'I am an editor',
                        avatar: 'https://w.wallhaven.cc/full/1j/wallhaven-1j1oqg.jpg',
                        name: 'Normal Editor'
                    }
                }

                const { roles, name, avatar, introduction } = users['admin-token'];

                // roles must be a non-empty array
                if (!roles || roles.length <= 0) {
                    reject('getInfo: roles must be a non-null array!')
                }

                commit('SET_ROLES', roles)
                commit('SET_AVATAR', avatar)
                commit('SET_INTRODUCTION', introduction)
                resolve(users['admin-token'])
            }).catch(error => {
                reject(error)
            })
        })
    },

    endSession({ commit }) {
        return new Promise(resolve => {
            endSession().then(() => {
                commit('removeToken', '')
            });
            resolve()
        })
    },

    // dynamically modify permissions
    changeRoles({ commit, dispatch }, role) {
        return new Promise(async resolve => {
            const token = role + '-token'
            commit('setToken', token)
            setToken(token)

            const { roles } = await dispatch('getMyProfile')

            resetRouter()

            // generate accessible routes map based on roles
            const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })

            // dynamically add accessible routes
            router.addRoutes(accessRoutes)

            // reset visited views and cached views
            dispatch('tagsView/delAllViews', null, { root: true })

            resolve()
        })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
