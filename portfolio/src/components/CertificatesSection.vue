<template>
    <v-container id="Certifications" class="py-12">
      <v-row align="center" justify="center" class="mb-8">
        <v-col cols="12" md="4" class="d-flex justify-center">
          <v-img
            :src="require('../assets/Certification.gif')"
            height="350"
            contain
            class="rounded-xl"
          />
        </v-col>
  
        <v-col cols="12" md="8">
          <v-card class="pa-6" elevation="5" rounded="xl">
            <v-card-title class="justify-center">
              <h2 class="text-h5 font-weight-bold primary--text">Certificates</h2>
            </v-card-title>
  
            <v-divider class="my-4"></v-divider>
  
            <v-card-text>
              <v-carousel hide-delimiters height="320" show-arrows-on-hover>
                <v-carousel-item
                  v-for="(certificate, index) in certificates"
                  :key="index"
                >
                  <v-card
                    class="pa-4 transition-fast-in-fast-out"
                    elevation="2"
                    rounded="lg"
                    outlined
                    hover
                  >
                    <v-row no-gutters>
                      <v-col cols="12" md="5" class="d-flex align-center">
                        <v-img
                          :src="certificate.image"
                          alt="Certificate Image"
                          max-height="200"
                          class="rounded-lg mx-auto"
                          contain
                        />
                      </v-col>
  
                      <v-col cols="12" md="7" class="px-4 py-2">
                        <v-card-title class="d-flex align-center mb-2">
                          <v-icon color="primary" class="mr-2">{{ certificate.icon }}</v-icon>
                          <span class="text-subtitle-1 font-weight-bold">{{ certificate.title }}</span>
                        </v-card-title>
  
                        <v-card-subtitle class="text-body-2 mb-4">
                          {{ certificate.description }}
                        </v-card-subtitle>
  
                        <v-btn
                          color="primary"
                          variant="text"
                          @click="openLink(certificate.link)"
                          class="text-capitalize"
                        >
                          <v-icon left>mdi-open-in-new</v-icon>
                          View Certificate
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-carousel-item>
              </v-carousel>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: "CertificatesSection",
    data() {
      return {
        certificates: [
          {
            title: "AWS Cloud Practitioner",
            description: "Certification for foundational knowledge of AWS Cloud concepts.",
            icon: "mdi-aws",
            link: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
            image: require('../assets/awscertificacao.png'),
          },
          {
            title: "AI-Assisted Certified Professional",
            description: "Compass UOL.",
            icon: "mdi-robot",
            link: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
            image: require('../assets/ai-1.png'),
          },
          {
            title: "Gen AI Technical Certification",
            description: "Compass UOL.",
            icon: "mdi-robot",
            link: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
            image: require('../assets/aigen-1.png'),
          },
        ],
      };
    },
    methods: {
      openLink(link) {
        window.open(link, "_blank");
      },
    },
  };
  </script>
<style scoped>
.primary--text {
  color: #1976D2 !important;
}

.v-carousel-item {
  padding: 8px;
}
</style>
