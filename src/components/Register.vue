<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Register</div>
          <div class="card-body">

            <div v-if="msg" class="alert alert-sucess">{{msg}}</div>
            <div v-if="error" class="alert alert-danger">{{errorMessage}}</div>

            <form action="#" @submit.prevent="submit" v-if="msg==null">
              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>

                <div class="col-md-6">
                  <input
                    id="name"
                    type="name"
                    class="form-control"
                    name="name"
                    value
                    required
                    autofocus
                    v-model="form.name"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

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

              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                <div class="col-md-6">
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    required
                    v-model="form.password"
                  />
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4 text-right">
                  <button type="submit" class="btn btn-primary">Register</button>
                </div>
              </div>
            </form>
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
        name: "",
        email: "",
        password: ""
      },
      error: null,
      msg: null,
    };
  },
  computed:{
    errorMessage(){
      switch(this.error){
        case 'The email address is already in use by another account.':
          return 'Endereço de email já cadastrado.'
        case 'Password should be at least 6 characters':
        case 'The password must be 6 characters long or more.':
          return 'A senha precisa ter pelo menos 6 caracteres.'
        case 'The email address is badly formatted.':
          return 'Verifique se o endereço de email digitado corretamente.'
        default:
          return (this.error);
      }
    }
  },
  methods: {
    submit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.name
            })
            .then(() => {
              var user = firebase.auth().currentUser;
              user.sendEmailVerification().then(function() {
                console.log('Email de verificação enviado')
              }).catch(function(error) {
                // An error happened.
                console.log('Email de verificação falhou: ', error)
              });

              this.msg = this.form.name+', seu cadastro foi realizado com sucesso.';

              const _this = this;
              setTimeout(function(){
                _this.$router.push({ name: "Dashboard" }); 
              },2000);
            });
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>