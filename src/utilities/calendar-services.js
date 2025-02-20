import * as calendarAPI from './calendar-api';

export async function getAllEntries() {
    const entries = calendarAPI.getAllEntries();
    return entries;
}

export async function getUserEntries(user) {
    const entries = calendarAPI.getUserEntries(user);
    return entries;
}

export function parseTime(time) {
    // format yyy-mm-ddThh:mm:ss
    console.log(time)
    let stringDateTime = '';
    let month = time.getMonth() + 1;
    if (month < 10) {
        month = '0' + month;
    }
    let date = time.getDate();
    if (date < 10) {
        date = '0' + date;
    }
    let stringDate = time.getFullYear() + '-' + month + '-' + time.getDate();
    let hours = time.getHours();
    if (hours < 10) {
        hours = '0'+ hours;
    }
    let minutes = time.getMinutes();
    if (minutes < 10) {
        hours = '0' + minutes;
    }
    let seconds = time.getSeconds();
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    let stringTime = hours+':'+minutes+':'+seconds;
    stringDateTime = stringDate + 'T' + stringTime;
    return stringDateTime;
}

