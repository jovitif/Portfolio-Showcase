<template>

    <h2>Mobile Apps</h2>
    <section class="sectionprojetos" id="Projects">

        <section class="item">
            <section class="projeto">
                <div class="card">
                    <img src="../assets/logo.png" alt="Quizzefy Image">
                    <div class="card-info">
                        <p><span>Quizzefy</span></p>
                        <p>Project developed for the mobile development course</p>
                        <p>Technologies: Flutter</p>
                        <a href="https://github.com/jovitif/Quizzefy-Mobile-App" target="_blank">Project on GitHub</a>
                        <a href="/src/apks/quizzefy/app-debug.apk" download>Download APK</a>
                    </div>
                </div>
            </section>
        </section>
        <section class="item">
            <section class="projeto">
                <div class="card">
                    <img src="../assets/MusicConnect.png" alt="Music Image">
                    <div class="card-info">
                        <p><span>App de Imoveis</span></p>
                        <p>Project developed independently</p>
                        <p>Technologies: Flutter</p>
                        <a href="https://github.com/jovitif/MusiConnect" target="_blank">Project on GitHub</a>
                        <a href="https://musicconnect.netlify.app/" target="_blank">Preview</a>
                    </div>
                </div>
            </section>
        </section>
        <section class="item">
            <section class="projeto">
                <div class="card">
                    <img src="../assets/MusicConnect.png" alt="Music Image">
                    <div class="card-info">
                        <p><span>Musiconnect</span></p>
                        <p>Project developed independently</p>
                        <p>Technologies: Flutter</p>
                        <a href="https://github.com/jovitif/MusiConnect" target="_blank">Project on GitHub</a>
                        <a href="https://musicconnect.netlify.app/" target="_blank">Preview</a>
                    </div>
                </div>
            </section>
        </section>
</section>

<h2>Web Apps</h2>
        <section class="sectionprojetos" id="Projects">

            <section class="item">
                <section class="projeto">
                    <div class="card">
                        <img src="../assets/test.png" alt="Test Image">
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
                    <img src="../assets/MusicConnect.png" alt="Music Image">
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
                    <img src="../assets/food.png" alt="Food Image">
                    <div class="card-info">
                        <p><span>FaceFood</span></p>
                        <p>Project developed for the web programming course</p>
                        <p>Technologies: HTML, CSS, JavaScript, React, Tailwind, Spring</p>
                        <a href="https://github.com/lryanborges/FaceFood" target="_blank">Project on GitHub</a>
                    </div>
                </div>
            </section>
        </section>



    </section>
</template>

<script>


export default {
    name: "ProjectsSection",
    components:{

    }
}

</script>

<style scoped>

h2{
    display: flex;
    justify-content: center;
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

@media (max-width: 768px) {

}
</style>
