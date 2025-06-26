import axios from 'axios'

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
    getAlunos() {
        return api.get('/aluno');
    },
    getAluno(id) {
        return api.get(`/aluno/${id}`)
    },
    createAluno(aluno) {
        return api.post('/aluno', aluno)
    },
    updateAluno(id, aluno) {
        return api.put(`/aluno/${id}`, aluno)
    },

    getTurmas() {
        return api.get('/turma')
    },
    getStatus() {
        return api.get('/status')
    }
}