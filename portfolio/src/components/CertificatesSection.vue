<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="4">
                <v-img
                    :src="require('../assets/Certification.gif')"
                    height="500"
                    class="mb-4"
                ></v-img>
            </v-col>
            <v-col cols="12" md="8">
                <v-card class="pa-4 mb-6">
                    <v-card-title>
                        <h2>Certificates</h2>
                    </v-card-title>
                    <v-card-text>
                        <v-carousel>
                            <v-carousel-item
                                v-for="(certificate, index) in certificates"
                                :key="index"
                                :src="certificate.image"
                            >
                                <v-card outlined class="pa-4">
                                    <v-card-title class="d-flex align-center">
                                        <v-icon color="primary" class="mr-3">
                                            {{ certificate.icon }}
                                        </v-icon>
                                        <span>{{ certificate.title }}</span>
                                    </v-card-title>
                                    <v-card-subtitle>
                                        {{ certificate.description }}
                                    </v-card-subtitle>
                                    <v-card-actions>
                                        <v-btn
                                            text
                                            @click="openLink(certificate.link)"
                                        >
                                            View Certificate
                                        </v-btn>
                                    </v-card-actions>
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
                    image: require('../assets/awscertificacao.png'), // Adicione a URL da imagem do certificado aqui
                },
                {
                    title: "AI-Assisted Certified Professional",
                    description: "Compass UOL.",
                    icon: "mdi-robot",
                    link: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
                    image: require('../assets/ai-1.png'), // Adicione a URL da imagem do certificado aqui
                },
                {
                    title: "Gen AI Technical Certification",
                    description: "Compass UOL.",
                    icon: "mdi-robot",
                    link: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
                    image: require('../assets/aigen-1.png'), // Adicione a URL da imagem do certificado aqui
                },            ],
        };
    },
    methods: {
        openLink(link) {
            window.open(link, '_blank'); // Abre o link em uma nova aba
        }
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

.v-carousel {
    height: 300px; /* Ajuste a altura do carrossel conforme necessário */
}
</style>
