<template>
    <section class="sectionskills">
        <section class="sectionskill">
            <h2>Programming</h2>
            <ul>
                <li>Front-end: HTML, CSS, Tailwind CSS, JavaScript and React</li>
                <li>Back-end: Spring and MySQL</li>
                <li>Mobile: Flutter</li>
                <li>Others: Python, Firebase, Netlify, Insomnia, Figma and Notion</li>
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

h2{
    text-align: center;
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
}
</style>