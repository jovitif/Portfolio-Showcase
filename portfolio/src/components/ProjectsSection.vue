<template>
    <v-container id="Projects" fluid>
      <h1 class="text-center mb-6">Micro-SaaS</h1>
      <v-row>
        <v-col cols="12" md="4" v-for="project in mobileProjects" :key="project.title">
          <v-card
          class="mx-auto zoom-on-hover"
          max-width="400"
        >
        <v-img
        class="align-end text-white ml-7"
        height="350"
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
<!-- Isso é um comentário em HTML e aparecerá no DOM 
           <v-card-actions>
            <v-btn color="orange" text="Share"></v-btn>

            <v-btn color="orange" text="Explore"></v-btn>
          </v-card-actions>
-->


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
            image: "Prefeitura.svg",
            alt: "PrefeituraETL",
            githubLink: "",
            previewLink: "",
          },
          {
            title: "Loucos por Flaskback",
            description: "A cultural immersion page that invites users to join a conversation and gain access to a music-focused cultural space.",
            technologies: "React.js | Firebase",
            image: "Loucos.svg",
            alt: "Quizzefy Image",
            githubLink: "",
            downloadLink: "",
          },
          {
            title: "Epanouir",
            description: "Create an interactive environment that helps individuals with anxiety disorders relax, unwind, and become the best version of themselves.",
            technologies: "React Native | Node.js",
            image: "Epanouir.svg",
            alt: "Music Image",
            githubLink: "",
            previewLink: "",
          },
          {
            title: "Whatsthis",
            description: "Empowering software developers to learn English and unlock opportunities in the global tech industry.",
            technologies: "React Native | Node.js",
            image: "Whatsthis.svg",
            alt: "Music Image",
            githubLink: "",
            previewLink: "",
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

  .zoom-on-hover {
  transition: transform 0.3s ease;
}

.zoom-on-hover:hover {
  transform: scale(1.05);
  z-index: 2;
}
  </style>
