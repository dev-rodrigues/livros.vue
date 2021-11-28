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

    async addBook( { commit }, book) {        
        book.id = state.books.length + 1;
        console.log('novo book', book)
        commit('addBook', book)
    },

    async updateBook( { commit }, book) {
        console.log('updateBook', commit, book);
        commit('updateBook', book)
    },

    async deleteBook( { commit }, book) {
        console.log('deletebook', state.books);
        commit('removeBook', book.id);
    }
}

const mutations = {
    setBooks: (state, books) => (state.books = books),
    removeBook: (state, id) => state.books = state.books.filter(book => book.id !== id),
    updateBook: (state, book) => {
        const index = state.books.findIndex(b => b.id === book.id);
        state.books.splice(index, 1, book);
    },
    addBook: (state, book) => state.books.push(book),    
}

export default createStore({
    state,
    getters,
    actions,
    mutations,    
})