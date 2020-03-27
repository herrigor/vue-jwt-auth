<template>
  <div class="home">
    <div class="container mb-n5">
      <img alt="Vue logo" src="../assets/logo.png" class="d-block m-auto">
    </div>
    <div class="container mt-n5">
      <div class="row">
        <div class="col-10 offset-1">
          <h1>Seja bem-vindo a essa demonstração de autenticação de usuário.<i class="font-icon icon-emo-grin"></i></h1>
          <hr class="mb-5">
          <p>Ela foi feita utilizando o Vue, Vue CLI com API fornecida pelo Firebase.</p>
          <p>Você pode <router-link to="/register">criar um usuário</router-link>, <router-link to="/login">fazer login</router-link> e visitar o <router-link to="/dashboard">dashboard</router-link>. Se você esqueceu sua senha pode receber um email para <router-link to="/forgot-password">refazê-la</router-link>.</p>
        </div>
        <div class="col-10 offset-1 mt-5 mb-3">
          <p class="border p-3 m-0 "><small>O dashboard só se torna acessível a partir do login do usuário. Assim como as páginas de cadastro e login só podem ser acessadas se não houver alguém já autenticado. Nesses casos, o app direciona para outra página.
          <br>
          <small>Por se tratar de apenas uma demonstração o dashboard é bastante simples. Um pouco bastante haha <i class="font-icon icon-emo-thumbsup"></i></small>
          </small></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
