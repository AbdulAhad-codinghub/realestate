import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url)=>{

    const {data} = await axios.get((url),{

        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': '4cce9afffbmsh70265751f2bda88p160c05jsn2e8b76b554de'
        }

    });

    return data;

}
