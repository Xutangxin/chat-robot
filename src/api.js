import axios from 'axios';
import config from './config/index'
const { baseUrl } = config

export function getToken(data) {
    return axios({
        url: `${baseUrl}/oauth/2.0/token?grant_type=client_credentials&client_id=4rvQ2WMxr1BPS6xnyaRRmpkc&client_secret=Y4VysMi0HH1gsIR7ZshrwCvzzhVbDaCV`,
        method: 'post',
        data
    })
}

export function getReply(token, data) {
    return axios({
        url: `${baseUrl}/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/completions_pro?access_token=${token}`,
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        data
    })
}

export function getPoem(params) {
    return axios({
        url: 'https://v1.jinrishici.com/all.json',
        method: 'get',
        params
    })
}