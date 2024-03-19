<template>
    <section id="About" class="sectionsobre" >
        <section class="profile">
            <div class="card">
                <a href="https://github.com/jovitif" target="_blank"><img src="../assets/profile.png" alt="Foto de perfil"></a>
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

<p>Hi, i'm <span>João Vitor</span> and I'm a computer science undergraduate student at
<abbr title="Universidade Federal do Semi-Árido"><a href="https://pt.wikipedia.org/wiki/Universidade_Federal_Rural_do_Semi-%C3%81rido" target="_blank">UFERSA</a></abbr>. Currently in my 6th semester, I am dedicated to transitioning into a skilled full-cycle developer, with a focus on cloud technologies. My goal is to specialize in cloud development while leveraging my experience in web, mobile, and artificial intelligence application development.</p>
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

span{
    color: var(--secondary-color);
    font-weight: bold;
}

.sectionsobre{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}


.about{
    flex-wrap: wrap;
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
