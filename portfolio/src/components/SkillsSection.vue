<template>
  <v-container id="Skills" class="py-12">
    <v-row class="text-center mb-8">
      <v-col cols="12">
        <h1 class="text-h4 font-weight-bold mb-4">My Skills</h1>
        <v-divider class="mx-auto" style="width: 60px;"></v-divider>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col
        v-for="(skill, index) in skills"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        class="d-flex"
      >
        <v-card class="rounded-xl elevation-3 w-100">
          <v-card-title class="text-h6 font-weight-medium">{{ skill.name }}</v-card-title>
          <v-card-text>
            <v-progress-linear
              :model-value="skill.percentage"
              color="indigo"
              height="20"
              rounded
              striped
              stream
              class="mb-2"
            >
              <template #default>
                <strong class="white--text">{{ skill.percentage }}%</strong>
              </template>
            </v-progress-linear>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="text-center mt-12 mb-8">
      <v-col cols="12">
        <h1 class="text-h4 font-weight-bold mb-4">Languages</h1>
        <v-divider class="mx-auto" style="width: 60px;"></v-divider>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col
        v-for="(language, index) in languages"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        class="d-flex"
      >
        <v-card class="rounded-xl elevation-3 w-100">
          <v-card-title class="text-h6 font-weight-medium">{{ language.name }}</v-card-title>
          <v-card-text>
            <v-progress-linear
              :model-value="language.percentage"
              color="deep-purple accent-4"
              height="20"
              rounded
              striped
              stream
              class="mb-2"
            >
              <template #default>
                <strong class="white--text">{{ language.percentage }}%</strong>
              </template>
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
        { name: "Python", percentage: 90 },
        { name: "PostgreSQL", percentage: 90 },
        { name: "Node.js", percentage: 80 },
        { name: "AWS", percentage: 80 },
        { name: "Ruby on Rails", percentage: 70 },
        { name: "React.js", percentage: 60 },
        { name: "N8N", percentage: 60 },
        { name: "React Native", percentage: 60 },
      ],
      languages: [
        { name: "Portuguese", percentage: 100 },
        { name: "English", percentage: 80 },
        { name: "Spanish", percentage: 60 },
      ],
    };
  },
};
</script>

<style scoped>
.text-h4 {
  font-size: 2rem;
}
</style>
