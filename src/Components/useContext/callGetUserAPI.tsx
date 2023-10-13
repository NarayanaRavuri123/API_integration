//axios library is installed to call make the API call
import axios from "axios";
import { IuserContext } from "./Contextvalues.interface";
import { AccessToken } from "./AccessToken";


export const callGetUserAPI = async () => {
    const URL = "https://ionhealing-nonprod.acelity.com/3ME.servicesTest/api/User/GetUser";

        try {
            const response = await axios.post(URL, {
                "userName": "narayana.ravuri+234@healthasyst.com"
            },
            {
                headers: {
                  'Accept': '*/*',
                  'Accept-Language': 'en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7',
                  'Access-Control-Allow-Origin': '*',
                  'Authorization': `Bearer ${AccessToken}`,
                  'Origin': 'https://3mtherapyportal-qa.3m.com',
                  'Referer': 'https://3mtherapyportal-qa.3m.com/',
                  'Sec-Fetch-Dest': 'empty',
                  'Sec-Fetch-Mode': 'cors',
                  'Sec-Fetch-Site': 'cross-site',
                  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
                  'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
                  'sec-ch-ua-mobile': '?0',
                  'sec-ch-ua-platform': '"Windows"',
                  'Cookie': 'BIGipServerIONHEALING_NONPROD_HTTPS_vs.app~IONHEALING_NONPROD_HTTPS_vs_pool=2395872428.20480.0000',
                }
              }
            );
            const data : IuserContext = response.data.data;
            return (data);
        }

        catch(err:any) {
            return(err.message);

        }
    

}