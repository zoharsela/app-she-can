import { utilService } from '../../../services/util-service.js'
const STORAGE_KEY = 'emailsDB';

var gEmails;
var gCountUnread = 0;


export const emailService = {
    getEmailById,
    getEmails,
    changeToIsRead,
    deleteEmail,
    sendEmail
}

function getEmails() {
    gEmails = utilService.loadFromStorage(STORAGE_KEY);
    console.log(gEmails);
    if (!gEmails || !gEmails.length) {
        console.log('11');
        gEmails = _createEmail()
        utilService.storeToStorage(STORAGE_KEY, gEmails);
    }
    gCountUnread = gEmails.length;
    return Promise.resolve(gEmails);
}

function _createEmail() {
    return [{
        id: utilService.makeId(),
        senderName: 'Asos Orders',
        subject: 'Thanks for your order!',
        body: 'Hi, your order has been received!',
        isRead: false,
        sentAt: 'Oct 28'
    },
    {
        id: utilService.makeId(),
        senderName: 'Linkedin',
        subject: 'You are getting noticed',
        body: 'See who is looking!',
        isRead: false,
        sentAt: 'Jun 28'
    },
    {
        id: utilService.makeId(),
        senderName: 'Coding Academy',
        subject: 'Congrats!',
        body: 'We are happy to start!',
        isRead: false,
        sentAt: 'May 28'
    },
    {
        id: utilService.makeId(),
        senderName: 'Coursera',
        subject: 'Recommended: Object Oriented Programming in JS',
        body: 'Recommendations for you',
        isRead: false,
        sentAt: 'Jun 28'
    }
    ]
}

function getEmailById(emailId) {
    var email = gEmails.find(email => email.id === emailId);
    return Promise.resolve(email);
}


function changeToIsRead(emailId) {
    const emailIsRead = gEmails.find(email => {
        return email.id === emailId
    })
    emailIsRead.isRead = !emailIsRead.isRead;
    utilService.storeToStorage(STORAGE_KEY, gEmails);
    if (emailIsRead.isRead) {
        gCountUnread--
    } else gCountUnread++;
    return gCountUnread;
}

function deleteEmail(emailId) {
    const idx = gEmails.findIndex(currEmail => currEmail.id === emailId);
    gEmails.splice(idx, 1);
    utilService.storeToStorage(STORAGE_KEY, gEmails);
    return Promise.resolve(gEmails);
}

function sendEmail(email) {
    email.id = utilService.makeId();
    gEmails.push(email);
    utilService.storeToStorage(STORAGE_KEY, gEmails);
    return Promise.resolve()
}
