<template>
  <div>
    <div class="d-flex justify-content-between mb-3">
      <h2>Lista de Alunos</h2>
      <router-link to="/create" class="btn btn-primary">Novo Aluno</router-link>
    </div>
    
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Nome</th>
          <th>CPF</th>
          <th>Data Nasc.</th>
          <th>Turma</th>
          <th>Status</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="aluno in alunos" :key="aluno.id">
          <td>{{ aluno.nome }}</td>
          <td>{{ formatCPF(aluno.cpf) }}</td>
          <td>{{ formatDate(aluno.data_nascimento) }}</td>
          <td>{{ getTurmaName(aluno.idTurma) }}</td>
          <td>{{ getStatusName(aluno.idStatus) }}</td>
          <td>
            <router-link :to="{ name: 'alunoEdit', params: { id: aluno.id } }" class="btn btn-sm btn-primary me-1">
              Editar
            </router-link>
            <button @click="deleteAluno(aluno.id)" class="btn btn-sm btn-danger">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    alunos: {
      type: Array,
      required: true
    },
    turmas: {
      type: Array,
      required: true
    },
    statusList: {
      type: Array,
      required: true
    }
  },
  emits: ['delete'],
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString('pt-BR')
    },
    formatCPF(cpf) {
      return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
    },
    getTurmaName(idTurma) {
      const turma = this.turmas.find(t => t.id === idTurma)
      return turma ? turma.nome : 'Desconhecido'
    },
    getStatusName(idStatus) {
      const status = this.statusList.find(s => s.id === idStatus)
      return status ? status.nome : 'Desconhecido'
    },
    deleteAluno(id) {
      if (confirm('Tem certeza que deseja excluir este aluno?')) {
        this.$emit('delete', id)
      }
    }
  }
}
</script>