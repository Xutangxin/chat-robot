const devUrl = '/api'
const productUrl = 'https://aip.baidubce.com'

const baseUrl = process.env.NODE_ENV === "development" ? devUrl : productUrl

export default {
    baseUrl
}