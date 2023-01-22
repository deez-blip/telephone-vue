import { createStore } from 'vuex'

export default createStore({
  state: {
    contacts: [
      {
        nom: 'test',
        numero: '0000000000'
      },
      {
        nom: 'test2',
        numero: '1111111111'
      },
    ],
    journal: [
    ],
    associateNumber: [

    ]
  },
  getters: {
  },
  mutations: {
    addContact(state, formContact) {
      state.contacts.push(formContact)
    },
    addJournal(state, formJournal) {
      state.journal.push(formJournal)
    },
    addAssociateNumber(state, val) {
      state.associateNumber.push(val)
    }
  },
  actions: {
  },
  modules: {
  }
})
