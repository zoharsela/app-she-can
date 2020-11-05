import { utilService } from '../../../services/util-service.js'
const STORAGE_KEY = 'emailsDB';

var gEmails;


export const emailService = {
    getEmailById,
    getEmails,
    changeToIsRead,
    deleteEmail,
    sendEmail
}

function _createEmails() {
    var emails = utilService.loadFromStorage(STORAGE_KEY);
    if (!emails || emails.length) {
        emails = [_createEmail('Haleli'), _createEmail('Zohar'), _createEmail('Itay'), _createEmail('Dror')]
        utilService.storeToStorage(STORAGE_KEY, emails);
    }
    return emails;
}

function _createEmail() {
    return {
        id: utilService.makeId(),
        senderName: 'Asos',
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false,
        sentAt: 1551133930594
    }
}

function getEmailById(emailId) {
    var email = gEmails.find(email => email.id === emailId);
    return Promise.resolve(email);
}

function getEmails() {
    gEmails = _createEmails();
    console.log(gEmails);
    return Promise.resolve(gEmails);
}

function changeToIsRead(emailId) {
    const emailIsRead = gEmails.find(email => {
        return email.id === emailId
    })
    emailIsRead.isRead = true;
}

function deleteEmail(emailId) {
    const idx = gEmails.findIndex(currEmail => currEmail.id === emailId);
    gEmails.splice(idx, 1);
    utilService.storeToStorage(STORAGE_KEY, gEmails);
    return Promise.resolve(gEmails);
}

// function getNewEmail() {
//     return {
//         id: utilService.makeId(),
//         senderName: '',
//         subject: '',
//         body: '',
//         isRead: false,
//         sentAt: new Date()
//     }
// }

function sendEmail(email) {
    email.id = utilService.makeId();
    gEmails.push(email);
    utilService.storeToStorage(STORAGE_KEY, gEmails);
    return Promise.resolve()
  }
