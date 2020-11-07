import { utilService } from '../../../services/util-service.js'
const STORAGE_KEY = 'emailsDB';
const STORAGE_KEY_DELETED = 'emailsdeletedDB';

var gEmails = getEmails();
var gEmailsDelete = getEmailsDeleted();


export const emailService = {
    getEmailById,
    changeToIsRead,
    deleteEmail,
    sendEmail,
    getEmailsCategory,
    starEmail,
    draftEmail
}

function getEmails() {
    gEmails = utilService.loadFromStorage(STORAGE_KEY);
    if (!gEmails || !gEmails.length) {
        gEmails = _createEmail()
        utilService.storeToStorage(STORAGE_KEY, gEmails);
    }
    return gEmails;
}

function getEmailsDeleted(){
    gEmailsDelete = utilService.loadFromStorage(STORAGE_KEY_DELETED);
    if (!gEmailsDelete || !gEmailsDelete.length) {
        gEmailsDelete = [];
        utilService.storeToStorage(STORAGE_KEY_DELETED, gEmailsDelete);
    }
    return gEmailsDelete;
}

function _createEmail() {
    return [{
        id: utilService.makeId(),
        senderName: 'Asos Orders',
        sentTo: 'Me',
        subject: 'Thanks for your order!',
        body: 'Hi, your order has been received!',
        isRead: false,
        sentAt: 'Oct 28',
        sentEmail: false,
        isDraft: false,
        isStarred: false,
        isDeleted: false
    },
    {
        id: utilService.makeId(),
        senderName: 'Linkedin',
        sentTo: 'Me',
        subject: 'You are getting noticed',
        body: 'See who is looking!',
        isRead: false,
        sentAt: 'Jun 28',
        sentEmail: false,
        isDraft: false,
        isStarred: true,
        isDeleted: false
    },
    {
        id: utilService.makeId(),
        senderName: 'Coding Academy',
        sentTo: 'Me',
        subject: 'Congrats!',
        body: 'We are happy to start!',
        isRead: false,
        sentAt: 'May 28',
        sentEmail: false,
        isDraft: false,
        isStarred: true,
        isDeleted: false
    },
    {
        id: utilService.makeId(),
        senderName: 'Coursera',
        sentTo: 'Me',
        subject: 'Recommended: Object Oriented JS',
        body: 'Recommendations for you',
        isRead: false,
        sentAt: 'July 28',
        sentEmail: false,
        isDraft: false,
        isStarred: true,
        isDeleted: false
    },
    {
        id: utilService.makeId(),
        senderName: 'Itay A',
        sentTo: 'Me',
        subject: 'You are the best!',
        body: 'We are happy to work with you!',
        isRead: false,
        sentAt: 'May 15',
        sentEmail: false,
        isDraft: true,
        isStarred: true,
        isDeleted: false
    },
    {
        id: utilService.makeId(),
        senderName: 'Hill B',
        sentTo: 'Me',
        subject: 'You are the best!',
        body: 'We are happy to work with you!',
        isRead: false,
        sentAt: 'Jun 5',
        sentEmail: false,
        isDraft: false,
        isStarred: false,
        isDeleted: false
    },
    {
        id: utilService.makeId(),
        senderName: 'Dror N',
        sentTo: 'Me',
        subject: 'You are the best!',
        body: 'We are happy to work with you!',
        isRead: false,
        sentAt: 'Fab 10',
        sentEmail: false,
        isDraft: false,
        isStarred: false,
        isDeleted: false
    },
    {
        id: utilService.makeId(),
        senderName: 'Ronit S',
        sentTo: 'Me',
        subject: 'You are the best!',
        body: 'We are happy to work with you!',
        isRead: false,
        sentAt: 'March 17',
        sentEmail: true,
        isDraft: false,
        isStarred: false,
        isDeleted: false
    },
    {
        id: utilService.makeId(),
        senderName: 'Aviv L',
        sentTo: 'Me',
        subject: 'You are the best!',
        body: 'I Love You!',
        isRead: false,
        sentAt: 'Aug 16',
        sentEmail: false,
        isDraft: true,
        isStarred: false,
        isDeleted: false
    },
    {
        id: utilService.makeId(),
        senderName: 'Or R',
        sentTo: 'Me',
        subject: 'You are the best!',
        body: 'We are happy to work with you!',
        isRead: false,
        sentAt: 'Jan 18',
        sentEmail: false,
        isDraft: false,
        isStarred: false,
        isDeleted: false
    },
    {
        id: utilService.makeId(),
        senderName: 'Haim M',
        sentTo: 'Me',
        subject: 'You are the best!',
        body: 'We are happy to work with you!',
        isRead: false,
        sentAt: 'May 5',
        sentEmail: false,
        isDraft: false,
        isStarred: false,
        isDeleted: false
    },
    {
        id: utilService.makeId(),
        senderName: 'Koby B',
        sentTo: 'Me',
        subject: 'Vote!',
        body: 'Go Vote!',
        isRead: false,
        sentAt: 'April 22',
        sentEmail: false,
        isDraft: false,
        isStarred: false,
        isDeleted: false
    },
    {
        id: utilService.makeId(),
        senderName: 'Rotem S',
        sentTo: 'Me',
        subject: 'Come to Ninga!',
        body: 'You are a great athlete!',
        isRead: false,
        sentAt: 'Sep 14',
        sentEmail: false,
        isDraft: false,
        isStarred: false,
        isDeleted: false
    },
    {
        id: utilService.makeId(),
        senderName: 'Ron F',
        sentTo: 'Me',
        subject: 'You are the best!',
        body: 'We are happy to work with you!',
        isRead: false,
        sentAt: 'Dec 20',
        sentEmail: false,
        isDraft: false,
        isStarred: false,
        isDeleted: false
    },
    {
        id: utilService.makeId(),
        senderName: 'Hila S',
        sentTo: 'Me',
        subject: 'You are the best!',
        body: 'We are happy to work with you!',
        isRead: false,
        sentAt: 'Aug 8',
        sentEmail: false,
        isDraft: false,
        isStarred: false,
        isDeleted: false
    },
    {
        id: utilService.makeId(),
        senderName: 'Guy S',
        sentTo: 'Me',
        subject: 'You are the best!',
        body: 'We are happy to work with you!',
        isRead: false,
        sentAt: 'Aug 6',
        sentEmail: false,
        isDraft: false,
        isStarred: false,
        isDeleted: false
    },
    {
        id: utilService.makeId(),
        senderName: 'Yarden S',
        sentTo: 'Me',
        subject: 'You are the best!',
        body: 'We are happy to work with you!',
        isRead: false,
        sentAt: 'Dec 12',
        sentEmail: false,
        isDraft: false,
        isStarred: false,
        isDeleted: false
    },
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
}

function draftEmail(emailId){
    var email = gEmails.find(email => email.id === emailId);
    email.isDraft = true;
    utilService.storeToStorage(STORAGE_KEY, gEmails);
}

function deleteEmail(emailId) {
    var email = gEmails.find(email => email.id === emailId);
    gEmailsDelete.push(email)
    utilService.storeToStorage(STORAGE_KEY_DELETED, gEmailsDelete);
    const idx = gEmails.findIndex(currEmail => currEmail.id === emailId);
    gEmails.splice(idx, 1);
    utilService.storeToStorage(STORAGE_KEY, gEmails);
    return Promise.resolve(gEmails);
}

function sendEmail(email) {
    gEmails.push(email);
    utilService.storeToStorage(STORAGE_KEY, gEmails);
    return Promise.resolve()
}

function starEmail(emailId){
    return Promise.resolve(getEmailById(emailId)
    .then(email => {
        email.isStarred = !email.isStarred
        utilService.storeToStorage(STORAGE_KEY, gEmails);
    }))
}

function getEmailsCategory(emailsCategory){
    if(emailsCategory === 'inbox') {
        let inbox = gEmails.filter(email => {
            return (!email.isDraft && !email.isDeleted)
        })
        return Promise.resolve(inbox);
    }
    if(emailsCategory === 'sent'){
        let sent = gEmails.filter(email => {
            return (email.sentEmail && !email.isDeleted)
        })
        return Promise.resolve(sent);
    }
    if(emailsCategory === 'draft'){
        let draft = gEmails.filter(email => {
            return (email.isDraft && !email.isDeleted)
        })
        return Promise.resolve(draft);
    }
    if(emailsCategory === 'star'){
        let star = gEmails.filter(email => {
            return (email.isStarred && !email.isDeleted)
        })
        return Promise.resolve(star);
    }
    if(emailsCategory === 'deleted'){
        return Promise.resolve(gEmailsDelete);
    }
}
