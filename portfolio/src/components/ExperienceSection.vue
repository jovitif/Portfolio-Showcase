<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card class="mb-6">
            <v-card-title>
              <h2>Experience</h2>
            </v-card-title>
            <v-card-text>
              <!-- Timeline -->
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
                  <v-card outlined class="pa-4">
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
    </v-container>
  </template>

  <script>
  export default {
    name: "ExperienceSection",
    data() {
      return {
        experiences: [
            {
          title: "Full Stack Developer Intern",
          company: "Prefeitura de Mossoró",
          period: "Ongoing",
          description:
            "Working as a full stack developer, contributing to software solutions for public services.",
          icon: "mdi-city",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLU0iIyvG0HAoQBbX2Imiu033LNEL67SoZag&s",
        },
          {
            title: "Research Scholarship",
            company: "Higia Way Project",
            period: "Ongoing",
            description:
              "Contributed to the development of a chatbot aimed at assisting pregnant women.",
            icon: "mdi-robot",
            image: "https://t4.ftcdn.net/jpg/06/01/66/45/360_F_601664574_l72Nqtw5PcIICG1bF8NtzWncWLeh1ida.jpg",
          },
          {
  title: "Volunteer Developer",
  company: "Language Learning AI App",
  period: "Completed",
  description:
    "Contributed to the development of an AI-powered language learning app, focusing on features that enhance user engagement and natural language processing.",
  icon: "mdi-earth",
  image: "https://img.freepik.com/free-vector/rocket-spaceship-cartoon-vector-icon-illustration-science-technology-icon-concept-isolated-flat_138676-9714.jpg?semt=ais_hybrid",
}
,
          {
            title: "Intern",
            company: "Compass UOL",
            period: "Internship Period",
            description:
              "Learned about machine learning techniques using AWS and obtained the AWS Cloud Practitioner certification.",
            icon: "mdi-cloud",
            image: "https://s3.sa-east-1.amazonaws.com/remotar-assets-prod/company-profile-pictures/cl7godhi300lz04wgcki4gfxn.jpg",
          },
          {
            title: "Volunteer Instructor",
            company: "University Courses",
            period: "Completed",
            description:
              "Taught basic programming and algorithms to students from other higher education courses.",
            icon: "mdi-school",
            image: "https://repositorio.ufersa.edu.br/assets/images/brasao2.png",
          },
        ],
        timelineColors: ["red-lighten-2", "purple-lighten-2", "green-lighten-1"],
      };
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
  </style>
