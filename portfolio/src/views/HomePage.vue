<template>
  <v-app>
    <HeaderComponent />

    <v-main class="vmain">
      <v-container fluid>
        <v-row class="section-wrapper justify-center">
          <v-col cols="12">
            <AboutSection />
          </v-col>
        </v-row>

        <v-row no-gutters>
          <v-col cols="12">
            <SKillsSection />
          </v-col>
        </v-row>

        <v-row no-gutters>
          <v-col cols="12" class="text-center">
            <ExperienceSection />
          </v-col>
        </v-row>



        <v-row no-gutters>
          <v-col cols="12">
            <CertificatesSection />
          </v-col>
        </v-row>

        <v-row no-gutters>
          <v-col cols="12">
            <ContactForm />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

  <script>
  import HeaderComponent from '../components/HeaderComponent.vue';
  import AboutSection from '../components/AboutSection.vue';
  import SKillsSection from '../components/SkillsSection.vue';
  import ExperienceSection from '@/components/ExperienceSection.vue';
  import CertificatesSection from '@/components/CertificatesSection.vue';
  import ContactForm from '@/components/ContactForm.vue';

  export default {
    name: 'HomePage',
    components: {
      HeaderComponent,
      AboutSection,
      SKillsSection,
      ExperienceSection,
      CertificatesSection,
      ContactForm,
    },
  };
  </script>

  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;0,800;1,600&display=swap');

  :root {
    --primary-color: #141321;
    --secondary-color: #00254d;
    --background-color: #f4f2ee;
    --accent-color: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
  }

  body {
    background-color: var(--background-color);
  }

  img {
    width: 50px;
  }

  h2 {
    font-size: 24px;
    font-weight: 600;
    line-height: 1.5;
  }



  .section-wrapper {
    margin-top: 100px;
  }

  .central-header {
    text-align: center;
    padding: 20px;
  }

  .display {
    height: 85vh;
  }

  .vmain{
    align-self: center;
  }

  @media screen and (max-width: 768px) {
    .section-wrapper {
      margin-top: 150px;
    }

    .display {
      height: 100%;
    }
  }
  </style>
