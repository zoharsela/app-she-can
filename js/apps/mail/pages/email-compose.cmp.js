import { emailService } from '../services/email-service.js'
import { utilService } from '../../../services/event-bus.js'

export default {
    name: 'emailCompose',
    template: `
    <section class="email-compose">
        <form @submit.prevent="sendEmail" class="compose-form">
            <div class="compose-header">
                <h3>New Message</h3>
                <button @click="close"><i class="fas fa-times"></i>
            </div>
            <input class="form-text" type="text" v-model.trim="email.to" placeholder="To:" required/>
            <input class="form-text" type="text" v-model.trim="email.subject" placeholder="Subject:" required/>
            <textarea class="form-Text" type="text" v-model.trim="review.text"></textarea> 
            <div class="form-btns">
                <button class="send-btn"><i class="far fa-paper-plane"></i></button>
                <button class="delete-btn"><i class="fas fa-trash"></i></button>
            </div>
        </form>
    </section>
    `
}