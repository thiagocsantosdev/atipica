<template>
    <div class="servicos">

        <div class="item">
            <h3>
                Para empresas
            </h3>
            <h2>Concientizar</h2>
            <div class="item-content">
                <p>
                Capacitar organizações para a criação de ambientes inclusivos e conscientes sobre o autismo, promovendo uma cultura de respeito e diversidade.
                
            </p>
            <p>
                Na Atípica, oferecemos serviços de consultoria especializados em inclusão do autismo. Nosso trabalho visa educar empresas sobre as necessidades de pessoas autistas e como integrar essas necessidades no ambiente de trabalho, políticas de RH, e práticas corporativas. O processo envolve:
                
            </p>
               <ul>
                <li>Treinamentos e Workshops</li>
                <li>Avaliação e Planejamento</li>
                <li>Consultoria em Recrutamento e Seleção</li>
               </ul>
               <NuxtLink class="button">Saber mais</NuxtLink>
            </div>
           
        </div>
      
        <div class="item">
            <h3>
                Para eventos
            </h3>
            <h2>Incluir</h2>

            <div class="item-content">
                <p>
                Criar eventos acessíveis e inclusivos, garantindo a participação plena de pessoas autistas em diversas atividades sociais e corporativas.

            </p>

      

            <p>
                Com a Atípica, seu evento será projetado para atender a todas as necessidades do público autista, criando um espaço seguro, acolhedor e adaptado. Oferecemos:

            </p>

            <ul>
                <li>Consultoria Personalizada para Planejamento de Eventos</li>
                <li>Treinamento de Equipe para Atendimento ao Autista:</li>
                <li>Suporte e Equipamentos durante o Evento</li>
            </ul>


            <NuxtLink class="button">Saber mais</NuxtLink>
            </div>

            
        </div>

        <div class="item">
            <h3>
                Para cuidadores atípicos
            </h3>
            <h2>Transformar</h2>
            <div class="item-content">
            <p>
                Oferecer recursos e apoio para cuidadores de pessoas autistas, ajudando-os a desenvolver habilidades essenciais para o mercado de trabalho e aumentar sua independência financeira e emocional.
            </p>

            <p>

                A Atípica oferece programas de capacitação e desenvolvimento de habilidades voltados para cuidadores atípicos, ajudando-os a se inserirem ou se reintegrarem ao mercado de trabalho. Nosso serviço inclui:
            </p>

            <ul>
                <li>Mentoria e Orientação Profissional</li>
                <li>Cursos e Treinamentos:</li>
                <li>Suporte Psicológico e Emocional:</li>
            </ul>

            <NuxtLink class="button">Saber mais</NuxtLink>
            </div>

        </div>



    </div>
</template>


<style scoped>


.servicos{

    display: flex;
    margin-top: 800px;
    align-items: center;
    justify-content: center;
   
}

.item{
    width: 400px;
    height: 600px;
    background-color: rgba(0,0,0,0.8);
    backdrop-filter: blur(10px);
    color: white;
    margin: 20px;
    padding: 20px;
    border-radius: 12px;
   display: flex;
   flex-direction: column;
   animation: subir 2s ease-in-out;
}

.item-content{
    display: flex;
    align-items: center;
    flex-direction: column;
}

.item h3{
    color: lightgray ;
    font-family: 'Poppins';
    font-size: .8rem;
}

.item h2{
    color: white;
    font-family: 'Poppins';
    margin-top:6px;
}

.item p {
    font-family: 'Poppins';
    margin-top: 20px;
}

.button{
    
    color: rgb(228, 200, 159);
    cursor: pointer;
}

@keyframes subir{
    0%{
       transform: scaleY(0)
    }
    100%{
        transform: scaleY(100%);
    }
}

</style>