import { emailService } from '../services/email-service.js'
// import { utilService } from '../../../services/event-bus.js'

export default {
    props: ['addNewEmail'],
    name: 'emailCompose',
    template: `
    <section class="email-compose flex" v-if="addNewEmail">
        <form @submit.prevent="sendEmail" class="compose-form flex">
            <div class="compose-header flex">
                <h3>New Message</h3>
                <span><button @click="close" class="button-reset"><i class="fas fa-times"></i></button></span>
            </div>
            <div class="compose-body flex">
            <input class="form-text flex" type="text" v-model.trim="email.to" placeholder="To:" required/>
            <input class="form-text flex" type="text" v-model.trim="email.subject" placeholder="Subject:" required/>
            <textarea class="form-Text-body flex" type="text" v-model.trim="email.body"></textarea> 
            </div>
            <div class="form-btns flex">
                <button class="send-btn button-reset" @click="sendEmail(email)"><i class="far fa-paper-plane"></i></button>
                <button class="delete-btn button-reset" @click="close"><i class="fas fa-trash"></i></button>
                <button class="draft-btn button-reset" v-if="!isDraft" @click="saveDraft"><i class="far fa-save"></i></button>
            </div>
        </form>
    </section>
    `,
    data() {
        return {
            email: {
                sentTo: 'Me',
                subject: '',
                body: '',
                isRead: false,
                sentAt: new Date(),
                sentEmail: false,
                isDraft: false,
                isMarked: false,
                isDeleted: false
            },
        }
    },
    methods: {
        sendEmail() {
            if (this.isDraft) {
                this.email.isDraft = false;
            }
            this.email.sentEmail = true;
            emailService.sendEmail(this.email)
                .then(() => eventBus.$emit('show-msg', 'Email was successfully Added'))
            close()
        },
        close() {
            this.$emit('closeCompose')
        },
        saveDraft() {
            this.email.isDraft = true;
        }
    }
}