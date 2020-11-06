// import notesPreview from './notes-preview.cmp.js'
// import { keepService } from '../services/keep-service.js'

export default {
  props: ['notes'],
  name: 'notes-bgc',
  template: `<section class="color-setter">
                <button class="color-pick pointer" @click="emitColor(null)" style="background-color: #fff; border: 1px solid gray">.</button>
                <button class="color-pick pointer" @click="emitColor('#8293e8')" style="background-color: #8293e8">.</button>
                <button class="color-pick pointer" @click="emitColor('#f0658c')" style="background-color: #f0658c">.</button>
                <button class="color-pick pointer" @click="emitColor('#f07c65')" style="background-color: #f07c65">.</button>
                <button class="color-pick pointer" @click="emitColor('#e3d76b')" style="background-color: #e3d76b">.</button>
                <button class="color-pick pointer" @click="emitColor('#c9e882')" style="background-color: #c9e882">.</button>
                <button class="color-pick pointer" @click="emitColor('#82e8cd')" style="background-color: #82e8cd">.</button>
                </section>
                `,
  methods: {
    emitColor(bgcColor) {
      this.$emit('color', bgcColor);
    },
  }
}