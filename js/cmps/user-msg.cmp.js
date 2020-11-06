import { eventBus } from '../services/event-bus.js'


export default {
    template: `
        <section v-show="msg" class="user-msg">
            <button class="button-reset" @click="msg=null">x</button>
            <span>{{msg}}</span>
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
            setTimeout(() => {
                this.msg = null;
            }, 1000)
        })
    }
}