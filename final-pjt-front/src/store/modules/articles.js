import axios from 'axios'
import drf from '@/api/drf'
import router from '@/router'

import _ from 'lodash'
// import accounts from './accounts'

export default {
  // namespaced: true,
  state: {
    articles: [],
    article: {},
    onUpdateArticleModal: false,
  },

  getters: {
    articles: state => state.articles,
    article: state => state.article,
    isAuthor: (state, getters) => {
      return state.article.user?.username === getters.currentUser.username
    },
    isArticle: state => !_.isEmpty(state.article),
    onUpdateArticleModal: state => state.onUpdateArticleModal,
  },

  mutations: {
    SET_ARTICLES: (state, articles) => state.articles = articles,
    SET_ARTICLE: (state, article) => state.article = article,
    SET_ARTICLE_COMMENTS: (state, comments) => (state.article.comments = comments),
    SET_ON_UPDATE_ARTICLE_MODAL: (state) => state.onUpdateArticleModal = ! state.onUpdateArticleModal,
  },

  actions: {
    fetchArticles({ commit }) {
      axios({
        url: drf.articles.articles(),
        method: 'get',
      })
        .then(res => commit('SET_ARTICLES', res.data))
        .catch(err => console.error(err.response))
    },

    fetchArticle({ commit, getters }, articlePk) {
      if (getters.isLoggedIn) {
        axios({
          url: drf.articles.article(articlePk),
          method: 'get',
          headers: getters.authHeader,
        })
          .then(res => commit('SET_ARTICLE', res.data))
          .catch(err => {
            console.error(err.response)
            if (err.response.status === 404) {
              router.push({ name: 'NotFound404' })
            }
          })
      } else {
        axios({
          url: drf.articles.article(articlePk),
          method: 'get',
        })
          .then(res => commit('SET_ARTICLE', res.data))
          .catch(err => {
            console.error(err.response)
            if (err.response.status === 404) {
              router.push({ name: 'NotFound404' })
            }
          })
      }
    },

    createArticle({ commit, getters, dispatch }, article) {   
      axios({
        url: drf.articles.articles(),
        method: 'post',
        data: article,
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_ARTICLE', res.data)
          dispatch('fetchArticles')
        })
        .catch(err => console.error(err.response))
    },

    updateArticle({ commit, getters, dispatch }, { pk, title, content}) {
      axios({
        url: drf.articles.article(pk),
        method: 'put',
        data: { title, content },
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_ARTICLE', res.data)
          dispatch('fetchArticles')
        })
        .catch(err => {
          if (err.response.status === 403) {
            alert(err.response.data)
          }
          else if (err.response.status === 401) {
            alert('로그인 하세요.')
          } 
          else {
            console.error(err.response)
          }
        })
    },

    deleteArticle({ commit, getters, dispatch }, articlePk) { 
      if (confirm('정말 삭제하시겠습니까?')) {
        axios({
          url: drf.articles.article(articlePk),
          method: 'delete',
          headers: getters.authHeader,
        })
          .then(() => {
            commit('SET_ARTICLE', {})
            dispatch('fetchArticles')
          })
          .catch(err => {
            if (err.response.status === 403) {
              alert(err.response.data)
            } 
            else if (err.response.status === 401) {
              alert('로그인 하세요.')
            } 
            else {
              console.error(err.response)
            }
          })
      }
    },

    likeArticle({ commit, getters, dispatch }, articlePk) {
      axios({
        url: drf.articles.likeArticle(articlePk),
        method: 'post',
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_ARTICLE', res.data)
          dispatch('fetchArticles')
        })
        .catch(err => console.error(err.response))
    },

    switchUpdateArticleModal({ commit }) {
      commit('SET_ON_UPDATE_ARTICLE_MODAL')
    },

		createComment({ commit, getters }, { articlePk, content }) {
      /* 댓글 생성
      POST: comments URL(댓글 입력 정보, token)
        성공하면
          응답으로 state.article의 comments 갱신
        실패하면
          에러 메시지 표시
      */
      const comment = { content }

      axios({
        url: drf.articles.comments(articlePk),
        method: 'post',
        data: comment,
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_ARTICLE_COMMENTS', res.data)
        })
        .catch(err => console.error(err.response))
    },

    updateComment({ commit, getters }, { articlePk, commentPk, content }) {
      /* 댓글 수정
      PUT: comment URL(댓글 입력 정보, token)
        성공하면
          응답으로 state.article의 comments 갱신
        실패하면
          에러 메시지 표시
      */
      const comment = { content }

      axios({
        url: drf.articles.comment(articlePk, commentPk),
        method: 'put',
        data: comment,
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_ARTICLE_COMMENTS', res.data)
        })
        .catch(err => console.error(err.response))
    },

    deleteComment({ commit, getters }, { articlePk, commentPk }) {
      /* 댓글 삭제
      사용자가 확인을 받고
        DELETE: comment URL (token)
          성공하면
            응답으로 state.article의 comments 갱신
          실패하면
            에러 메시지 표시
      */
        if (confirm('정말 삭제하시겠습니까?')) {
          axios({
            url: drf.articles.comment(articlePk, commentPk),
            method: 'delete',
            data: {},
            headers: getters.authHeader,
          })
            .then(res => {
              commit('SET_ARTICLE_COMMENTS', res.data)
            })
            .catch(err => console.error(err.response))
        }
      },
  },
}