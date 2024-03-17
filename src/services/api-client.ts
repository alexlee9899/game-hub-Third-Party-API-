import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'a36ec3443a5d4a14aeaf1560651275ff'
    }
})