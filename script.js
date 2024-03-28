let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades(){
    var skills = document.getElementById("barra-skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript"); 
        habilidades[1].classList.add("htmlcss"); 
        habilidades[2].classList.add("sql"); 
        habilidades[3].classList.add("htmlcss"); 
        habilidades[4].classList.add("git_github"); 
        habilidades[5].classList.add("Comunicacion"); 
        habilidades[6].classList.add("Trabajo");
        habilidades[7].classList.add("Creatividad"); 
        habilidades[8].classList.add("Dedicacion");

    }
}
