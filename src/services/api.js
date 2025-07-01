import axios from 'axios'
import auth from './auth';

const api = axios.create({
    baseURL: 'http://172.20.0.5/api',
    withCredentials: false,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // 'X-Requested-With': 'XMLHttpRequest'
    }
})

export default {
    async getAlunos() {
        const token = await auth.login();
        return api.get('/aluno',
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        );
    },
    async getAluno(id) {
        const token = await auth.login();
        return api.get(`/aluno/${id}`,
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        )
    },
    createAluno(aluno) {
        return api.post('/aluno', aluno)
    },
    async updateAluno(id, aluno) {
        const token = await auth.login();
        const response = api.put(`/aluno/${id}`, aluno,
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        );
        console.log(response);
    },

    async getTurmas() {
        const token = await auth.login();
        return api.get('/turma',
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        )
    },
    async getStatus() {
        const token = await auth.login();
        return api.get('/status',
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        )
    },
    async deleteAluno(id) {
        const token = await auth.login();
         api.delete(`/aluno/${id}`,
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
         )
    }
}