import { createClient } from 'redis';

// Configuração do cliente Redis
const redisConfig = {
  host: process.env.VUE_APP_REDIS_HOST || 'localhost',
  port: process.env.VUE_APP_REDIS_PORT || 6379,
  password: process.env.VUE_APP_REDIS_PASSWORD || '',
  ttl: 3600 // Tempo de vida padrão em segundos (1 hora)
};

// Criação do cliente Redis
const redisClient = createClient(redisConfig);

export default {
  /**
   * Armazena um token no Redis
   * @param {string} key - Chave de armazenamento
   * @param {string} value - Token JWT ou valor a ser armazenado
   * @param {number} ttl - Tempo de vida em segundos (opcional)
   * @returns {Promise<boolean>}
   */
  async setToken(key, value, ttl = null) {
    try {
      await redisClient.set(key, value);
      if (ttl) {
        await redisClient.expire(key, ttl);
      } else if (redisConfig.ttl) {
        await redisClient.expire(key, redisConfig.ttl);
      }
      return true;
    } catch (error) {
      console.error('Redis setToken error:', error);
      return false;
    }
  },

  /**
   * Recupera um token do Redis
   * @param {string} key - Chave de armazenamento
   * @returns {Promise<string|null>}
   */
  async getToken(key) {
    try {
      return await redisClient.get(key);
    } catch (error) {
      console.error('Redis getToken error:', error);
      return null;
    }
  },

  /**
   * Remove um token do Redis
   * @param {string} key - Chave de armazenamento
   * @returns {Promise<boolean>}
   */
  async removeToken(key) {
    try {
      await redisClient.del(key);
      return true;
    } catch (error) {
      console.error('Redis removeToken error:', error);
      return false;
    }
  },

  /**
   * Verifica se uma chave existe no Redis
   * @param {string} key - Chave de armazenamento
   * @returns {Promise<boolean>}
   */
  async hasToken(key) {
    try {
      return (await redisClient.exists(key)) === 1;
    } catch (error) {
      console.error('Redis hasToken error:', error);
      return false;
    }
  }
};