import { createStore } from 'vuex';
import data  from '../data/books';

const state = {
    books: [],
}

const getters = {
    allBooks: state => state.books,
}

const actions = {
    async fetchBooks({ commit }) {
        console.log('fetchBooks', commit);
        const response = data;
        console.log("books", response);
        commit('setBooks', response)
    },

    async addBook( { commit }, title) {
        console.log('addBook', commit, title);
    },

    async updateBook( { commit }, title) {
        console.log('updateBook', commit, title);
    },

    async deleteBook( { commit }, title) {
        console.log('deleteBook', commit, title);
    }
}

const mutations = {
    setBooks: (state, books) => (state.books = books),
}

export default createStore({
    state,
    getters,
    actions,
    mutations
})