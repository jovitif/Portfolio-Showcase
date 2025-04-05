<template>
    <v-container fluid>
      <h1 class="text-center mb-6">Micro-SaaS</h1>
      <v-row>
        <v-col cols="12" md="4" v-for="project in mobileProjects" :key="project.title">
          <v-card
          class="mx-auto"
          max-width="400"
        >
        <v-img
        class="align-end text-white"
        height="200"
        :src="require(`@/assets/${project.image}`)"
        contain
      >
      
            <v-card-title>{{ project.title }}</v-card-title>
          </v-img>

          <v-card-subtitle class="pt-4">
           {{ project.technologies }}
          </v-card-subtitle>

          <v-card-text>
            <div>{{ project.description }}</div>


          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text="Share"></v-btn>

            <v-btn color="orange" text="Explore"></v-btn>
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
            title: "PrefeituraETL",
            description: "Project developed in partnership with the local government to optimize and facilitate governmental migration operations.",
            technologies: "Python | Flask | PostgreSQL",
            image: "PrefeituraETL.svg",
            alt: "PrefeituraETL",
            githubLink: "https://github.com/jovitif/MusiConnect",
            previewLink: "https://musicconnect.netlify.app/",
          },
          {
            title: "Loucos por Flaskback",
            description: "Pagina de imersão cultural para levar pessoas para um bate papo para ter acesso ao local da cultura focado em musica",
            technologies: "React e firebase",
            image: "logo.png",
            alt: "Quizzefy Image",
            githubLink: "https://github.com/jovitif/Quizzefy-Mobile-App",
            downloadLink: "/src/apks/quizzefy/app-debug.apk",
          },
          {
            title: "Epanouir",
            description: "simular ambiente iterativo de hills de beyond good and evil para ajudar pessoas com ansiedade",
            technologies: "React Native",
            image: "Epanouir.svg",
            alt: "Music Image",
            githubLink: "https://github.com/jovitif/MusiConnect",
            previewLink: "https://musicconnect.netlify.app/",
          },
          {
            title: "Whatsthis",
            description: "App de aprendizagem de ingles para ajudar desenvolvedores a conseguir vaga na",
            technologies: "React Native",
            image: "Whatsthis.svg",
            alt: "Music Image",
            githubLink: "https://github.com/jovitif/MusiConnect",
            previewLink: "https://musicconnect.netlify.app/",
          }
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
