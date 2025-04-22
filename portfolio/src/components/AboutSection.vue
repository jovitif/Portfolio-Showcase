<template>
  <v-container id="About" class="py-10">
    <!-- Profile Section -->
    <v-row class="sectionsobre" align="center" justify="space-around">
      <v-col cols="12" md="4" class="d-flex justify-center">
        <v-card
        class="card pa-4"
        elevation="3"
        max-width="100%"
        style="width: 100%; max-width: 350px; background-color: #2196f3; color: white;"
      >
        <v-avatar size="120" class="d-flex justify-center align-center ma-auto">
          <v-img
            :src="require('../assets/profile.png')"
            alt="Profile Picture"
            class="profile-img"
          />
        </v-avatar>
      
        <v-card-title class="text-h6 text-center font-weight-bold mt-4">
          João Vitor Fernandes de Sales
        </v-card-title>
      
        <v-card-subtitle class="text-center d-flex justify-center align-center" style="color: white;">
          <v-icon class="mr-1" color="white">mdi-robot</v-icon>
          Software Engineer
          <v-icon class="ml-1" color="white">mdi-robot</v-icon>
        </v-card-subtitle>
      
        <v-card-text class="text-center">
          Bachelor's Degree in Computer Science
        </v-card-text>
      
        <v-card-text class="text-center" style="color: white;">
          Mossoró, Rio Grande do Norte, Brazil
        </v-card-text>
      
        <!-- Botão de Download do Currículo -->
        <v-card-actions class="d-flex justify-center mt-4">
          <a
            href="/Resume_Joao_Sales.pdf"
            download="Resume_Joao_Sales.pdf"
            target="_blank"
          >
            <v-btn color="white" text>
              <v-icon left>mdi-download</v-icon>
              Download CV
            </v-btn>
          </a>
        </v-card-actions>
      </v-card>
      
      
      </v-col>

      <!-- About Section -->
      <v-col cols="12" md="7">
        <v-card class="about pa-6" elevation="3">
          <v-img
            :src="require('../assets/Innovation.gif')"
            contain
            height="200"
            class="rounded"
            alt="Innovation Animation"
          />
          <v-card-title class="text-h6 font-weight-bold mt-4">About Me</v-card-title>
          <v-card-text>
            I am a Software Engineer with experience in developing web and mobile applications that leverage artificial intelligence. I have worked on projects, including initiatives for my city's municipality, showcasing practical applications of AI. Additionally, I have strong knowledge of cloud technologies, enabling scalable and efficient solutions.
          </v-card-text>

          <v-divider class="my-4"></v-divider>

          <v-card-title class="text-h6 font-weight-bold">How to Contact Me</v-card-title>
          <v-card-actions class="social-info justify-center">
            <v-tooltip top>
              <template #activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on" href="mailto:joaosales911@gmail.com" aria-label="Email">
                  <v-img src="../assets/email.png" alt="email" width="24" />
                </v-btn>
              </template>
              <span>Email</span>
            </v-tooltip>

            <v-tooltip top>
              <template #activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on" href="https://www.linkedin.com/in/joaofdsales/" target="_blank" aria-label="LinkedIn">
                  <v-img src="../assets/linkedin.png" alt="linkedin" width="24" />
                </v-btn>
              </template>
              <span>LinkedIn</span>
            </v-tooltip>

            <v-tooltip top>
              <template #activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on" href="https://github.com/jovitif" target="_blank" aria-label="GitHub">
                  <v-img src="../assets/github.png" alt="github" width="24" />
                </v-btn>
              </template>
              <span>GitHub</span>
            </v-tooltip>

            <v-tooltip top>
              <template #activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on" href="https://instagram.com/joaofdsales/" target="_blank" aria-label="Instagram">
                  <v-img src="../assets/instagram.png" alt="instagram" width="24" />
                </v-btn>
              </template>
              <span>Instagram</span>
            </v-tooltip>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AboutSection",
};
</script>

<style scoped>
.sectionsobre {
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 16px;
  background-color: #fafafa;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 10px 24px rgba(0, 0, 0, 0.1);
}

.about {
  background-color: #ffffff;
  border-radius: 16px;
  text-align: justify;
  transition: box-shadow 0.3s ease;
}

.about:hover {
  box-shadow: 0px 8px 18px rgba(0, 0, 0, 0.08);
}

.profile-img {
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #ccc;
}

.social-info v-btn {
  margin: 0 8px;
  transition: transform 0.2s ease;
}

.social-info v-btn:hover {
  transform: scale(1.1);
}

@media screen and (max-width: 768px) {
  .sectionsobre {
    flex-direction: column;
    align-items: center;
  }

  .about {
    margin-top: 20px;
    padding: 16px;
  }

  .card {
    max-width: 90vw;
  }
}
</style>
