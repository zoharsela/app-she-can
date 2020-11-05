import { emailService } from '../services/email-service.js'
// import { utilService } from '../../../services/event-bus.js'

export default {
    name: 'emailCompose',
    template: `
    <section class="email-compose flex">
        <form @submit.prevent="sendEmail" class="compose-form flex">
            <div class="compose-header flex" v-if="newEmailForm">
                <h3>New Message</h3>
                <span><button @click="close" v-if="newEmailForm"><i class="fas fa-times"></i></button></span>
            </div>
            <div class="compose-body flex" v-if="newEmailForm">
            <input class="form-text flex" type="text" v-model.trim="email.to" placeholder="To:" required/>
            <input class="form-text flex" type="text" v-model.trim="email.subject" placeholder="Subject:" required/>
            <textarea class="form-Text-body flex" type="text" v-model.trim="email.body"></textarea> 
            </div>
            <div class="form-btns flex" v-if="newEmailForm">
                <button class="send-btn" @click="sendEmail(email)"><i class="far fa-paper-plane"></i></button>
                <button class="delete-btn" @click="close"><i class="fas fa-trash"></i></button>
            </div>
        </form>
    </section>
    `,
    data() {
        return {
            email: {subject: '', body: '', isRead: false ,sentAt: new Date()},
            newEmailForm: null
        }
    },
    methods: {
        sendEmail(){
            this.newEmailForm = false;
            emailService.sendEmail(this.email)
            .then(() => eventBus.$emit('show-msg', 'Email was successfully Added'))
        },
        close(){
            this.newEmailForm = false;
        }
    },
    created () {
        this.newEmailForm = true;
    }

}