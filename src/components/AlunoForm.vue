<template>
  <form @submit.prevent="submitForm">
    <div class="mb-3">
      <label for="nome" class="form-label">Nome</label>
      <input type="text" class="form-control" id="nome" v-model="localAluno.nome" required>
    </div>
    
    <div class="mb-3">
      <label for="cpf" class="form-label">CPF</label>
      <input type="text" class="form-control" id="cpf" v-model="localAluno.cpf" required>
    </div>
    
    <div class="mb-3">
      <label for="data_nascimento" class="form-label">Data de Nascimento</label>
      <input type="date" class="form-control" id="data_nascimento" v-model="localAluno.data_nascimento" required>
    </div>
    
    <div class="mb-3">
      <label for="idTurma" class="form-label">Turma</label>
      <select class="form-select" id="idTurma" v-model="localAluno.idTurma" required>
        <option v-for="turma in turmas" :key="turma.id" :value="turma.id">
          {{ turma.nome }}
        </option>
      </select>
    </div>
    
    <div class="mb-3">
      <label for="idStatus" class="form-label">Status</label>
      <select class="form-select" id="idStatus" v-model="localAluno.idStatus" required>
        <option v-for="status in statusList" :key="status.id" :value="status.id">
          {{ status.nome }}
        </option>
      </select>
    </div>
    
    <button type="submit" class="btn btn-primary">Salvar</button>
    <button type="button" class="btn btn-secondary ms-2" @click="cancel">Cancelar</button>
  </form>
</template>

<script>
export default {
  props: {
    aluno: {
      type: Object,
      default: () => ({
        nome: '',
        cpf: '',
        data_nascimento: '',
        idTurma: '',
        idStatus: ''
      })
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
  emits: ['submit', 'cancel'],
  data() {
    return {
      localAluno: { ...this.aluno }
    }
  },
  watch: {
    aluno: {
      handler(newVal) {
        this.localAluno = { ...newVal }
      },
      deep: true
    }
  },
  methods: {
    submitForm() {
      this.$emit('submit', { ...this.localAluno })
    },
    cancel() {
      this.$emit('cancel')
    }
  }
}
</script>