<template>
    <section class="item">
        <section class="projeto">
            <div class="card">
                <img src="{{link}}" alt="{{descricaolink}}">
                <div class="card-info">
                    <p><span>{{nome}}</span></p>
                    <p>{{descricao}}</p>
                    <p>{{tecnologias}}</p>
                    <a href="{{linkgithub}}" target="_blank">Project on GitHub</a>
                    <a href="{{linkpreview}}" target="_blank">Preview</a>
                </div>
            </div>
        </section>
    </section>
</template>

<script>
export default{
    name: 'ProjectComponent',

        props:{
            link: String,
            descricaolink: String,
            nome: String,
            descricao: String,
            tecnologias: String,
            linkgithub: String,
            linkpreview: String
        }

}
</script>


