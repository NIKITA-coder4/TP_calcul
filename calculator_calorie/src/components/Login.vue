<template>
  <div class="login-container">
    <div class="header">
      <h7 class="nabla-unique">CALCOUNT</h7>
    </div>
    <div class="login-form">
      <form @submit.prevent="loginn">
        <div class="form-group">
          <label for="login" class="bold-text left-align">Логин:</label>
          <input type="text" id="login" v-model="login" required class="input-line">
        </div>
        <div class="form-group">
          <label for="password" class="bold-text left-align">Пароль:</label>
          <input type="password" id="password" v-model="password" required class="input-line">
        </div>
        <button type="submit" class="bold-text">Войти</button>
      </form>
      <button @click="goToRegister" class="bold-text ">Зарегистрироваться</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      login: '',
      password: ''
    };
  },
  methods: {
    async loginn() {
      try {
        // const response = await axios.post('http://127.0.0.1:8000/api/post_login/', {
        //   login: this.login,
        //   password: this.password
        // });

        // Перенаправление на страницу ввода данных после успешного входа
        this.$router.push('/data-input');
      } catch (error) {
        // Обработка ошибки
        console.error('Ошибка входа:', error);
      }
    },
    goToRegister() {
      this.$router.push('/register');
    }
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: rgb(255,127,250);
  background: linear-gradient(0deg, rgba(255,127,250,0.9019257361147583) 0%, rgba(173,239,239,0.949544783733806) 88%);
}

.header {
  margin-top: -170px;
  margin-bottom: 45px;
}

.login-form {
  background-color: #ebebeb;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  width: 30%;
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

.input-line {
  background-color: #ebebeb;
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid rgb(238,174,202);
  outline: none;
  transition: border-color 0.3s;
}

.input-line:focus {
  border-bottom-color: #007bff;
}

button {
  width: 70%;
  padding: 10px;
  margin-top: 20px;
  background: rgb(238,174,202);
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
  color: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(19,28,107,1) 0%);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}

button:hover {
  background-color: #0056b3;
}

.bold-text {
  font-weight: bold;
  color: rgba(0,0,0,0.7814775568430498);
}

.left-align {
  text-align: left;
}
</style>
