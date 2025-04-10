<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="mb-6">
          <v-card-title>
            <h2>Experience</h2>
          </v-card-title>
          <v-card-text>
            <v-timeline align-top>
              <v-timeline-item
                v-for="(experience, index) in experiences"
                :key="index"
                :dot-color="timelineColors[index % timelineColors.length]"
                :icon="experience.icon"
                fill-dot
              >
                <template #opposite>
                  <strong>{{ experience.period }}</strong>
                </template>
                <v-card 
                  outlined 
                  class="pa-4 experience-card" 
                  @click="openModal(experience)"
                >
                  <v-row>
                    <v-col cols="3">
                      <v-avatar size="64">
                        <img
                          :src="experience.image"
                          alt="Experience image"
                          style="object-fit: contain; width: 100%; height: 100%;"
                        />
                      </v-avatar>
                    </v-col>
                    <v-col cols="9">
                      <v-card-title>
                        <span>{{ experience.title }}</span>
                      </v-card-title>
                      <v-card-subtitle>
                        <strong>{{ experience.company }}</strong>
                      </v-card-subtitle>
                      <v-card-text>
                        <p>{{ experience.description }}</p>
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog v-model="modalOpen" max-width="600">
      <v-card>
        <v-card-title class="headline">{{ selectedExperience.title }}</v-card-title>
        <v-card-subtitle>{{ selectedExperience.company }} - {{ selectedExperience.period }}</v-card-subtitle>
        <v-card-text>
          <p>{{ selectedExperience.details }}</p>
          <v-img
            v-for="(img, index) in selectedExperience.images"
            :key="index"
            :src="img"
            class="mb-2"
            height="200"
            contain
          ></v-img>
          <v-btn v-if="selectedExperience.link" :href="selectedExperience.link" target="_blank" color="primary">
            Acessar Aplicação
          </v-btn>
        </v-card-text>
        <v-card-actions>
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
.v-card-title h2 {
  color: #0a66c2;
  text-align: center;
  margin: 0;
}

.v-card {
  background-color: #f5f5f5;
  border-radius: 10px;
}

.v-timeline-item {
  margin-bottom: 20px;
}

.v-card.experience-card {
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  cursor: pointer;
}

.v-card.experience-card:hover {
  transform: scale(1.05);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  background-color: #e3f2fd;
}
</style>
