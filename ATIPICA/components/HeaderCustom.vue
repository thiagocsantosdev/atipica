<template>
  
    <header>
      <div class="logo">
          <img src="/images/logo-atipica.png" alt="">
           <p>Atipica Cultural</p>
      </div>
         <nav>
            <ul>
                <li>Sobre</li>
                <li>Serviços</li>
                <li>Contatos</li>
            </ul>
         </nav>
    </header>
  
  </template>
  
  <style scoped>
  header{
      position: fixed;
      padding: 20px;
      display:flex;
     justify-content: space-between;
      width: 100%;
  }
  
   .logo p {
      font-family: 'Poppins';
      color: white;
   }

   nav ul{
    display: flex;
    list-style: none;
    color: #1f1f1f;
    font-family: 'Poppins';
    gap: 20px;
    padding: 20px;
   }

   nav ul li{
       opacity: 0.8; 
       transition: 1s;
   }

   nav ul li:hover{
    cursor: pointer;
    opacity: 1;
    transform: scale(1.05);
   }
  </style>