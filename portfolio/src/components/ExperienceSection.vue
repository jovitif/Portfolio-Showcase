<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" md="8">
                <v-card class="pa-4 mb-6">
                    <v-card-title>
                        <h2>Experience</h2>
                    </v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col
                                v-for="(experience, index) in experiences"
                                :key="index"
                                cols="12"
                                sm="6"
                                md="4"
                            >
                                <v-card outlined class="pa-4">
                                    <v-card-title>
                                        <span>{{ experience.title }}</span>
                                    </v-card-title>
                                    <v-card-subtitle>
                                        <strong>{{ experience.company }}</strong> - {{ experience.period }}
                                    </v-card-subtitle>
                                    <v-card-text>
                                        <p>{{ experience.description }}</p>
                                    </v-card-text>
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
    name: "ExperienceSection",
    data() {
        return {
            experiences: [
                {
                    title: "Volunteer Instructor",
                    company: "University Courses",
                    period: "Ongoing",
                    description: "Taught basic programming and algorithms to students from other higher education courses.",
                },
                {
                    title: "Intern",
                    company: "Compass UOL",
                    period: "Internship Period",
                    description: "Learned about machine learning techniques using AWS and obtained the AWS Cloud Practitioner certification.",
                },
                {
                    title: "Research Scholarship",
                    company: "Higia Way Project",
                    period: "Project Duration",
                    description: "Contributed to the development of a chatbot aimed at assisting pregnant women.",
                },
            ],
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
</style>
