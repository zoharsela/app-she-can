import { keepService } from './services/keep-service.js'
import notesList from './cmps/notes-list.cmp.js'
import createNote from './cmps/create-note.cmp.js'

export default {
  template: `<section class="keep-app">
                <h1>keep app</h1>
                <notes-list></notes-list>
            </section>
  `,
  components: {
    notesList,
    createNote
  }
}