import axios from "axios";
const strapiAPIKey = process.env.STRAPI_API_KEY;
const strapiBaseURL = process.env.STRAPI_API_BSE_URL;

axios.defaults.baseURL = strapiBaseURL;
axios.defaults.headers.common["Authorization"] = `Bearer ${strapiAPIKey}`;

export default axios;
