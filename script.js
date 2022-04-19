const elementName = document.getElementById("cidade");
const elementClass = document.querySelector("#clima");
const elementImg = document.querySelector("#city_pic");
const elementMap = document.querySelector("#map");

let elementBtn = document.querySelector("#btn_change");

elementBtn.addEventListener("click",  () => {
  if (elementBtn.value == "first") {
    elementName.innerText = "Tambaba - Paraíba";
    elementClass.innerText = "Tropical-Praia";
    elementImg.src = "./imagens/00Tambaba.jpg";
    elementMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.896207059949!2d-34.80013118555395!3d-7.365530094685017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acbc3f92686687%3A0xa944c1262c0f4025!2sPraia%20de%20Tambaba!5e0!3m2!1spt-BR!2sbr!4v1650323434210!5m2!1spt-BR!2sbr";
    

    elementBtn.value = "second";
  } else if (elementBtn.value == "second") {
    elementName.innerText = "Lençõis Maranhences - Maranhão";
    elementClass.innerText = "Tropical - Dunas";
    elementImg.src = "./imagens/01lencois.jpg";
    elementMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.063488530971!2d-43.13059568557581!3d-2.4859384981884998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f19ee15e39be5f%3A0x2d2895d0d57e9beb!2sParque%20Nacional%20dos%20Len%C3%A7%C3%B3is%20Maranhenses!5e0!3m2!1spt-BR!2sbr!4v1650323552681!5m2!1spt-BR!2sbr";
      
    elementBtn.value = "third";
  } else if (elementBtn.value == "third") {
    elementName.innerText = "Nísia Floresta - Rio Grande do Norte";
    elementClass.innerText = "Tropical-Praia";
    elementImg.src = "./imagens/02nisiaFloresta.jpg";
    elementMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61669.63100315444!2d-35.187539671394894!3d-6.091180524689629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b28ab3e16e36fb%3A0x943aad862285323a!2sN%C3%ADsia%20Floresta%2C%20RN%2C%2059164-000!5e0!3m2!1spt-BR!2sbr!4v1650323695377!5m2!1spt-BR!2sbr";
   
    elementBtn.value = "fourth";
  }else if (elementBtn.value == "fourth") {
    elementName.innerText = "Domingos Martins - Espírito Santo";
    elementClass.innerText = "Temperado - Floresta";
    elementImg.src = "./imagens/03.jpg";
    elementMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14961.701324796613!2d-40.6672105755785!3d-20.365345731781847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9b516e21b6539%3A0x6f177d0d615b9971!2sDomingos%20Martins%2C%20ES%2C%2029260-000!5e0!3m2!1spt-BR!2sbr!4v1650323737208!5m2!1spt-BR!2sbr";
    

    elementBtn.value = "fifth";
  } else if (elementBtn.value == "fifth") {
    elementName.innerText = "Urubici - Santa Catarina";
    elementClass.innerText = "Temperado - Cachoeiras";
    elementImg.src = "./imagens/04.jpg";
    elementMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28181.188411832434!2d-49.60239248131446!3d-28.004646990842772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952043f3eb16f70d%3A0xa1dddcb93b7a3901!2sUrubici%2C%20SC%2C%2088650-000!5e0!3m2!1spt-BR!2sbr!4v1650323776407!5m2!1spt-BR!2sbr";
    
    elementBtn.value = "sixth";
  }  
  
  else {
    elementName.innerText = "Gramado - Rio Grande do Sul";
    elementClass.innerText = "Temperado - Cidade";
    elementImg.src = "./imagens/05.jpg";
    elementMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111253.70489743732!2d-50.93650884351103!3d-29.379707898729844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951932427804321f%3A0xa71c25f081e5aea6!2sGramado%2C%20RS!5e0!3m2!1spt-BR!2sbr!4v1650323811032!5m2!1spt-BR!2sbr";
    

    elementBtn.value = "first";
  }
});