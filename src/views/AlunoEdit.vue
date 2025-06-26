<template>
  <div>
    <h2 class="mb-3">Editar Aluno</h2>
    <AlunoForm 
      :aluno="aluno" 
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
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      aluno: {
        nome: '',
        cpf: '',
        data_nascimento: '',
        idTurma: '',
        idStatus: ''
      },
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
        const [alunoRes, turmasRes, statusRes] = await Promise.all([
          api.getAluno(this.id),
          api.getTurmas(),
          api.getStatus()
        ])
        
        this.aluno = alunoRes.data
        this.turmas = turmasRes.data
        this.statusList = statusRes.data
      } catch (error) {
        console.error('Erro ao carregar dados:', error)
      }
    },
    async handleSubmit(aluno) {
      try {
        await api.updateAluno(this.id, aluno)
        this.$router.push({ name: 'alunos' })
      } catch (error) {
        console.error('Erro ao atualizar aluno:', error)
      }
    },
    handleCancel() {
      this.$router.push({ name: 'alunos' })
    }
  }
}
</script>