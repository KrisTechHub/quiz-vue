<template>
  <div class="frame">
      <div>
          <img :src="image" alt="quiz-logo">
      </div>
      <h1>{{ title }}</h1>
      <p>{{subHeader}}</p>
      <h4>{{ questions }}</h4>
      <button @click="userDetails">ENTER USER DETAILS</button>
      <button @click="quizStart">START QUIZ</button>
  </div>
</template>

<script>
import image from '@/assets/logo2.png'

export default {
  name: 'Home',
  data() {
      return {
          title: 'True or False Quiz',
          subHeader: 'Select TRUE or FALSE from the following questions. Each correct answer will be 1 point.',
          questions: '10 Questions',
          image: image,
      }
  },
  methods: {
    userDetails() {
      this.$router.push({path: 'UserInfo' })
      },
    quizStart() {
      this.$router.push({path: 'Quiz'})
    }
  }
}
</script>

<style>
.frame {
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
  border-radius: 10px;
  font-family: Arial, Helvetica, sans-serif;

}
h1 {
color: rgb(52, 1, 57);
padding: 30px;
text-shadow: 10px purple;
margin: -55px;
}
h4 {
  font-weight: 100;
  margin-top: -10px;
}
p {
font-size: 1.2em;
padding: 15px 70px;
}
button {
position: inline-block;
background: #3c3366e8;
color: white;
box-shadow: 5px 5px 10px 5px rgba(61, 2, 85, 0.351);
border-radius: 5px;
border: none;
padding: 10px;
margin: 10px;
font-family: 'Courier New', Courier, monospace;
font-weight: 500;
font-size: 1.3em;
cursor: pointer;
}
button:hover {
  background: #332b57;
  box-shadow: 5px 5px 10px 8px rgba(162, 12, 221, 0.351);
}
img {
  width: 200px;
}

</style>