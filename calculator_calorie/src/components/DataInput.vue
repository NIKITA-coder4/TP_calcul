<template>
  <div class="backfon">
    <div class="header-container">
        <h7 class="nabla-unique sdvig">CALCOUNT</h7>
        <div>
          <img :src="icon" alt="History Icon" @click="goToHistory" class="icon-button" />
          <img :src="icon_log_out" alt="Log out" @click="goToLogOut" class="icon-button" />
        </div>
    </div>
    <div class="data-input-container header">
      <div class="form-formm">
        <h4>Введите данные:</h4>
        <form @submit.prevent="submitData">
          <div class="form-group">
            <label for="gender">Пол:</label>
            <select id="gender" v-model="gender" required class="input-line">
              <option value="male">Мужской</option>
              <option value="female">Женский</option>
            </select>
          </div>
          <div class="form-group">
            <label for="age">Возраст:</label>
            <input type="number" id="age" v-model="age" min="1" required class="input-line">
          </div>
          <div class="form-group">
            <label for="height">Рост в см:</label>
            <input type="number" id="height" v-model="height" min="1" required class="input-line">
          </div>
          <div class="form-group">
            <label for="weight">Вес в кг:</label>
            <input type="number" id="weight" v-model="weight" min="1" required class="input-line">
          </div>
          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import icon from '@/assets/history_24dp_opsz24.svg';
import icon_log_out from '@/assets/logout_24dp_opsz24.svg';

export default {
  data() {
    return {
      gender: '',
      age: '',
      height: '',
      weight: '',
      icon: icon,
      icon_log_out: icon_log_out
    };
  },
  methods: {
    async submitData() {
      if (this.age <= 0 || this.height <= 0 || this.weight <= 0) {
        alert('Возраст, рост и вес должны быть больше 0.');
        return;
      }

      try {
        // const response = await axios.post('http://127.0.0.1:8000/api/post_input/', {
        //   gender: this.gender,
        //   age: this.age,
        //   height: this.height,
        //   weight: this.weight
        // });

      
        this.$router.push('/results');
      } catch (error) {
        console.error('Ошибка при отправке данных:', error);
      }
    },
    goToHistory() {
      this.$router.push('/history');
    },
    goToLogOut() {
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.sdvig{
  margin-left: 9%;
}
h4{
  color: rgb(42, 42, 42);
  font-size: 24px; 
  text-align: center;
}
.icon-button {
  width: 50px; 
  height: 50px; 
  padding: 10px;
  cursor: pointer;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.form-formm {
background: rgb(255,255,255);
background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(163,255,230,1) 16%, rgba(0,219,255,1) 100%);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  border: 4px solid #4e7070;
  margin-right: 35%;
  font-weight: bold;
  width: 40%;
}

.data-input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input, select {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  width: 60%;
  padding: 10px;
  margin-top: 10px;
  margin-left: 20%;
  background: rgb(238,174,202);
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
  color: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(19,28,107,1) 0%);
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  cursor: pointer;
}

.input-line {
  background: none;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid rgb(238,174,202);
  outline: none;
  transition: border-color 0.3s;
}

.input-line:focus {
  border-bottom-color: #007bff;
}

.backfon {
  padding: 20px;
  background: rgb(92,44,150);
  background: linear-gradient(0deg, rgba(92,44,150,0.5489845596441701) 0%, rgba(173,239,239,1) 88%);
  width: auto;
  height: 100vh;
}
.header {
  margin-right: 30%;
}
</style>
