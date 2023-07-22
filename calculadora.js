const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if (boton.id === "igual") {

            try {
                pantalla.textContent = eval(pantalla.textContent)
            } catch (error) {
                pantalla.textContent = "ERROR"
            } return;
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "ERROR") {
                pantalla.textContent = "0"
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);

            } return;
        }

        if (boton.id === "delete") {
            pantalla.textContent = "0";
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "ERROR") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }

    });
});



// primer paso el queryselector LISTO
// segundo paso hacer que los botones escriban en la pantalla y que remplaze al cero LISTO
// tercer paso borrar todo con la letra C LISTO 
// cuarto paso borrar un digito con la letra del LISTO
// que no quede vacio cuando se borre todo LISTO
// quinto paso hacer funcionar la letra igual LISTO
// sexto paso solucionar el error que aparece al escribir muchos simbolos

// const pantalla = document.querySelector(".pantalla")
// const botones = document.querySelectorAll(".btn")

// botones.forEach(boton => {
//     boton.addEventListener("click", () => {
//         const botonApretado = boton.textContent

//         if (boton.id === "delete") {
//             pantalla.textContent = "0";
//             return;

//         }

//         try {
//             if (boton.id === "igual") {
//                 pantalla.textContent = eval(pantalla.textContent)
//                 return;
//             }

//         } catch (error) {
//             pantalla.textContent = "ERROR"
//             return

//         }

//         if (boton.id === "borrar") {
//             if (pantalla.textContent.length === 1) {
//                 pantalla.textContent = "0"
//             } else {
//                 pantalla.textContent = pantalla.textContent.slice(0, -1)

//             }
//             return;
//         }

//         if (pantalla.textContent === "0" || pantalla.textContent === "ERROR") {
//             pantalla.textContent = botonApretado
           

//         } else {
//             pantalla.textContent += botonApretado
//             return;
//         }

//     })
// })