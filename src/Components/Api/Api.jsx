import axios  from "axios";

const mainUrl = axios.create({
    baseURL: "https://66361b76415f4e1a5e264a71.mockapi.io/api"

})

export default mainUrl;