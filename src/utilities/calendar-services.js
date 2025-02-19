import * as calendarAPI from './calendar-api';

export async function getAllEntries() {
    const entries = calendarAPI.getAllEntries();
    return entries;
}

export async function getUserEntries(user) {
    const entries = calendarAPI.getUserEntries(user);
    return entries;
}