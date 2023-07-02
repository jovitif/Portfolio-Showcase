<template>
  <div>
    <header>
      <a class="logo" href="index.html">
          <img src="./assets/programming-code-signs.png" alt="coding">
          <h1>Jovitif</h1>
      </a>
      <nav class="menu">
          <ul>
              <li><a class="smooth-scroll" href="#Home">Home</a></li>
              <li><a class="smooth-scroll" href="#About">About</a></li>
              <li><a class="smooth-scroll" href="#Skills">Skills</a></li>
              <li><a class="smooth-scroll" href="#Projects">Projects</a></li>
          </ul>
      </nav>
    
  </header>
  

  <main>
     



      <section class="sectionsobre" id="About">
          <section class="profile">
              <div class="card">
                  <a href="https://github.com/jovitif" target="_blank"><img src="./assets/profile.png" alt="Foto de perfil"></a>
                  <div class="card-info">
                      <a href="https://github.com/jovitif" target="_blank"><span>@Jovitif</span></a>
                      <a href="mailto:joaosales911@gmail.com">joaosales911@gmail.com</a>
                      <p>Computer Science Student</p>
                      <address>Mossoró, Brazil</address>
                  </div>
              </div>
          </section>
          <section class="about">
              <h3>About Me</h3>

<p>Hi, my name is <span>João Vitor</span> and I'm a computer science undergraduate student at
  <abbr title="Universidade Federal do Semi-Árido"><a href="https://pt.wikipedia.org/wiki/Universidade_Federal_Rural_do_Semi-%C3%81rido" target="_blank">UFERSA</a></abbr>. Currently in my 5th semester, I am dedicated to becoming a skilled full-cycle developer, equipped with knowledge in essential technologies sought after in the job market. My experience lies in web development and Java desktop application development.</p>
              <div class="social-info">
                  <p>Other Social Media:</p>
                  <p>Instagram: <a href="https://instagram.com/https://www.instagram.com/j2aov/" target="_blank"><span>@j2aov</span></a></p>
                  <p>Linkedin: <a href="https://www.linkedin.com/in/jo%C3%A3o-sales-058747211/" target="_blank"><span>João Sales</span></a></p>
              </div>
          </section>
      </section>

      <hr>

      <div class="central-header">
          <h2>My Skills:</h2>
      </div>

      <section class="sectionskills" id="Skills">
          <section>
              <h2>Programming</h2>
              <ul>
                  <li>Structured programming in C++</li>
                  <li>Object-Oriented Programming and Data Structures in Java</li>
                  <li>Front-end: HTML, CSS, JavaScript and React</li>
                  <li>Back-end: Spring and MySQL</li>
                  <li>Others: Markdown, Python, Netlify, Insomnia, Figma and Notion</li>
              </ul>
          </section>
          <section>
              <h2>Other Skills</h2>
              <ul>
                  <li>Intermediate level of English</li>
                  <li>Basic level of Spanish</li>
                  <li>Active learning</li>
                  <li>Communication</li>
              </ul>
          </section>
      </section>

      <hr>

      <div class="central-header">
          <h2>My Projects:</h2>
      </div>

      <section class="sectionprojetos" id="Projects">
          <section class="item">
              <section class="projeto">
                  <div class="card">
                      <img src="./assets/MusicConnect.png" alt="Music Image">
                      <div class="card-info">
                          <p><span>MusiConnect</span></p>
                          <p>Project developed independently</p>
                          <p>Technologies: Spring & Vue</p>
                          <a href="https://github.com/jovitif/MusiConnect" target="_blank">Project on GitHub</a>
                          <a href="https://musicconnect.netlify.app/" target="_blank">Preview</a>
                      </div>
                  </div>
              </section>
          </section>
          <section class="item">
              <section class="projeto">
                  <div class="card">
                      <img src="./assets/test.png" alt="Test Image">
                      <div class="card-info">
                          <p><span>Test Generator</span></p>
                          <p>Project developed for the object-oriented programming course</p>
                          <p>Technologies: Java, MVC, MySQL, JavaFX</p>
                          <a href="https://github.com/jovitif/Test-Generator-System" target="_blank">Project on
                              GitHub</a>
                      </div>
                  </div>
              </section>
          </section>
          <section class="item">
              <section class="projeto">
                  <div class="card">
                      <img src="./assets/food.png" alt="Food Image">
                      <div class="card-info">
                          <p><span>FaceFood</span></p>
                          <p>Project developed for the web programming course</p>
                          <p>Technologies: HTML, CSS, JavaScript, React, Tailwind, Spring</p>
                          <a href="https://github.com/lryanborges/FaceFood" target="_blank">Project on GitHub</a>
                      </div>
                  </div>
              </section>
          </section>
          <section class="item">
              <section class="projeto">
                  <div class="card">
                      <img src="./assets/Ascension.png" alt="Cards Image">
                      <div class="card-info">
                          <p><span>Ascension</span></p>
                          <p>Project developed for the Data Structures I course</p>
                          <p>Technologies: Java</p>
                          <a href="https://github.com/BrennoKM/Ascencion" target="_blank">Project on GitHub</a>
                      </div>
                  </div>
              </section>
          </section>
          <section class="item">
              <section class="projeto">
                  <div class="card">
                      <img src="../src/assets/Finfac.png" alt="Money Image">
                      <div class="card-info">
                          <p><span>FinFac</span></p>
                          <p>Project developed for the Object-Oriented Analysis and Design course</p>
                          <p>Technologies: Java, Netbeans, MySQL, Java Swing</p>
                          <a href="https://github.com/jovitif/FinFac-FinancasFaceis" target="_blank">Project on
                              GitHub</a>
                      </div>
                  </div>
              </section>
          </section>

      </section>


  </main>
  </div>
</template>

<script>
//import HeaderComponent from './components/HeaderComponent.vue'
export default {
  name: 'App',
  components: {
    //HeaderComponent
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
