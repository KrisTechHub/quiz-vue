<template>
   
    <form @submit.prevent="handleSubmit">
      <h1>Participant Details</h1> 
      <label>Email:</label>
      <input type="email" required v-model="email" placeholder="Enter your email address..">

      <label>Password:</label>
      <input type="password" required v-model="password" placeholder="Your password must be at least 8 characters">
      <div class="error" v-if="passwordError">{{ passwordError }}</div>

      <label>Role: </label>
      <select v-model="role">
          <option value="select">Please select..</option>
          <option value="developer">Web Developer</option>
          <option value="designer">Web Designer</option>
          <option value="software-engineer">Software Engineer</option>
          <option value="programmer">Programmer</option>
          <option value="data-scientist">Data Scientist</option>
          <option value="farmer">Farmer</option>
          <option value="fisherman">Fisherman</option>
          <option value="Politician">Politician</option>
          <option value="Businessman">Entrepreneur</option>
          <option value="Lawyer">Lawyer</option>
          <option value="Physician">Physician</option>
          <option value="other">Other</option>
      </select>

      <label>Skills:</label>
      <input type="text" v-model="tempSkill"  @keyup.alt="addSkill"> <!--keyboard event-->
      <p class="info">Press <strong><i>alt + ,</i></strong> to add skill. Click on skill to <strong><i>Delete</i></strong></p>
      <div v-for="skill in skills" :key="skill" class="pill">
        <span @click="deleteSkill(skill)">{{ skill }}</span>
      </div>

      <div class="terms">
          <input type="checkbox" v-model="terms" required>
          <label>Accept Terms and Conditions</label>
      </div>

      <div class="submit">
          <button>Create an account</button>
      </div>
    </form>
    
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '', 
            role: 'select',
            terms: false,
            /* names: [], */
            tempSkill: '',
            skills: [],
            passwordError: ''
        }
    },
    methods: {
        addSkill(e) {
            if (e.key === ',' && this.tempSkill) {
                if(!this.skills.includes(this.tempSkill)){
                    this.skills.push(this.tempSkill)
                }
                this.tempSkill = ''
            }
        },
        deleteSkill(skill) {
            this.skills = this.skills.filter((item) => {
                return skill !==item
            })
        },
        handleSubmit(e) {
            // validate password
            this.$router.push({name: 'Quiz'})
            this.passwordError = this.password.length > 7 ? '' 
            : 'Password must be 8 characters long'

            if(!this.passwordError) {
                console.log('email: ', this.email)
                console.log('password: ', this.password)
                console.log('role: ', this.role)
                console.log('skills: ', this.skills)
                console.log('terms accepted: ', this.terms)
            }
        }
    }
}
</script>

<style>
    form {
        max-width: 420px;
        margin: 100px auto;
        background: #eaeaebc2;
        text-align: left;
        padding: 40px;
        border-radius: 10px;
    }
    h1 {
        padding-bottom: 50px;
        text-align: center;
        font-size: larger;
    }
    label {
        color: rgb(33, 0, 37);
        display: inline-block;
        font-size: 0.7em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
        margin: 20px auto 5px auto;
    }
    input, select {
        display: block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #ddd;
        color: #555;
        border-radius: 5px;
    }
    input[type="checkbox"] {
        display: inline-block;
        width: 16px;
        margin: 0 10px 0 0;
        position: relative;
        top: 3px;
    }
    .pill {
        display: inline-block;
        margin: 20px 10px 0 0;
        padding: 6px 12px;
        background: #eee;
        border-radius: 20px;
        font-size: 12px;
        letter-spacing: 1px;
        font-weight: bold;
        color: #777;
        cursor: pointer;
    }
    button {
        border: 0;
        padding: 10px 20px;
        margin-top: 20px;
        color: white;
        border-radius: 20px;
    }
    .submit {
        text-align: center;
    }
    .error {
        font-size: 0.8em;
        color: crimson;
        margin-top: 10px;
        font-weight: bold;
    }
    .info {
      margin: -10px auto auto -70px;
      font-size: 10px;
    }
    .submit {
      font-size: 12px;
    }
</style>