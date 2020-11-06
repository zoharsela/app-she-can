export default {
  props: ['notes'],
  name: 'notes-bgc',
  template: `<section class="color-setter">
                <span v-for="color in colors" :key="color">
                  <button class="color-pick pointer" @click="emitColor(color)" :style="{backgroundColor: color}">.</button>
               </span>
            </section>
                `,
  data() {
    return {
      colors: ['#8293e8', '#f0658c', '#f07c65', '#e3d76b', '#c9e882', '#82e8cd', '#fff']
    }
  },
  methods: {
    emitColor(bgcColor) {
      this.$emit('color', bgcColor);
    },
  }
}