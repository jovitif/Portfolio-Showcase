<template>
    <div>
      
    <HeaderComponent></HeaderComponent>
    
  
    <main>
        
   <AboutSection></AboutSection>
        <hr>
  
        <div class="central-header">
            <h2>My Skills:</h2>
        </div>
  
        <SKillsSection></SKillsSection>
        <hr>
  
  
        <div class="central-header">
            <h2>My Projects:</h2>
        </div>
  
        <ProjectsSection></ProjectsSection>
  
    </main>
    </div>
  </template>
  
  <script>
  import HeaderComponent from '../components/HeaderComponent.vue';
  import AboutSection from '../components/AboutSection.vue';
  import SKillsSection from '../components/SkillsSection.vue';
  import ProjectsSection from '../components/ProjectsSection.vue';
  
  export default {
    name: 'HomePage',
    components: {
      HeaderComponent,
      AboutSection,
      SKillsSection,
      ProjectsSection,
    }
  }
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;0,800;1,600&display=swap');
  
  :root {
      --primary-color: #e6edf3;
      --secondary-color: #fe428e;
      --background-color: #141321;
      --accent-color: #1d1a28;
  }
  
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      list-style: none;
      font-family: 'Poppins', sans-serif;
      color: var(--primary-color);
      text-decoration: none;
  
  }
  
  a:hover{
      color: var(--secondary-color);
  }
  
  span{
      color: var(--secondary-color);
      font-weight: bold;
  }
  
  body {
      background-color: var(--background-color);
      background-image: url('../assets/programming-code-signs.png');
      background-position: center;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: 260px;
  }
  
  img {
      width: 50px;
  }
  
  h1{
      font-size: 23px;
  }
  
  
  h2 {
      color: var(--primary-color);
      font-size: 24px;
      font-weight: 600;
      line-height: 1.5;
  }
  
  .main {
      display: flex;
      flex-direction: column;
  }
  
  .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 20px;
      background-color: var(--accent-color);
      border-radius: 10px;
      padding: 10px;
  }
  
  .card img {
      width: 250px;
      border-radius: 50%;
      margin: 20px;
  }
  
  .card-info {
      display: flex;
      flex-direction: column;
  }
  
  .central-header {
      text-align: center;
      padding: 20px;
  }
  
  </style>
  