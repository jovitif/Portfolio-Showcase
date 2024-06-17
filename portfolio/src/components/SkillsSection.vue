<template>
    <section class="sectionskills">
        <section class="sectionskill">
            <h2>Programming</h2>
            <ul>
                <li>
                    <h3>Machine Learning</h3>
                    <img src="../assets/python.svg" alt="Python Logo" />
                    <h4>Python</h4>
                </li>
                <li>
                    <h3>Mobile</h3>
                    <img src="../assets/flutter.svg" alt="Flutter Logo" />
                    <h4>Flutter</h4>
                </li>
                <li>
                    <h3>Database</h3>
                    <img src="../assets/mysql.svg" alt="MySQL Logo" />
                    <h4>MySQL</h4>
                </li>
                <li>
                    <h3>Cloud Computing</h3>
                    <img src="../assets/aws.svg" alt="AWS Logo" />
                    <h4>AWS</h4>
                </li>
                <li>
                    <h3>Backend</h3>
                    <img src="../assets/spring.png" alt="Spring Boot Logo" />
                    <h4>Spring Boot</h4>
                </li>
                <li>
                    <h3>Frontend</h3>
                    <img src="../assets/vue.svg" alt="Vue.js Logo" />
                    <h4>Vue.js</h4>
                </li>
            </ul>
        </section>
        <section class="sectionskill">
            <h2>Other Skills</h2>
            <ul>
                <li>
                    <h3>Intermediate level of English</h3>
                    <img src="../assets/reino-unido.png" alt="UK Flag" />
                </li>
                <li>
                    <h3>Basic level of Spanish</h3>
                    <img src="../assets/espanha.png" alt="Spain Flag"/>
                </li>
                <li>
                    <h3>Active learning</h3>
                    <img src="../assets/learning.png" alt="Learning Icon">
                </li>
                <li>
                    <h3>Communication</h3>
                    <img src="../assets/comunicacao.png" alt="Communication Icon" />
                </li>
            </ul>
        </section>
    </section>
</template>

<script>
export default {
    name: "SkillsSection",
}
</script>
<style scoped>
html, body {
    height: 100%;
    margin: 0;
}

#app {
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Garante que o app ocupe a altura total da janela */
}

.sectionskills {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    flex: 1; /* Faz com que sectionskills ocupe o espaço restante disponível */
}

ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0;
    list-style-type: none;
}

li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: aliceblue;
    font-weight: bold;
    text-align: center;
    transition: transform 0.3s ease;
    margin-bottom: 20px;
    width: 200px; /* Define uma largura fixa para os itens */
}

li:hover {
    transform: scale(1.05);
}

.sectionskill {
    background-color: var(--accent-color);
    border-radius: 10px;
    padding: 50px;
    margin-inline: 30px;
    margin-bottom: 20px;
    flex: 1; /* Permite que as seções ocupem o mesmo espaço disponível */
    max-width: 500px; /* Define uma largura máxima para evitar que as seções fiquem muito largas */
}

@media screen and (max-width: 768px) {
    .sectionskills {
        flex-direction: column;
        align-items: center; /* Centraliza as seções verticalmente */
    }

    ul {
        flex-direction: column; /* Ajusta os itens para uma única coluna em telas pequenas */
    }

    .sectionskill {
        max-width: none; /* Remove a largura máxima em telas pequenas */
        width: 100%; /* Faz com que as seções ocupem toda a largura disponível */
    }
}
</style>
