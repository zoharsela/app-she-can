import notesPreview from './notes-preview.cmp.js'
// import { keepService } from '../services/keep-service.js'

export default {
  props: ['notes'],
  name: 'notes-list',
  template: `<section class="note-list flex wrap">
                   <ul class="notes-list flex wrap">
                    <li v-for="note in notes" :key="note.id">
                      <notes-preview :note="note"></notes-preview>
                   </li>
                  </ul>
            </section>
  `,
  components: {
    notesPreview
  },
}