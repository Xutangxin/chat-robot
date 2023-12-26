import axios from 'axios';

export function getToken(data) {
    return axios({
        url: '/api/oauth/2.0/token?grant_type=client_credentials&client_id=45707403&client_secret=Y4VysMi0HH1gsIR7ZshrwCvzzhVbDaCV',
        method: 'post',
        data
    })
}

export function getReply(data) {
    return axios({
        url: '/api/rpc/2.0/nlp/v1/lexer?charset=UTF-8&access_token=T0wM4Dwk5cBpfcMEuLF0Bihs',
        method: 'post',
        data
    })
}
