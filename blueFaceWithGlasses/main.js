const smile = document.getElementById("smile");
let perc = 0;
let flow = true;

// const period = setInterval(() => {
//     if(flow){
//         // smile.style.background = `radial-gradient(at top, #afc1d6 ${perc++}%, #655a7c ${perc}%);`
//         smile.style.cssText += `background: radial-gradient(ellipseat top, #afc1d6 ${perc++}%, #655a7c ${perc}%);`
//         flow = perc < 100;
//     } else {
//         // smile.style.background = `radial-gradient(at top, #afc1d6 ${perc--}%, #655a7c ${perc}%);`
//         smile.setAttribute('style', `background: radial-gradient(at top, #afc1d6 ${perc--}%, #655a7c ${perc}%);`)
//         flow = perc == 0;
//     }
//     console.log(smile.style.background);
// }, 10);

// function changeBorder(){
//     let numb = document.getElementById("numb").value;
//     smile.style.borderTopWidth = numb+'px';
// }

