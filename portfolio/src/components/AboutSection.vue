<template>
    <section id="About" class="sectionsobre" >
        <section class="profile">
            <div class="card">
                <a href="https://github.com/jovitif" target="_blank"><img src="../assets/profile.jpg" alt="Foto de perfil"></a>
                <div class="card-info">
                    <a href="https://github.com/jovitif" target="_blank"><span>@Jovitif</span></a>
                    <a href="mailto:joaosales911@gmail.com">joaosales911@gmail.com</a>
                    <p>Computer Science Student</p>
                    <address>Mossoró, Rio Grande do Norte, Brazil</address>
                </div>
            </div>
        </section>
        <section class="about">
            <h3>About Me</h3>
            <p>Hi, I'm <span>João Vitor Fernandes de Sales</span> (preferably called <span>João Sales</span>) and I'm a computer science undergraduate student at
                <abbr title="Universidade Federal do Semi-Árido"><a href="https://pt.wikipedia.org/wiki/Universidade_Federal_Rural_do_Semi-%C3%81rido" target="_blank">UFERSA</a></abbr>. Throughout my degree, I have been exposed to several important subjects, such as Web Development, Machine Learning, Mobile Development, and Software Engineering, which have given me a broad understanding of computing. I'm currently developing my skills in <span>DevOps</span>, <span>Machine Learning</span>, and <span>AWS Cloud Computing</span>, but I'm also looking to develop web and mobile projects.</p>

                    <div class="social-info">
                <p>Other Social Media:</p>
                <p>Instagram: <a href="https://instagram.com/https://www.instagram.com/j2aov/" target="_blank"><span>@j2aov</span></a></p>
                <p>Linkedin: <a href="https://www.linkedin.com/in/jo%C3%A3o-sales-058747211/" target="_blank"><span>João Sales</span></a></p>
            </div>
        </section>
    </section>
</template>

<script>
export default {
    name: "AboutSection",
}
</script>

<style scoped>

.card-info{
    text-align: center;
}

span{

    font-weight: bold;
}

.sectionsobre{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.about span, a{
    color: black;
}

.card a{
    color: aliceblue;
}

.card {
    transition: transform 0.3s ease;
    color: aliceblue;
  }

  .card:hover {
    transform: scale(1.05);
  }
.about{
    flex-wrap: wrap;
    text-align: justify;
 }

 .social-info {
     margin-top: 20px;
 }

 @media screen and (max-width: 768px) {
    .sectionsobre{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .about{
        text-align: justify;
        margin: 20px;
      }
 }

</style>
