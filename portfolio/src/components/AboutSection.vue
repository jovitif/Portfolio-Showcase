<template>
    <section id="About" class="sectionsobre" >
        <section class="profile">
            <div class="card">
                <a href="https://github.com/jovitif" target="_blank"><img src="../assets/profile.jpg" alt="Foto de perfil"></a>
                <div class="card-info">
                    <span>João Vitor Fernandes de Sales</span>
                    <p>DevOps - AWS | Node.js | Tensor Flow | Vue.js | Flutter</p>
                    <p>Computer Science Student</p>
                    <address>Mossoró, Rio Grande do Norte, Brazil</address>
                </div>
            </div>
        </section>
        <section class="about">
            <h3>About Me</h3>
            <p>I am a computer science student starting my 7th semester. I interned at a company called Compass, in partnership with AWS, and I have a strong interest in cloud computing and artificial intelligence. Currently, I am starting a research project aimed at developing an application that uses artificial intelligence to assist in the process of learning English. Additionally, I have also been focusing on developing personal projects.</p>

                    <div class="social-info">
                <p>How to Contact Me</p>
                <a href="mailto:joaosales911@gmail.com"> <img src="../assets/email.png" alt="email"></a>
                <a href="https://www.linkedin.com/in/joaofdsales/" target="_blank"><img src="../assets/linkedin.png" alt="linkedin"></a>
                <a href="https://github.com/jovitif" target="_blank"><img src="../assets/github.png" alt="github"></a>

                <a href="https://instagram.com/https://www.instagram.com/joaofdsales/" target="_blank"><img src="../assets/instagram.png" alt="instagram"></a>

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
    color: #171717;
    font-weight: bold;
}

.card p{
    color: #191919;
    font-size: 12px;
}

address{
    color: #666666;
    font-size: 12px;
}

.sectionsobre{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.about {
    background-color: #ffffff;
    padding: 80px;
    border-radius: 10px;
}

.card a{
    color: #171717;
}

.card {
    transition: transform 0.3s ease;
    color: aliceblue;
  }


.about{
    flex-wrap: wrap;
    text-align: justify;
 }

 .social-info {
     margin-top: 20px;
 }

 .social-info img{
    margin: 10px;

 }


 .card:hover,
 .social-info img:hover {
   transition: transform 0.3s ease;
   transform: scale(1.05);
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
