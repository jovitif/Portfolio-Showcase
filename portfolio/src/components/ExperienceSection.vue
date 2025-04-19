<template>
  <v-container id="Experience" class="py-10">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <h2 class="text-center mb-8 text-primary font-weight-bold">Experience</h2>

        <v-timeline align="start" dense>
          <v-timeline-item
            v-for="(experience, index) in experiences"
            :key="index"
            :dot-color="timelineColors[index % timelineColors.length]"
            :icon="experience.icon"
            fill-dot
          >
            <template #opposite>
              <span class="font-weight-medium">{{ experience.period }}</span>
            </template>

            <v-card
              class="pa-4 mb-4 experience-card"
              outlined
              @click="openModal(experience)"
            >
              <v-row
                align="center"
                :class="{
                  'flex-column': $vuetify.display.smAndDown,
                  'flex-row': !$vuetify.display.smAndDown
                }"
              >
                <v-col cols="12" sm="3" class="d-flex justify-center">
                  <v-avatar size="64">
                    <v-img :src="experience.image" cover></v-img>
                  </v-avatar>
                </v-col>

                <v-col cols="12" sm="9" class="text-sm-left text-center">
                  <h3 class="mb-1">{{ experience.title }}</h3>
                  <p class="font-italic mb-1 text-medium-emphasis">{{ experience.company }}</p>
                  <p class="text-body-2">{{ experience.description }}</p>
                </v-col>
              </v-row>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>

    <v-dialog v-model="modalOpen" max-width="600">
      <v-card>
        <v-card-title class="headline">{{ selectedExperience.title }}</v-card-title>
        <v-card-subtitle>
          {{ selectedExperience.company }} - {{ selectedExperience.period }}
        </v-card-subtitle>
        <v-card-text>
          <p>{{ selectedExperience.details }}</p>
          <v-img
            v-for="(img, index) in selectedExperience.images"
            :key="index"
            :src="img"
            class="mb-2"
            height="200"
            contain
          />
          <v-btn
            v-if="selectedExperience.link"
            :href="selectedExperience.link"
            target="_blank"
            color="primary"
            class="mt-4"
          >
            Acessar Aplicação
          </v-btn>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="red" text @click="modalOpen = false">Fechar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>


  <script>
  export default {
    name: "ExperienceSection",
    data() {
      return {
        modalOpen: false,
      selectedExperience: {},
        experiences: [
          {
          title: "Full Stack Developer Intern",
          company: "Prefeitura de Mossoró",
          period: "Ongoing",
          description: "Interned as a full-stack developer at the City Hall of Mossoró, working on bug fixes and improvements for platforms such as Codex and the HR system. Additionally, I am developing a custom ETL tool to streamline the city's data migration processes.",
          icon: "mdi-city",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLU0iIyvG0HAoQBbX2Imiu033LNEL67SoZag&s",
        },
        {
          title: "Research Scholarship",
          company: "Higia Way Project",
          period: "Ongoing",
          description: "Contributed to the development of an AI assistant designed to support pregnant women in their daily routines. Additionally, assisted in debugging and maintaining the clinic’s legacy system.",
          icon: "mdi-robot",
          image: "https://t4.ftcdn.net/jpg/06/01/66/45/360_F_601664574_l72Nqtw5PcIICG1bF8NtzWncWLeh1ida.jpg",
        },
          {
  title: "Volunteer Developer",
  company: "Language Learning AI App",
  period: "Completed",
  description:
    "Contributed to the development of an AI-powered micro-SaaS language learning app, focusing on user engagement features and advanced natural language processing. Impact: helped build a scalable solution for immersive and personalized language acquisition.",
  icon: "mdi-earth",
  image: "https://img.freepik.com/free-vector/rocket-spaceship-cartoon-vector-icon-illustration-science-technology-icon-concept-isolated-flat_138676-9714.jpg?semt=ais_hybrid",
},
          {
            title: "Intern",
            company: "Compass UOL",
            period: "Internship Period",
            description:
              "Acquired hands-on experience with machine learning techniques using AWS and earned the AWS Cloud Practitioner certification. Impact: contributed to the development of an application for tracking lost animals.",
            icon: "mdi-cloud",
            image: "https://s3.sa-east-1.amazonaws.com/remotar-assets-prod/company-profile-pictures/cl7godhi300lz04wgcki4gfxn.jpg",
          },
          {
            title: "Volunteer Instructor",
            company: "University Courses",
            period: "Completed",
            description:
              "Taught basic programming and algorithms to students from various higher education programs. Impact: empowered over 60 students with foundational knowledge in algorithms and computational thinking.",
              icon: "mdi-school",
            image: "https://repositorio.ufersa.edu.br/assets/images/brasao2.png",
          },
       
        ],
        timelineColors: ["red-lighten-2", "purple-lighten-2", "green-lighten-1"],
      };
    },
    methods: {
    openModal(experience) {
      this.selectedExperience = experience;
      this.modalOpen = true;
    },
  },
  };
  </script>

<style scoped>
.experience-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  border-radius: 12px;
  background-color: #fafafa;
}

.experience-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  background-color: #e3f2fd;
}

@media (max-width: 600px) {
  .v-card-title h2 {
    font-size: 22px;
  }

  .experience-card h3 {
    font-size: 18px;
  }

  .experience-card p {
    font-size: 14px;
  }
}
</style>
