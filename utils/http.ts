import axios, { AxiosResponse } from 'axios';
import dotenv from 'dotenv';
import { ReminderToggleEnum } from '../enums/reminder-toggle.enum';
import logger from './logger';

dotenv.config();

/**
 * Send a get query to API for grabbing data fot bot message
 * @param category word category
 * @param query text of query - could be null
 * @returns 
 */
export const doAPIRequest = async (category: string, query: URLSearchParams | null) => {
    const url = `${process.env.SERVER_URL}/${category}/search${query ? `?${query}` : ''}`;
    logger.info(`api request ${url}`);
    
    const response = await axios.get(
        url,
        {
            headers: { 'x-api-key': process.env.API_KEY!.toString() }
        }
    ) as AxiosResponse;
    const data = await response.data.data;
    return data;
};

/**
 * Send a get query to API for reminder control (set flag in DB)
 * @param option status
 * @returns 
 */
export const doApiReminderToggle = async (option: ReminderToggleEnum, userId: string, userName: string) => {
    const query = new URLSearchParams({ userId, userName });
    const url = `${process.env.SERVER_URL}/reminders/${option}?${query}`;
    const response = await axios.get(
        url,
        {
            headers: { 'x-api-key': process.env.API_KEY!.toString() }
        }
        ) as AxiosResponse;
    const status = response.status;
    logger.info(`api reminder ${url} >> status ${status}`);
    // 201 if new record added
    // 202 if record was existing but modified
    return status === 201 || status === 202;
}


