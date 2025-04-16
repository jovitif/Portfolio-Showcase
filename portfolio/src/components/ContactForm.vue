<template>
    <v-container id="Contact">
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-card class="pa-4">
            <v-card-title>
              <h2>Contact Us</h2>
            </v-card-title>
            <v-form ref="contactForm" v-model="valid" lazy-validation>
              <v-card-text>
                <v-text-field
                  v-model="name"
                  label="Name"
                  :rules="[rules.required]"
                  outlined
                  required
                ></v-text-field>

                <v-text-field
                  v-model="email"
                  label="Email"
                  :rules="[rules.required, rules.email]"
                  outlined
                  required
                ></v-text-field>

                <v-text-field
                  v-model="phone"
                  label="Phone"
                  :rules="[rules.phone]"
                  outlined
                  type="tel"
                ></v-text-field>

                <v-textarea
                  v-model="message"
                  label="Message"
                  :rules="[rules.required]"
                  outlined
                  required
                  rows="4"
                ></v-textarea>
              </v-card-text>
              <v-card-actions>
                <v-btn
  color="primary"
  @click="submit"
  :disabled="!valid"
  class="mx-auto d-flex justify-center"
>
  Send
</v-btn>

              </v-card-actions>
            </v-form>
          </v-card>
        </v-col>

        <v-col cols="12" md="6" class="d-flex align-center">
            <v-img
            :src="require('../assets/Mailbox.gif')"
            class="my-3"
            contain
            height="500"
          />
        </v-col>
      </v-row>
    </v-container>
  </template>

  <script>
  export default {
    name: "ContactForm",
    data() {
      return {
        valid: false,
        name: '',
        email: '',
        phone: '',
        message: '',
        rules: {
          required: value => !!value || 'This field is required.',
          email: value => {
            const pattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
            return pattern.test(value) || 'Invalid e-mail format.';
          },
          phone: value => {
            const pattern = /^\d{10,15}$/; // Aceita números de 10 a 15 dígitos
            return !value || pattern.test(value) || 'Invalid phone number.';
          }
        }
      };
    },
    methods: {
      submit() {
        if (this.$refs.contactForm.validate()) {
          // Implementar o envio do formulário aqui, como uma API ou ação desejada
          console.log("Form data:", {
            name: this.name,
            email: this.email,
            phone: this.phone,
            message: this.message,
          });
          // Limpar o formulário após o envio bem-sucedido
          this.$refs.contactForm.reset();
          alert("Thank you for contacting us!");
        }
      }
    }
  };
  </script>

  <style scoped>
  .v-card-title {
    justify-content: center;
    text-align: center;
    color: #0a66c2;
  }

  .v-card {
    background-color: #f5f5f5;
    border-radius: 10px;
  }

  .v-btn {
    margin-left: auto;
  }

  .v-img {
    max-width: 100%; /* Garante que a imagem não ultrapasse o tamanho da coluna */
  }
  </style>
