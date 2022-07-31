import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"

 
  export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '09688b717fmsh3baaee72efcefd0p18e99cjsnab759f8eb78e',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }

    });

    return data;
}