import notesPreview from './notes-preview.cmp.js'

export default {
  props: ['notes'],
  name: 'notes-list',
  template: `<section class="note-list">
                <h1>this is a notes list</h1>
                   <ul>
                    <li class="note-preview" v-for="note in notes" :key="note.id">
                      <notes-preview :note="note"></notes-preview>
                   </li>
                  </ul>
            </section>
  `,
  components: {
    notesPreview
  }
}