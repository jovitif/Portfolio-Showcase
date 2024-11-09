<template>
    <v-container fluid class="sectionskills">
        <v-row>
            <!-- Hard Skills Section -->
            <v-col cols="12" md="6">
                <v-card class="sectionskill">
                    <v-card-title class="pa-3">
                        <h2>Hard Skills</h2>
                    </v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col cols="12" sm="6" md="4" v-for="(skill, index) in hardSkills" :key="index">
                                <v-card class="text-center" outlined>
                                    <v-card-title class="pa-2">
                                        <h3>{{ skill.title }}</h3>
                                    </v-card-title>
                                    <v-card-subtitle>
                                        <v-img :src="skill.image" class="skill-icon" :alt="`${skill.title} Logo`"></v-img>
                                    </v-card-subtitle>
                                    <v-card-text>
                                        <h4>{{ skill.subtitle }}</h4>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>

            <!-- Soft Skills Section -->
            <v-col cols="12" md="6">
                <v-card class="sectionskill">
                    <v-card-title class="pa-3">
                        <h2>Soft Skills</h2>
                    </v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col cols="12" sm="6" md="4" v-for="(skill, index) in softSkills" :key="index">
                                <v-card class="text-center" outlined>
                                    <v-card-title class="pa-2">
                                        <h3>{{ skill.title }}</h3>
                                    </v-card-title>
                                    <v-card-subtitle>
                                        <v-img :src="skill.image" class="skill-icon" :alt="`${skill.title} Icon`"></v-img>
                                    </v-card-subtitle>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "SkillsSection",
    data() {
        return {
            hardSkills: [
                { title: "Machine Learning", image: require("../assets/tensorflow.png"), subtitle: "Tensor Flow" },
                { title: "Mobile", image: require("../assets/flutter.svg"), subtitle: "Flutter" },
                { title: "Database", image: require("../assets/mysql.svg"), subtitle: "MySQL" },
                { title: "Cloud Computing", image: require("../assets/aws.svg"), subtitle: "AWS" },
                { title: "Backend", image: require("../assets/nodejs.png"), subtitle: "Node.JS" },
                { title: "Frontend", image: require("../assets/vuetify.svg"), subtitle: "Vuetify.js" },
            ],
            softSkills: [
                { title: "Intermediate level of English", image: require("../assets/reino-unido.png") },
                { title: "Basic level of Spanish", image: require("../assets/espanha.png") },
                { title: "Active learning", image: require("../assets/learning.png") },
                { title: "Communication", image: require("../assets/comunicacao.png") },
            ],
        };
    },
};
</script>

<style scoped>
.skill-icon {
    max-width: 60px;
    margin:20px;
}

.sectionskills {
    padding: 20px;
}

.sectionskill {
    background-color: var(--v-theme-background);
    border-radius: 10px;
    padding: 30px;
    margin: 10px;
}

h3 {
    color: #0a66c2;
}

h4 {
    color: #666666;
}

.v-card:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
}

.sectionskill {
    overflow: hidden; /* Evita transbordo */
}
</style>
