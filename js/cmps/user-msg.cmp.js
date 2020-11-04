import { eventBus } from '../js/services/event-bus.js'


export default {
    template: `
        <section v-show="msg" class="user-msg">
            <p>{{msg}}</p>
            <button @click="msg=null">x</button>
        </section>
    `,
    data() {
        return {
            msg: null
        }
    },
    created() {
        eventBus.$on('show-msg', msg => {
            this.msg = msg
        })
    }
}