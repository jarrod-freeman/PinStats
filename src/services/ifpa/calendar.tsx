import axios from 'axios';

const baseUrl = 'https://api.ifpapinball.com/v1/calendar';

const search = async (address: string, radius: number) => {
    let results: Array<any> = new Array<any>();
    const response = await axios.get(`${baseUrl}/search?api_key=${process.env.REACT_APP_API_KEY}&address=${address}&m=${radius}`);

    if(response && response.data && Array.isArray(response.data.calendar) && response.data.calendar.length < 100){
        results = response.data.calendar.map((result: any) => {
            return result;
        });
    }

    return results;
};

export default { search };