<template>
    <section class="sectionskills">
        <section class="sectionskill">
            <h2>Programming</h2>
            <ul>
                <li>
                    <h3>Machine Learning</h3>
                    <img src="../assets/python.svg" />
                    <h4>Python</h4>
                </li>
                <li>
                    <h3>Mobile</h3>
                    <img src="../assets/flutter.svg" />
                    <h4>Flutter</h4>
                </li>

                <li>
                    <h3>Database</h3>
                    <img src="../assets/mysql.svg" />
                    <h4>MySQL</h4>
                </li>

                <li>
                    <h3>Cloud Computing</h3>
                    <img src="../assets/aws.svg" />
                    <h4>AWS</h4>
                </li>

                <li>
                    <h3>Backend</h3>
                    <img src="../assets/django.svg" />
                    <h4>Django</h4>
                </li>
                <li>
                    <h3>Frontend</h3>
                    <img src="../assets/vue.svg" />
                    <h4>Vue.js</h4>
                </li>
            </ul>
        </section>
        <section class="sectionskill">
            <h2>Other Skills</h2>
            <ul>
                <li>Intermediate level of English</li>
                <li>Basic level of Spanish</li>
                <li>Active learning</li>
                <li>Communication</li>
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

ul {
    column-count: 2;
    column-gap: 20px;
    padding: 0;
    list-style-type: none;
  }

  h2 {
    text-align: center;
    color: aliceblue;
  }

  li {
    display: inline-block; /* Alinha os itens horizontalmente */
    color: aliceblue;
    font-weight: bold;
    text-align: center;
    transition: transform 0.3s ease;
    margin-bottom: 20px;
    width: 100%; /* Ocupa a largura total da coluna */
  }

li:hover{
    transform: scale(1.05);

}

.sectionskills{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.sectionskill{
    background-color: var(--accent-color);
    border-radius: 10px;
    padding: 50px;
    margin-inline: 30px;
    margin-bottom: 20px;
}

@media screen and (max-width: 768px) {
    .sectionskills{
        display: flex;
        flex-direction: column;

    }

    ul {
        column-count: 1;
      }
}
</style>
