<template>
  <div class="results-container">
    <div class="header">
      <h7 class="nabla-unique headercal">CALCOUNT</h7>
      <img :src="icon" alt="History Icon" @click="goToHistory" class="icon-button" />
    </div>
    <div class="forms-container">
      <form class="result-form">
        <div class="form-group">
          <label for="calories">Ваша калорийность:</label>
          <input type="text" id="calories" v-model="calories" readonly class="input-line">
        </div>
        <div class="form-group">
          <label for="proteins">Белки:</label>
          <input type="text" id="proteins" v-model="proteins" readonly class="input-line">
        </div>
        <div class="form-group">
          <label for="fats">Жиры:</label>
          <input type="text" id="fats" v-model="fats" readonly class="input-line">
        </div>
        <div class="form-group">
          <label for="carbs">Углеводы:</label>
          <input type="text" id="carbs" v-model="carbs" readonly class="input-line">
        </div>
        <div class="form-group">
          <label for="effectiveWeight">Эффективный вес:</label>
          <input type="text" id="effectiveWeight" v-model="effectiveWeight" readonly class="input-line">
        </div>
        <div class="form-group">
          <label for="bmi">Индекс массы тела:</label>
          <input type="text" id="bmi" v-model="bmi" readonly class="input-line">
        </div>
        <button type="button" @click="goBack">Вернуться к вводу данных</button>
      </form>
      <form class="interpretation-form">
        <div class="rastan">
        <h3>Интерпретация показателей:</h3>
        <p>16 и менее – Выраженный дефицит массы тела</p>
        <p>16—18.5 – Недостаточная (дефицит) масса тела</p>
        <p>18,5—24.99 – Норма</p>
        <p>25—30 – Избыточная масса тела (пред ожирение)</p>
        <p>30—35 – Ожирение</p>
        <p>35—40 – Ожирение резкое</p>
        <p>40 и более – Очень резкое ожирение</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import icon from '@/assets/history_24dp_opsz24.svg'

// calories: '2000',
//   proteins: '100',
//   fats: '70',
//   carbs: '250',
//   effectiveWeight: '70',
//   bmi: '22',
//   gender: 'Мужской',
//   age: '30',
//   height: '180',
//   weight: '75',
//   requestTime: '2023-10-01 10:00:00'
export default {
  data() {
    return {
      icon: icon, // Присваиваем изображение переменной
      calories: '2000',
      proteins: '100',
      fats: '70',
      carbs: '250',
      effectiveWeight: '70',
      bmi: '22'
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/get_result/');
        const data = response.data;
        this.calories = data.calories;
        this.proteins = data.proteins;
        this.fats = data.fats;
        this.carbs = data.carbs;
        this.effectiveWeight = data.effectiveWeight;
        this.bmi = data.bmi;
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    },
    goToHistory() {
      this.$router.push('/history');
    },
    goBack() {
      this.$router.push('/data-input');
    }
  }
};
</script>

<style scoped>

button {
  width: 60%;
  padding: 10px;
  background: rgb(238,174,202);
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
  color: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(19,28,107,1) 0%);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}

.input-line {
  background: #00000000;
  width: 100%;
  box-sizing: border-box;
  border: none;
  outline: none;
}
.rastan{
  line-height: 30px;
}
p{
  text-align: left;
}
.headercal {
  margin-left: 9.5%;
  align-items: center;
}
.results-container {
  background: rgb(92,44,150);
  background: linear-gradient(0deg, rgba(92,44,150,0.7506652319130778) 0%, rgba(173,239,239,1) 88%);
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  padding: 20px;
  height: 100vh; 
}

.header {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}

.forms-container {
  display: flex;
  justify-content: space-between;
  width: 50%;
  gap: 20px
}

.result-form, .interpretation-form {
  width: 45%;
  margin-top: 0.5%;
  background: rgb(255,255,255);
  background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(163,255,230,1) 16%, rgba(0,219,255,1) 100%);
  
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  border: 4px solid #4e7070;
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.icon-button {
  width: 50px; 
  height: 50px; 
}
</style>
