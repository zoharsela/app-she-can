import { utilService } from '../../../services/util-service.js'
const STORAGE_KEY = 'emailsDB';

var gEmails;


export const emailService = {
    getEmailById,
    getEmails
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
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false,
        sentAt: 1551133930594
    }
}

function getEmailById(emailId){
    const email = emails.find(email => email.id === emailId);
    return Promise.resolve(email);
}

function getEmails(){
    gEmails = _createEmails();
  return Promise.resolve(gEmails);
}