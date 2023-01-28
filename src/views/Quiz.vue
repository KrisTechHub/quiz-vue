<template>
  <div class="container">
    <h2 class="title">{{ title }}</h2>
    <div v-for="(question, index) in questions" :key="question.id">
      <p>{{ question.id }}</p>
      <p>
        {{  question.text  }}
      </p>
      </div>
  </div>
</template>
<script>
import data from '../../data/db'
export default {
  data() {
    return {
      questions: data.questions,
      title: 'True OR False Quiz',
      questionIndex: 0,
    }
  },
  mounted() {
    console.log('sadas', this.questions)
    // fetch('http://localhost:3000/questions')
    // .then(res => res.json())
    // .then(data => this.jobs = data)
    // .catch(err => console.log(err.message))
  },
  computed:{
    userResponses(){return Array(this.quiz.questions.length).fill(false)} 
  },
  methods: {
    next() {
      this.questionIndex++;
    },
    previous() {
      this.questionIndex--;
    },
    score: function() {
      return this.userResponses.filter(function(val) {return val }).length
    }
  }
}

</script>

<style>
.container {
  background: #eaeaebc2;
  position: absolute;
  top: 50%;
  left: 40%;
  margin-top: -200px;
  margin-left: -200px;
  width: 750px;
  height: 440px;
  align-content: center;
  box-shadow: 5px 5px 10px 5px rgba(61, 2, 85, 0.351);
  color: rgb(33, 0, 37);
;
  border-radius: 5px;
}
.title {
  background: #342c59;
  text-align: center;
  margin: 0;
  padding: 10px;
  color: rgba(255, 254, 254, 0.834);
}
</style>