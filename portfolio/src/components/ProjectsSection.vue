<template>
    <v-container fluid>
      <h2 class="text-center mb-6">Mobile Apps</h2>
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
            cover
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
            title: "House Rental",
            description: "Project developed independently",
            technologies: "Flutter",
            image: "MusicConnect.png",
            alt: "Music Image",
            githubLink: "https://github.com/jovitif/MusiConnect",
            previewLink: "https://musicconnect.netlify.app/",
          },
          {
            title: "Whatsthis",
            description: "Project developed for the mobile development course",
            technologies: "Flutter",
            image: "logo.png",
            alt: "Quizzefy Image",
            githubLink: "https://github.com/jovitif/Quizzefy-Mobile-App",
            downloadLink: "/src/apks/quizzefy/app-debug.apk",
          },
          {
            title: "Epanouir",
            description: "Project developed independently",
            technologies: "Flutter",
            image: "MusicConnect.png",
            alt: "Music Image",
            githubLink: "https://github.com/jovitif/MusiConnect",
            previewLink: "https://musicconnect.netlify.app/",
          },
          {
            title: "Musiconnect App",
            description: "Project developed independently",
            technologies: "Flutter",
            image: "MusicConnect.png",
            alt: "Music Image",
            githubLink: "https://github.com/jovitif/MusiConnect",
            previewLink: "https://musicconnect.netlify.app/",
          },
          {
            title: "Timeless: A Journey Through Brazilian History.",
            description: "Project developed independently",
            technologies: "Flutter",
            image: "time.png",
            alt: "Game",
            githubLink: "https://github.com/jovitif/MusiConnect",
            previewLink: "https://musicconnect.netlify.app/",
          },
        ],
        webProjects: [
          {
            title: "Employee Management System",
            description: "This system was developed as part of the selection process for an internship position at the City Hall of Mossoró.",
            technologies: "Ruby on Rails",
            image: "mossoro.png",
            alt: "Mossoró",
            githubLink: "https://github.com/jovitif/Sistema-de-Gerenciamento-de-Funcionarios",
            previewLink: "https://youtu.be/GGWKiih91Oo",
          },
          {
            title: "Higia Way",
            description: "Gamified Chatbot for monitoring and Learning about pregnancy",
            technologies: "React.js and Node.js",
            image: "higia.png",
            alt: "Higia Way image",
          },
          {
            title: "Lost Pet Reunion Solution",
            description: "Project developed independently",
            technologies: "Spring & Vue",
            image: "MusicConnect.png",
            alt: "Music Image",
            githubLink: "https://github.com/jovitif/MusiConnect",
            previewLink: "https://musicconnect.netlify.app/",
          },
          {
            title: "DietFitAI",
            description: "Project developed independently",
            technologies: "Node.js, React.js, PostgreSQL",
            image: "saude.png",
            alt: "Music Image",
            githubLink: "https://github.com/jovitif/MusiConnect",
            previewLink: "https://musicconnect.netlify.app/",
          },

          {
            title: "Guitar Hero | Sintonized | Aprender Musica",
            description: "Project developed independently",
            technologies: "Flutter",
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
