<template>
    <v-container id="About" class="pa-10">
      <!-- Profile Section -->
      <v-row class="sectionsobre" align="center" justify="space-between" no-gutters>
        <v-col cols="12" md="4" class="d-flex justify-center">
          <v-card class="card pa-4" elevation="3" max-width="300">
            <v-avatar
              size="120"
              class="ma-auto"
              style="overflow: hidden; object-fit: cover;"
            >
              <v-img
                :src="require('../assets/profile.png')"
                alt="Foto de perfil"
                class="profile-img"
              />
            </v-avatar>
            <v-card-title class="text-h6 text-center">João Vitor Fernandes de Sales</v-card-title>
            <v-card-subtitle class="text-center">DevOps - AWS | Node.js | Tensor Flow | Vue.js | Flutter</v-card-subtitle>
            <v-card-text class="text-center">Computer Science Student</v-card-text>
            <v-card-text class="text-center grey--text">Mossoró, Rio Grande do Norte, Brazil</v-card-text>
          </v-card>
        </v-col>

        <!-- About Section -->
        <v-col cols="12" md="8">
          <v-card class="about pa-6" elevation="3">
            <v-img
              :src="require('../assets/Hand coding.gif')"
              class="my-3"
              contain
              height="200"
            />
            <v-card-title class="text-h6">About Me</v-card-title>
            <v-card-text>
              I am a computer science student starting my 7th semester. I interned at a company called Compass, in partnership with AWS, and I have a strong interest in cloud computing and artificial intelligence. Currently, I am starting a research project aimed at developing an application that uses artificial intelligence to assist in the process of learning English. Additionally, I have also been focusing on developing personal projects.
            </v-card-text>
            <v-card-actions>
              <div class="social-info">
                <p>How to Contact Me</p>
                <v-btn icon href="mailto:joaosales911@gmail.com">
                  <v-img src="../assets/email.png" alt="email" width="24" />
                </v-btn>
                <v-btn icon href="https://www.linkedin.com/in/joaofdsales/" target="_blank">
                  <v-img src="../assets/linkedin.png" alt="linkedin" width="24" />
                </v-btn>
                <v-btn icon href="https://github.com/jovitif" target="_blank">
                  <v-img src="../assets/github.png" alt="github" width="24" />
                </v-btn>
                <v-btn icon href="https://instagram.com/joaofdsales/" target="_blank">
                  <v-img src="../assets/instagram.png" alt="instagram" width="24" />
                </v-btn>
              </div>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>

  <script>
  export default {
    name: "AboutSection"
  };
  </script>

  <style scoped>
  .sectionsobre {
    flex-direction: row;
    flex-wrap: wrap;
  }
  .card {
    transition: transform 0.3s ease;
    color: #171717;
  }
  .card:hover,
  .social-info v-btn:hover {
    transform: scale(1.05);
  }
  .about {
    background-color: #ffffff;
    border-radius: 10px;
    text-align: justify;
    height: 100%; /* Mantém a mesma altura do card de perfil */
  }
  .profile-img {
    width: 100%;  /* Ajusta a largura da imagem */
    height: auto; /* Mantém a proporção da imagem */
    object-fit: cover; /* Cobre o espaço do avatar */
  }
  .social-info img {
    margin: 10px;
  }
  @media screen and (max-width: 768px) {
    .sectionsobre {
      flex-direction: column;
      align-items: center;
    }
    .about {
      margin: 20px;
    }
  }
  </style>
