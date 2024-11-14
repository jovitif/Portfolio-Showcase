<template>
    <v-container fluid>
      <h2 class="text-center mb-6">Mobile Apps</h2>
      <v-row>
        <v-col cols="12" md="4" v-for="project in mobileProjects" :key="project.title">
          <v-card class="mb-6" elevation="2">
            <v-img :src="require(`@/assets/${project.image}`)" height="200px" :alt="project.alt" />
            <v-card-title class="text-h6 text-center">{{ project.title }}</v-card-title>
            <v-card-subtitle class="text-center">{{ project.description }}</v-card-subtitle>
            <v-card-text class="text-center">Technologies: {{ project.technologies }}</v-card-text>
            <v-card-actions class="justify-center">
              <v-btn :href="project.githubLink" target="_blank" color="primary" text>Project on GitHub</v-btn>
              <v-btn v-if="project.downloadLink" :href="project.downloadLink" color="secondary" text>Download APK</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <h2 class="text-center mb-6">Web Apps</h2>
      <v-row>
        <v-col cols="12" md="4" v-for="project in webProjects" :key="project.title">
          <v-card class="mb-6" elevation="2">
            <v-img :src="require(`@/assets/${project.image}`)" height="200px" :alt="project.alt" />
            <v-card-title class="text-h6 text-center">{{ project.title }}</v-card-title>
            <v-card-subtitle class="text-center">{{ project.description }}</v-card-subtitle>
            <v-card-text class="text-center">Technologies: {{ project.technologies }}</v-card-text>
            <v-card-actions class="justify-center">
              <v-btn :href="project.githubLink" target="_blank" color="primary" text>Project on GitHub</v-btn>
              <v-btn v-if="project.previewLink" :href="project.previewLink" target="_blank" color="secondary" text>Preview</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>

  <script>
  export default {
    name: "ProjectsSection",
    data() {
      return {
        mobileProjects: [
          {
            title: "Quizzefy",
            description: "Project developed for the mobile development course",
            technologies: "Flutter",
            image: "logo.png",
            alt: "Quizzefy Image",
            githubLink: "https://github.com/jovitif/Quizzefy-Mobile-App",
            downloadLink: "/src/apks/quizzefy/app-debug.apk",
          },
          {
            title: "App de Imoveis",
            description: "Project developed independently",
            technologies: "Flutter",
            image: "MusicConnect.png",
            alt: "Music Image",
            githubLink: "https://github.com/jovitif/MusiConnect",
            previewLink: "https://musicconnect.netlify.app/",
          },
          {
            title: "Musiconnect",
            description: "Project developed independently",
            technologies: "Flutter",
            image: "MusicConnect.png",
            alt: "Music Image",
            githubLink: "https://github.com/jovitif/MusiConnect",
            previewLink: "https://musicconnect.netlify.app/",
          },
        ],
        webProjects: [
          {
            title: "HabitLex",
            description: "Intelligent habit-generating application",
            technologies: "HTML, CSS, JavaScript, Flask",
            image: "habitos.png",
            alt: "Habit image",
            githubLink: "https://github.com/jovitif/HabitLex",
          },
          {
            title: "Sintonized",
            description: "Audio Synthesis Application With Artificial Intelligence",
            technologies: "Vue.js & AWS",
            image: "sintonized.png",
            alt: "Sintonized",
            githubLink: "https://github.com/jovitif/Test-Generator-System",
            previewLink: "https://github.com/jovitif/Test-Generator-System",
          },
          {
            title: "MusiConnect",
            description: "Project developed independently",
            technologies: "Spring & Vue",
            image: "MusicConnect.png",
            alt: "Music Image",
            githubLink: "https://github.com/jovitif/MusiConnect",
            previewLink: "https://musicconnect.netlify.app/",
          },

        ],
      };
    },
  };
  </script>

  <style scoped>
  .text-center {
    text-align: center;
  }

  h2 {
    font-weight: bold;
  }

  .mb-6 {
    margin-bottom: 24px;
  }
  </style>
