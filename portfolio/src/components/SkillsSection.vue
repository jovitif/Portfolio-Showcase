<template>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1 class="text-center">My Skills</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="4" v-for="(skill, index) in skills" :key="index">
          <v-card>
            <v-card-title>{{ skill.name }}</v-card-title>
            <v-card-text>
              <v-progress-linear :model-value="skill.percentage" color="orange" height="20">
                <strong>{{ skill.percentage }}%</strong>
              </v-progress-linear>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>

  <script>
  export default {
    data() {
      return {
        skills: [
          { name: "Node.js", percentage: 50 },
          { name: "Ruby on Rails", percentage: 50 },
          { name: "Flask", percentage: 50 },

          { name: "React", percentage: 50 },
          { name: "Flutter", percentage: 50 },
          { name: "Vuetify", percentage: 80 },
          { name: "AWS", percentage: 50 },

          { name: "MySQL", percentage: 50 },
          { name: "Postgresql", percentage: 50 },

        ],
      };
    },
  };
  </script>

  <style scoped>
  .text-center {
    text-align: center;
  }
  </style>
