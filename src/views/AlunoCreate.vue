<template>
  <div>
    <h2 class="mb-3">Cadastrar Novo Aluno</h2>
    <AlunoForm 
      :turmas="turmas" 
      :statusList="statusList"
      @submit="handleSubmit"
      @cancel="handleCancel"
    />
  </div>
</template>

<script>
import AlunoForm from '@/components/AlunoForm.vue'
import api from '@/services/api'

export default {
  components: {
    AlunoForm
  },
  data() {
    return {
      turmas: [],
      statusList: []
    }
  },
  async created() {
    await this.fetchTurmasAndStatus()
  },
  methods: {
    async fetchTurmasAndStatus() {
      try {
        const [turmasRes, statusRes] = await Promise.all([
          api.getTurmas(),
          api.getStatus()
        ])
        
        this.turmas = turmasRes.data
        this.statusList = statusRes.data
      } catch (error) {
        console.error('Erro ao carregar turmas e status:', error)
      }
    },
    async handleSubmit(aluno) {
      try {
        const response = await api.createAluno(aluno);
        console.log(response);
        this.$router.push({ name: 'alunos' });
      } catch (error) {
        console.error('Erro ao criar aluno:', error)
      }
    },
    handleCancel() {
      this.$router.push({ name: 'alunos' })
    }
  }
}
</script>