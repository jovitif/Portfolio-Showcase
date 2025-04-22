<template>
  <v-app-bar app color="blue" flat dark>
    <v-container>
      <v-row align="center" justify="space-between">
        <v-col cols="auto">
          <h1 class="mb-0" style="font-size: 23px;">João Sales</h1>
        </v-col>

        <v-col cols="auto" class="d-md-none">
          <v-btn icon @click="toggleMenu">
            <v-icon>{{ isMenuOpen ? 'mdi-menu-open' : 'mdi-menu' }}</v-icon>
          </v-btn>
        </v-col>

        <v-col cols="auto" class="d-none d-md-flex">
          <v-toolbar-items>
            <v-btn text v-for="item in menuItems" :key="item.label" :href="item.link" class="text--white">
              {{ item.label }}
            </v-btn>
          </v-toolbar-items>
        </v-col>

        <!-- Dark Mode Toggle -->
        <v-col cols="auto">
          <v-btn icon @click="toggleDarkMode" class="text--white">
            <v-icon>{{ isDark ? 'mdi-white-balance-sunny' : 'mdi-weather-night' }}</v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <v-slide-y-transition>
        <v-row v-if="isMenuOpen" class="d-flex d-md-none" justify="center">
          <v-col cols="12">
            <v-list dense>
              <v-list-item v-for="item in menuItems" :key="item.label">
                <v-list-item-content>
                  <v-btn text :href="item.link" class="text--white">{{ item.label }}</v-btn>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-slide-y-transition>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      isMenuOpen: false,
      menuItems: [
        { label: 'About', link: '#About' },
        { label: 'Skills', link: '#Skills' },
        { label: 'Experience', link: '#Experience' },
        { label: 'Projects', link: '#Projects' },
        { label: 'Certifications', link: '#Certifications' },
        { label: 'Contact', link: '#Contact' }
      ],
    };
  },
  computed: {
    isDark() {
      return this.$vuetify.theme.dark;
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleDarkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
};
</script>

<style scoped>
.v-btn {
  color: white;
}

</style>
