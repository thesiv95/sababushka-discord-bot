import axios from 'axios';
import { config } from 'dotenv';
import { ReminderToggleEnum } from '../enums/reminder-toggle.enum';

if (process.env.NODE_ENV!.startsWith('dev')) config();

/**
 * Send a get query to API for grabbing data fot bot message
 * @param category word category
 * @param query text of query - could be null
 * @returns 
 */
export const doAPIRequest = async (category: string, query: string | null) => {
    const url = `${process.env.SERVER_URL}/${category}/search${query ? query : ''}`;
    
    const response = await axios.get(
        url,
        {
            headers: { 'x-api-key': process.env.API_KEY!.toString() }
        }
    );
    const data = await response.data.data;
    return data;
};

/**
 * Send a get query to API for reminder control (set flag in DB)
 * @param setTo status
 * @returns 
 */
export const toggleApi = async (setTo: ReminderToggleEnum) => {

}


