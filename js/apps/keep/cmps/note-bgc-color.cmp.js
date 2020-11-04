// import notesPreview from './notes-preview.cmp.js'
// import { keepService } from '../services/keep-service.js'

export default {
  props: ['notes'],
  name: 'notes-list',
  template: `<section class="color-setter">
                 <button class="color-pick pointer" value="#8293e8" style="background-color: #8293e8">.</button>
                <button class="color-pick pointer" style="background-color: #f0658c">.</button>
                <button class="color-pick pointer" value="#f07c65" style="background-color: #f07c65">.</button>
                <button class="color-pick pointer" value="#e3d76b" style="background-color: #e3d76b">.</button>
                <button class="color-pick pointer" value="#c9e882" style="background-color: #c9e882">.</button>
                <button class="color-pick pointer" value="#82e8cd" style="background-color: #82e8cd">.</button>
                </section>
                `,
  data() {
    return {
      color: null,
    }
  },
  methods: {
    emitColor() {
      this.$emit('color', { ...this.color });
    },
  }
}