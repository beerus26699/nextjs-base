import Axios from 'axios';

class AxiosClass {
    $axios;

    constructor() {
        this.$axios = Axios.create({
            baseURL: process.env.NEXT_PUBLIC_API_URL,
            timeout: 300000,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            // withCredentials: true
        });

        //   this.$axios.interceptors.request.use(function (config) {
        //     const accessToken = getCookie(getEncodeCookieKey("accessToken"));
        //     if (accessToken != null) {
        //       config.headers.Authorization = `Bearer ${accessToken}`;
        //     }
        //     return config;
        //   });
    }

    async get(url, query) {
        try {
            const response = await this.$axios.get(url, { params: query });
            return response.data;
        } catch (error) {
            console.log(error.message);
            return false;
        }
    }

    async post(url, data) {
        try {
            const response = await this.$axios.post(url, data);

            return response.data;
        } catch (error) {
            console.log(error.message);
            return false;
        }
    }

    async patch(url, data) {
        try {
            const response = await this.$axios.patch(url, data);
            return response.data;
        } catch (error) {
            console.log(error.message);
            return false;
        }
    }

    async put(url, data) {
        try {
            const response = await this.$axios.put(url, data);
            return response.data;
        } catch (error) {
            console.log(error.message);
            return false;
        }
    }

    async delete(url, data) {
        try {
            const response = await this.$axios.delete(url, {
                data: data,
            });
            return response.data;
        } catch (error) {
            console.log(error.message);
            return false;
        }
    }
}

const axiosIntance = new AxiosClass();
export default axiosIntance;
