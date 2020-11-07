import notesPreview from './notes-preview.cmp.js'

export default {
  props: ['notes'],
  name: 'notes-list',
  template: `<section class="note-list flex wrap">
                   <ul class="notes-list flex wrap">
                    <li class="note-li" v-for="note in notes" :key="note.id" v-if="note.isPinned">
                      <notes-preview :note="note"></notes-preview>
                   </li>
                   </ul>
                   <ul class="notes-list flex wrap">
                   <li class="note-li" v-for="note in notes" :key="note.id" v-if="!note.isPinned">
                      <notes-preview :note="note"></notes-preview>
                   </li>
                  </ul>
            </section>
  `,
  components: {
    notesPreview
  },
}