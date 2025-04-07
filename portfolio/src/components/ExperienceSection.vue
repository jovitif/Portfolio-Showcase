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
          description: "Trabalhando como full stack developer...",
          details: "Detalhamento completo do projeto...",
          link: "https://codex.mossoro.rn.gov.br/",
          images: [
            "https://prefeiturademossoro.com.br/uploads/thumbnails/zln4ush8htfy3zn8b6mhl66cs6x5mr.jpeg",
            "https://prefeiturademossoro.com.br/uploads/thumbnails/0o0dt90okftiyysszqdptnprlugmxu.jpeg",
            "https://prefeiturademossoro.com.br/uploads/thumbnails/0o0dt90okftiyysszqdptnprlugmxu.jpeg",

          ],
          icon: "mdi-city",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLU0iIyvG0HAoQBbX2Imiu033LNEL67SoZag&s",
        },
        {
          title: "Research Scholarship",
          company: "Higia Way Project",
          period: "Ongoing",
          description: "Contribuí no desenvolvimento de um chatbot...",
          details: "Mais informações sobre o impacto do projeto...",
          link: "https://example.com/projeto2",
          images: [
            "https://via.placeholder.com/300x200",
            "https://via.placeholder.com/300x200",
          ],
          icon: "mdi-robot",
          image: "https://t4.ftcdn.net/jpg/06/01/66/45/360_F_601664574_l72Nqtw5PcIICG1bF8NtzWncWLeh1ida.jpg",
        },
          {
  title: "Volunteer Developer",
  company: "Language Learning AI App",
  period: "Completed",
  description:
    "Contributed to the development of an AI-powered language learning app, focusing on features that enhance user engagement and natural language processing. Impacto: desnvolvimento de um microsaas de aprendizagem de idiomas",
  icon: "mdi-earth",
  image: "https://img.freepik.com/free-vector/rocket-spaceship-cartoon-vector-icon-illustration-science-technology-icon-concept-isolated-flat_138676-9714.jpg?semt=ais_hybrid",
}
,
          {
            title: "Intern",
            company: "Compass UOL",
            period: "Internship Period",
            description:
              "Learned about machine learning techniques using AWS and obtained the AWS Cloud Practitioner certification. Impacto: desenvolvimento de uma aplicação de rastreio de animais perdidos",
            icon: "mdi-cloud",
            image: "https://s3.sa-east-1.amazonaws.com/remotar-assets-prod/company-profile-pictures/cl7godhi300lz04wgcki4gfxn.jpg",
          },
          {
            title: "Volunteer Instructor",
            company: "University Courses",
            period: "Completed",
            description:
              "Taught basic programming and algorithms to students from other higher education courses. Impacto desenvolvido: aprendizagem de mais de 60 alunos sobre algoritmo",
              details: "Taught basic programming and algorithms to students from other higher education courses. Impacto desenvolvido: aprendizagem de mais de 60 alunos sobre algoritmo",

              icon: "mdi-school",
            image: "https://repositorio.ufersa.edu.br/assets/images/brasao2.png",
            link: "https://codex.mossoro.rn.gov.br/",
          images: [
            "https://prefeiturademossoro.com.br/uploads/thumbnails/zln4ush8htfy3zn8b6mhl66cs6x5mr.jpeg",
            "https://prefeiturademossoro.com.br/uploads/thumbnails/0o0dt90okftiyysszqdptnprlugmxu.jpeg",
            "https://prefeiturademossoro.com.br/uploads/thumbnails/0o0dt90okftiyysszqdptnprlugmxu.jpeg",

          ],
          },
          {
            title: "In-Person Training on Cloud Services, AI, and Swift",
            company: "Hackatruck",
            period: "Completed",
            description:
              "Hands-on Practice with Cloud Services Using Swift, with Emphasis on Cognitive Services",
              details: "I learned several important technologies during one month of training, such as mobile app development using Swift and working with IBM Cloud services. This course was very valuable to me as it provided a solid introduction to artificial intelligence and cloud computing.",

              icon: "mdi-school",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAWNtNcSWBpooHj2vf_XvDXGMI5HQemG3FDA&s",
            link: "https://codex.mossoro.rn.gov.br/",
          images: [
            "https://prefeiturademossoro.com.br/uploads/thumbnails/zln4ush8htfy3zn8b6mhl66cs6x5mr.jpeg",
            "https://prefeiturademossoro.com.br/uploads/thumbnails/0o0dt90okftiyysszqdptnprlugmxu.jpeg",
            "https://prefeiturademossoro.com.br/uploads/thumbnails/0o0dt90okftiyysszqdptnprlugmxu.jpeg",

          ],
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
