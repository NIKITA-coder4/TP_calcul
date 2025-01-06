<template>
  <div>
    <div class="header">
      <button class="back-button" @click="goBack">
        <img :src="icon" alt="Back" class="icon-button" />
      </button>
      <h7 class="nabla-unique nabla-uniq">CALCOUNT</h7>
    </div>
    <div class="header-line"></div>
    <div :class="[formRows.length <= 1 ? 'full-screen' : 'forms-background-more']" v-if="formRows.length > 0">
    <div class="forms-container" v-if="formRows.length > 0">
      <div class="form-row" v-for="(row, index) in formRows" :key="index">
        <form class="result-form" v-for="form in row" :key="form.id">
          <div class="form-column">
            <div class="form-group">
              <label for="calories">Ваша калорийность:</label>
              <input type="text" id="calories" v-model="form.calories" readonly class="input-line">
            </div>
            <div class="form-group">
              <label for="proteins">Белки:</label>
              <input type="text" id="proteins" v-model="form.proteins" readonly class="input-line">
            </div>
            <div class="form-group">
              <label for="fats">Жиры:</label>
              <input type="text" id="fats" v-model="form.fats" readonly class="input-line">
            </div>
            <div class="form-group">
              <label for="carbs">Углеводы:</label>
              <input type="text" id="carbs" v-model="form.carbs" readonly class="input-line">
            </div>
            <div class="form-group">
              <label for="effectiveWeight">Эффективный вес:</label>
              <input type="text" id="effectiveWeight" v-model="form.effectiveWeight" readonly class="input-line">
            </div>
            <div class="form-group">
              <label for="bmi">Индекс массы тела:</label>
              <input type="text" id="bmi" v-model="form.bmi" readonly class="input-line">
            </div>
          </div>
          <div class="form-column">
            <div class="form-group">
              <label for="gender">Пол:</label>
              <input type="text" id="gender" v-model="form.gender" readonly class="input-line">
            </div>
            <div class="form-group">
              <label for="age">Возраст:</label>
              <input type="text" id="age" v-model="form.age" readonly class="input-line">
            </div>
            <div class="form-group">
              <label for="height">Рост в см:</label>
              <input type="text" id="height" v-model="form.height" readonly class="input-line">
            </div>
            <div class="form-group">
              <label for="weight">Вес в кг:</label>
              <input type="text" id="weight" v-model="form.weight" readonly class="input-line">
            </div>
            <div class="form-group">
              <label for="requestTime">Время запроса:</label>
              <input type="text" id="requestTime" v-model="form.requestTime" readonly class="input-line">
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
    <div v-else class="nabla-unique bez_history">
      Y BAC HET ISTORII :(
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import icon from '@/assets/arrow_back_24dp_opsz24.svg';

export default {
  data() {
    return {
      icon: icon,
      formRows: [

]
    };
  },
  methods: {
    goBack() {
      this.$router.push('/data-input');
    },
    fetchDataFromBackend() {
      axios.get('http://127.0.0.1:8000/api/get_history/')
        .then(response => {
          const data = response.data;
          this.formRows = this.chunkArray(data, 2);
        })
        .catch(error => {
          console.error('Ошибка при получении данных с бекенда:', error);
        });
    },
    chunkArray(array, size) {
      const result = [];
      for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
      }
      return result;
    }
  },
  mounted() {
    this.fetchDataFromBackend();
  }
};
</script>

<style scoped>
.full-screen{
  background: rgb(92,44,150);
  background: linear-gradient(0deg, rgba(92,44,150,0.5489845596441701) 0%, rgba(173,239,239,1) 88%);
  height: 78vh;
}
.forms-background-more{
  background: rgb(92,44,150);
  background: linear-gradient(0deg, rgba(92,44,150,0.5489845596441701) 0%, rgba(173,239,239,1) 88%);
  height: 100%;
}

.bez_history{
  border-radius: 10px 10px 10px 10px;
  height: 78vh;
  background: rgb(92,44,150);
  background: linear-gradient(0deg, rgba(92,44,150,0.5489845596441701) 0%, rgba(173,239,239,1) 88%);
}
.icon-button {
  width: 50px;
  height: 50px;
  cursor: pointer;
}

.input-line {
  background: #00000000;
  width: 100%;
  box-sizing: border-box;
  border: none;
  outline: none;
}

.result-form {
  background: rgb(255, 255, 255);
  background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(163,255,230,1) 16%, rgba(0,219,255,1) 100%);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  border: 4px solid #4e7070;
  display: flex;
  justify-content: space-between;
  width: 35%;
  margin: 1%;
}

button {
  width: 7.5%;
  padding: 5px;
  background: rgb(238,174,202);
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
  color: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(19,28,107,1) 0%);
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  margin-left: 5%;
}

.header {
  background: #b285dadf;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -1.5%;
  width: 100%;
  position: relative;
  border-radius: 10px 10px;
}

.header-line {
  content: '';
  display: block;
  width: 100%;
  height: 10px;
  background-color: #4e7070;
  border-radius: 5px 5px 5px 5px;
}

.back-button {
  position: absolute;
  left: 0;
}

.nabla-uniq {
  margin: 0 auto;
}

.forms-container {
  /* background: rgb(92,44,150);
  background: linear-gradient(0deg, rgba(92,44,150,0.5489845596441701) 0%, rgba(173,239,239,1) 88%); */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* height: 100; */
  border-radius: 10px 10px 10px 10px;
}
.back_ground_history{
  background: rgb(92,44,150);
  background: linear-gradient(0deg, rgba(92,44,150,0.5489845596441701) 0%, rgba(173,239,239,1) 88%);
  height: 100%;
}
.form-row {
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-right: 10%;
  margin-left: 10%;
}

.form-column {
  width: 50%;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  margin-right: 10px;
}
</style>


<!-- [
{
  id: 1,
  calories: '2000',
  proteins: '100',
  fats: '70',
  carbs: '250',
  effectiveWeight: '70',
  bmi: '22',
  gender: 'Мужской',
  age: '30',
  height: '180',
  weight: '75',
  requestTime: '2023-10-01 10:00:00'
},
{
  id: 2,
  calories: '1800',
  proteins: '90',
  fats: '60',
  carbs: '220',
  effectiveWeight: '65',
  bmi: '21',
  gender: 'Женский',
  age: '25',
  height: '165',
  weight: '60',
  requestTime: '2023-10-02 11:00:00'
}
],
[
{
  id: 3,
  calories: '2200',
  proteins: '110',
  fats: '80',
  carbs: '270',
  effectiveWeight: '75',
  bmi: '23',
  gender: 'Мужской',
  age: '35',
  height: '185',
  weight: '80',
  requestTime: '2023-10-03 12:00:00'
},
{
  id: 4,
  calories: '1900',
  proteins: '95',
  fats: '65',
  carbs: '230',
  effectiveWeight: '68',
  bmi: '22',
  gender: 'Женский',
  age: '28',
  height: '170',
  weight: '65',
  requestTime: '2023-10-04 13:00:00'
}
] -->