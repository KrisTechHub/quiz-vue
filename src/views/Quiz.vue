<template>
  <div class="container">
    <h2 class="title">{{ title }}</h2>
      <div class="correctAnswers">
      You have <strong>{{ score() }} </strong>  correct {{ pluralizeAnswer }}!
      </div>
    <div v-for="(question, index) in questions" :key="question.id">
      <div v-show="index === questionIndex">
        <h5>Question number {{ question.id }} out of 10</h5>
        <h2>{{  question.text  }}</h2>
        <div class="radio-button"> 
          <li v-for="response in question.responses" :key="response.text">
              <input required type="radio" id="radio1" :value="response.text" :name="index" v-model="userResponses[index]">
              <label for="radio1">{{ response.text }}</label>
          </li>
          <div class="btn">
            <button v-if="questionIndex > 0" class="prevnext next" @click="prev">Prev</button>
            <button class="prevnext prev" @click="next">Next</button>
          </div>
        </div>
      </div>
    </div>
        <div v-show="questionIndex === questions.length">
            <h2>You completed the Quiz!</h2>
            <button v-on:click="finalScore">View your total score!</button>
            <p>Total score: {{ score() }}/{{ questions.length }}</p>
            <p class="rank">{{ rank }}</p>
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
      index: 0,
      rank: null
    };
  },
  computed: {
    userResponses: function() {
      return Array(this.questions.length).fill(false)
    },
    pluralizeAnswer() {
      return this.score === 1 ? "answer" : "answers"
    }
  },
  mounted() {
    if (this.score < 8 || this.score > 5) {
      this.rank = 'Sorry. Please try again.'
    } else if (this.score == 8 || this.score < 11) {
      this.rank = 'Congratulations! You Passed!'
    } else {
      this.rank = 'Please know your family more...'
    }
  },
  methods: {
    next() {
      this.questionIndex++;
    },
    prev() {
      this.questionIndex--;
    },
    score: function() {
      return this.userResponses.filter(function(val) {
        return val }).length;
    }
  }
}

</script>

<style scoped>
.container {
  background: #eaeaebc2;
  position: absolute;
  top: 50%;
  left: 40%;
  margin-top: -200px;
  margin-left: -200px;
  width: 750px;
  height: 340px;
  align-content: center;
  box-shadow: 5px 5px 10px 5px rgba(61, 2, 85, 0.351);
  color: rgb(33, 0, 37);
  border-radius: 5px;
}
.correctAnswers {
  margin: 10px;
}
.title {
  background: #342c59;
  text-align: center;
  margin: 0;
  padding: 10px;
  color: rgba(255, 254, 254, 0.834);
}
li {
  display: inline-block;
}
 .radio-button input[type="radio"] {
        display: hidden;
        margin: auto 10px;
      }   
      .radio-button label {
        display: inline-block;
        background-color: #d1d1d1;
        padding: 10px 40px;
        margin: 5px 5px;
        font-family: sans-serif, Arial;
        font-size: 16px;
        border: 1px solid #342c59;
        border-radius: 4px;
      }
      .radio-button label:hover {
        background-color: #342c59;
        color: #d1d1d1;
      }
      .radio-button input[type="radio"]:focus{
        border: 2px dashed #342c59;
      }
      .radio-button input[type="radio"]:checked + label{
        background-color: #342c59;
        color: #d1d1d1;
      }   
.prevnext {
  font-size: 15px;
  background: none;
  color: #342c59;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 5px;
  box-shadow: none;
}
.prevnext:active {
  background-color: #342c59;
  color: white;
  box-shadow: none;
}
.prevnext:hover {
  background-color: #342c59;
  color: white;
}
.next {
  margin-right: 500px;
}
</style>