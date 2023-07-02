<template>
  <header>
    <a class="logo" href="../../public/index.html">
        <img src="../assets/programming-code-signs2.png" alt="coding">
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
</template>

<script>
export default {

}
</script>

<style>

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
</style>