<template>
    <header>
      <a class="logo" href="index.html">
      <!--<img src="../assets/programming-code-signs.png" alt="coding">-->
        <h1>JOVITIF</h1>
      </a>
      <div class="menu-toggle" :class="{ active: isMenuOpen }" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav class="menu" :class="{ active: isMenuOpen }">
        <ul>
          <li><a href="#About">About</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#Experience">Experience</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Certifications">Certifications</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  </template>

  <script>

  export default {
    name: 'HeaderComponent',
    data() {
      return {
        isMenuOpen: false
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
      myFunction() {
        var element = document.body;
        element.classList.toggle("white-mode");
    }
    }
  };
  </script>

  <style scoped>
  h1{
    font-size: 23px;
    color: #0a66c2;
}

.menu a {
  color: #666666;
}

.menu a:hover {
  color: black;
}

.menu a:active {
  color: black;
}

.menu a:visited {
  color: black;
}


  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 6rem;
    background-color: #ffffff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }

  .logo {
    display: flex;
    align-items: center;
  }

  .logo img {
    margin-right: 10px;
  }

  nav{
    color: #666666;
  }

  nav ul {
    display: flex;
  }

  nav ul li {
    margin-right: 20px;


  }


  @media (max-width: 768px) {
    .menu ul {
      flex-direction: column;
      align-items: center;
      position: absolute;
      top: 100%;
      left: 0;
      background-color: #ffffff;
      visibility: hidden;
      width: 100%;
      padding: 1rem 0;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .menu.active ul {
      opacity: 1;
      visibility: visible;
    }

    .menu li {
      margin-right: 0;
      margin-bottom: 1rem;
    }

    .menu a {
      color: #666666;
    }

    header {
      display: flex;
      flex-direction: column;
    }

    ul {
      display: flex;
      padding-top: 10px;
      flex-direction: column;

    }

  }

  .menu-toggle {
    display: none;
    cursor: pointer;

  }

  .white-mode {
    background-color: #666666;
    color: black;
  }

  @media (max-width: 768px) {
    .menu-toggle {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 30px;
      height: 20px;

    }

    .menu-toggle span {
      width: 100%;
      height: 3px;
      background-color: #666666;
      display: block;
      transition: all 0.3s ease;
    }

    .menu-toggle.active span:first-child {
      transform: rotate(45deg) translate(5px, 5px);
    }

    .menu-toggle.active span:nth-child(2) {
      opacity: 0;
    }

    .menu-toggle.active span:last-child {
      transform: rotate(-45deg) translate(5px, -5px);
    }
  }
  </style>
