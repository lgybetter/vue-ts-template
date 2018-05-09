import { RootState } from '../types'
import { Module } from 'vuex'
import { ProfileState } from './types'
import { GetterTree, ActionTree, MutationTree  } from 'vuex'
import axios, { AxiosPromise } from 'axios'

const state: ProfileState = {
  firstName: '',
  lastName: ''
}

const getters: GetterTree<ProfileState, RootState> = {
  firstName(state) : string {
    return state.firstName
  },
  lastName(state) : string {
    return state.lastName
  }
}

const actions: ActionTree<ProfileState, RootState> = {
  fetchName({ commit }, id: number): AxiosPromise<ProfileState> {
    console.log('action:', id)
    return axios.request({
      url: 'https://www.apiopen.top/satinCommentApi?id=27610708&page=1'
    }).then(res => {
      commit('setProfile', {
        firstName: 'lin',
        lastName: 'guangyu'
      })
      return res
    }).catch(err => {
      return err
    })
  }
}

const mutations: MutationTree<ProfileState> = {
  setProfile(state, payload: ProfileState) {
    state.firstName = payload.firstName
    state.lastName = payload.lastName
  }
}

const namespaced: boolean = true;

export const profile: Module<ProfileState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};