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
import HeaderComponent from './components/HeaderComponent.vue';
import AboutSection from './components/AboutSection.vue';
import SKillsSection from './components/SkillsSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';

export default {
  name: 'App',
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
    background-image: url('./assets/programming-code-signs.png');
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

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 6rem;
    background-color: var(--accent-color);
    box-shadow: 0px 3px 10px var(--accent-color);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100; 
}



.logo {
    display: flex;
    align-items: center;
}

.logo img {
    margin-right: 10px;
}

nav ul {
    display: flex;
}

nav ul li {
    margin-right: 20px;
}

.central-header {
    text-align: center;
    padding: 20px;
}

.menu-toggle {
    display: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
}

.menu-toggle span {
    display: block;
    width: 30px;
    height: 4px;
    background-color: white;
    margin-bottom: 6px;
}

@media (max-width: 768px) {

    .sectionhome{
        flex-direction: column;

    }

    .sectionhome figure img{
        width: 300px;
    }

    .menu ul {
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 100%;
        left: 0;
        background-color: var(--accent-color);
        visibility:hidden;
        width: 100%;
        padding: 1rem 0;
    
    }

    .menu.active ul {
        opacity: 1;
        visibility: visible;
    }

    .menu li {
        margin-right: 0;
        margin-bottom: 1rem;
    }

    .menu a {
        color: white;
    }
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

.sectionhome {
    height: 100vh;
    display: flex;
    justify-content: space-around;
    padding-top: 6rem;
}

.sectionhome section{
   padding-top: 100px;
}

.sectionhome h3{
    background-color: #fe428e;
    padding: 6px;
    color: #e6edf3;
}

figure img{
    width: 500px;
}

.sectionsobre{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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

.about{
   flex-wrap: wrap;
}

.social-info {
    margin-top: 20px;
}

.sectionskills{
    background-color: var(--accent-color);
    border-radius: 10px;
    padding: 10px;
    margin-inline: 30px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.sectionprojetos {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .item {
    flex-basis: calc(33.33% - 20px);
    margin: 5px;
  }

  @media screen and (max-width: 768px) {
    .sectionhome{
        flex-direction: column;
    }
    header{
        display: flex;
        flex-direction: column;
    }
   ul{
        display: flex;
        padding-top: 10px;
        flex-direction: column;
    }

    .sectionsobre{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .sectionskills{
        display: flex;
        flex-direction: column;

    }

    .about{
      text-align: justify;
      margin: 20px;
    }

}

</style>
