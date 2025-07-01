import axios from 'axios';
// import redis from './redis';

// const API_URL = process.env.VUE_APP_API_URL;

export default {
  async login() {
    try {
      // const response = await axios.post(`${API_URL}/auth/login`, credentials);
      const response = await axios.get(`http://172.20.0.5/api/auth`);
      // console.log(response.data.token);
      
      if (response.data.token) {
        // Armazena o token no Redis
        // await redis.setToken('auth_token', response.data.token, 3564);
        // await redis.setToken('refresh_token', response.data.refreshToken, 3564);
        
        // // Configura o Axios para usar o token
        // axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
      }
      
      return response.data.token;
    } catch (error) {
      // throw error.response ? error.response.data : error;
    }
  },

  // async logout() {
  //   try {
  //     // Remove os tokens do Redis
  //     await redis.removeToken('auth_token');
  //     await redis.removeToken('refresh_token');
      
  //     // Remove o header de autenticação do Axios
  //     delete axios.defaults.headers.common['Authorization'];
  //   } catch (error) {
  //     console.error('Logout error:', error);
  //   }
  // },

  // async getAuthToken() {
  //   return await redis.getToken('auth_token');
  // },

  // async getRefreshToken() {
  //   return await redis.getToken('refresh_token');
  // },

  // async isAuthenticated() {
  //   return await redis.hasToken('auth_token');
  // },

  // async refreshToken() {
  //   try {
  //     const refreshToken = await redis.getToken('refresh_token');
  //     const response = await axios.post(`${API_URL}/auth/refresh`, { refreshToken });
      
  //     if (response.data.token) {
  //       await redis.setToken('auth_token', response.data.token);
  //       axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
  //     }
      
  //     return response.data;
  //   } catch (error) {
  //     await this.logout();
  //     throw error;
  //   }
  // }
};