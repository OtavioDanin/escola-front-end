<template>
  <div>
    <AlunoList 
      :alunos="alunos" 
      :turmas="turmas" 
      :statusList="statusList"
      @delete="handleDelete"
    />
  </div>
</template>

<script>
import AlunoList from '@/components/AlunoList.vue'
import api from '@/services/api'

export default {
  components: {
    AlunoList
  },
  data() {
    return {
      alunos: [],
      turmas: [],
      statusList: []
    }
  },
  async created() {
    await this.fetchData()
  },
  methods: {
    async fetchData() {
      try {
        const [alunosRes, turmasRes, statusRes] = await Promise.all([
          api.getAlunos(),
          api.getTurmas(),
          api.getStatus()
        ])
        
        this.alunos = alunosRes.data
        this.turmas = turmasRes.data
        this.statusList = statusRes.data
      } catch (error) {
        console.error('Erro ao carregar dados:', error)
      }
    },
    async handleDelete(id) {
      try {
        await api.deleteAluno(id)
        this.alunos = this.alunos.filter(aluno => aluno.id !== id)
      } catch (error) {
        console.error('Erro ao excluir aluno:', error)
      }
    }
  }
}
</script>