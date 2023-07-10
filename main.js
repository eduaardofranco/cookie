phrases = ["Às vezes as coisas demoram, mas acontecem. O importante é saber esperar e não perder a fé!",
"Sorria! Deus acaba de te dar um novo dia e coisas extraordinárias podem acontecer se você acreditar.",
"Um pequeno pensamento positivo pela manhã pode mudar todo o seu dia.",
"Que os dias ruins se tornem raros e os bons virem rotina.",
"Todo dia é uma ocasião especial. Guarde apenas o que tem que ser guardado: lembranças, sorrisos, poemas, cheiros, saudades, momentos…",
"Não se preocupe em entender, viver ultrapassa qualquer entendimento",
"Só existem dois dias no ano em que nada pode ser feito. Um se chama ontem e o outro se chama amanhã, portanto hoje é o dia certo para amar, acreditar, fazer e principalmente viver.",
"A mudança que você quer está na decisão que você toma.",
"Viva sua vida com quem te deixa feliz e não com quem você tenha que agradar.",
"Que o dia seja leve, que a tristeza seja breve e que o dia seja feliz."]

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

function newMessage() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
   
    const randomNumer = Math.floor(Math.random() * 10)
    document.querySelector(".phrase").innerHTML = phrases[randomNumer];
}