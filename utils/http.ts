import axios from 'axios';
import { config } from 'dotenv';

if (process.env.NODE_ENV!.startsWith('dev')) config();

/**
 * Send a get query to API for grabbing data fot bot message
 * @param category word category
 * @param query text of query - could be null
 * @returns 
 */
const doAPIRequest = async (category: string, query: string | null) => {
    const response = await axios.get(
        `${process.env.SERVER_URL}/${category}/search${query ? query : ''}`,
        {
            headers: { 'x-api-key': process.env.API_KEY!.toString() }
        }
    );
    const data = await response.data.data;
    return data;
};

export default doAPIRequest;

