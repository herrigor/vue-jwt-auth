<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Esqueci minha senha</div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{error}}</div>

            <form action="#" @submit.prevent="submit" v-if="!sent">
              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">Digite seu email</label>

                <div class="col-md-6">
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="form.email"
                  />
                </div>
              </div>


              <div class="form-group row mb-0">
                <div class="col-md-8 text-right">
                  <button type="submit" class="btn btn-primary">Enviar</button>
                </div>
              </div>
            </form>

            <div v-if="sent">
                Email enviado com sucesso, verifique sua caixa de entrada.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        email: ""
      },
      error: null,
      sent: false
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .sendPasswordResetEmail(this.form.email)
        .then(() => {
          this.sent = true;
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>