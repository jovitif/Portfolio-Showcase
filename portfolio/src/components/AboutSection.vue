<template>
  <v-container id="About" class="py-10">
    <!-- Profile Section -->
    <v-row class="sectionsobre" align="center" justify="space-around">
      <v-col cols="12" md="4" class="d-flex justify-center">
        <v-card class="card pa-4" elevation="3" max-width="350">
          <v-avatar
          size="120"
          class="d-flex justify-center align-center ma-auto"
        >
          <v-img
            :src="require('../assets/profile.png')"
            alt="Profile Picture"
            class="profile-img"
          />
        </v-avatar>

          <v-card-title class="text-h6 text-center font-weight-bold mt-4">
            João Vitor Fernandes de Sales
          </v-card-title>
          <v-card-subtitle class="text-center grey--text text--darken-2">
            <v-icon>mdi-robot</v-icon> Software Engineer <v-icon>mdi-robot</v-icon>
          </v-card-subtitle>
          <v-card-text class="text-center">Bachelor's Degree in Computer Science</v-card-text>
          <v-card-text class="text-center grey--text">
            Mossoró, Rio Grande do Norte, Brazil

          </v-card-text>
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
          />
          <v-card-title class="text-h6 font-weight-bold mt-4">About Me</v-card-title>
          <v-card-text>
            I am a Software Engineer with experience in developing web and mobile applications that leverage artificial intelligence. I have worked on projects, including initiatives for my city's municipality, showcasing practical applications of AI. Additionally, I have strong knowledge of cloud technologies, enabling scalable and efficient solutions.
          </v-card-text>
          <v-divider class="my-4"></v-divider>
          <v-card-title class="text-h6 font-weight-bold">How to Contact Me</v-card-title>
          <v-card-actions class="social-info">
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
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
}

.about {
  background-color: #fff;
  border-radius: 12px;
  text-align: justify;
}

.profile-img {
  object-fit: cover;
}

.social-info v-btn {
  margin-right: 10px;
}

.social-info v-btn:hover {
  transform: scale(1.1);
}

@media screen and (max-width: 768px) {
  .sectionsobre {
    justify-content: center;
  }

  .about {
    margin-top: 20px;
  }
}
</style>
