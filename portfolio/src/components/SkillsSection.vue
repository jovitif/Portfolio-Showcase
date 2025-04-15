<template>
  <v-container class="d-flex align-center justify-center fill-height text-center">
    <div>
      <h1>My Skills</h1>
      <v-row>
        <v-col cols="12" sm="6" md="4" v-for="(skill, index) in skills" :key="index">
          <v-card>
            <v-card-title>{{ skill.name }}</v-card-title>
            <v-card-text>
              <v-progress-linear :model-value="skill.percentage" color="blue" height="20">
                <strong>{{ skill.percentage }}%</strong>
              </v-progress-linear>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <div>
      <h1>Languages</h1>
      <v-row>
        <v-col cols="12" sm="6" v-for="(language, index) in languages" :key="index">
          <v-card>
            <v-card-title>{{ language.name }}</v-card-title>
            <v-card-text>
              <v-progress-linear :model-value="language.percentage" color="blue" height="20">
                <strong>{{ language.percentage }}%</strong>
              </v-progress-linear>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { name: "Python", percentage: 90 },
        { name: "PostgreSQL", percentage: 90 },
        { name: "Node.js", percentage: 80 },
        { name: "AWS", percentage: 80 },
        { name: "Ruby on Rails", percentage: 70 },
        { name: "React.js", percentage: 60 },
        { name: "N8N", percentage: 60 },
        { name: "React Native", percentage: 60 },
      ],
      languages:[
        { name: "Portugueses", percentage: 100 },
        { name: "English", percentage: 80 },
        { name: "Spanish", percentage: 60 },
      ],
    };
  },
};
</script>

<style scoped>
.fill-height {
  height: 100vh;
}
.text-center h1 {
  margin-bottom: 20px;
}
</style>
