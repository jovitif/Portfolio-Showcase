<template>
    <section class="sectionskills">
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

</template>

<script>
export default {
    name: "SkillsSection",
}
</script>

<style scoped>
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

@media screen and (max-width: 768px) {
    .sectionskills{
        display: flex;
        flex-direction: column;

    }
}
</style>