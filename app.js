const App = {
  data() {
    return {
      counter: 0,
      title: 'Список заметок',
      placeholderString: 'Введите вашу заметку',
      inputValue: '',
      notes: ['Заметка1']
    }
  },
  methods: {
    inputChangeHandler(event) {
      this.inputValue = event.target.value
    },
    addNewNote() {
      if (this.inputValue !== '') {
        this.notes.push(this.inputValue)
        this.inputValue = ''
      }

    },
    toUpperCase(item) {
      return item.toUpperCase()
    },
    removeNote(index) {
      this.notes.splice(index, 1)
    },
    doubleCount() {
      console.log("doubleCount");
      return this.notes.length * 2
    }
  },
  computed: {
    doubleCountComputed() {
      console.log("doubleCountComputed");
      return this.notes.length * 2
    }
  }
}

const app = Vue.createApp(App)

app.mount('#app')