const quoteText = document.querySelector(".quote"),
quoteBtn = document.querySelector("button"),
authorName = document.querySelector(".author .name"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter");


// Função para pegar uma frase aleatória
function randomQuote(){
  quoteBtn.classList.add("loading")
  quoteBtn.innerText = "Loading Quote...";
  // Obtendo citações/dados aleatórios da API e analisando-os em um objeto JavaScript
  fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(result => {
        console.log(result);
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading")
    });
}

soundBtn.addEventListener("click", ()=>{
  // A "SpeechSynthesisUtterance" é uma API de fala para a web que representa uma solicitação de fala
  let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
  speechSynthesis.speak(utterance); // O método "speak" do "speechSynthesis" pronuncia a "utterance" (expressão).
});

copyBtn.addEventListener("click", ()=>{
  // Copiando o texto da citação ao clicar no botão de cópia
  // A propriedade writeText() escreve a string de texto especificada na área de transferência do sistema.
  navigator.clipboard.writeText(quoteText.innerText)
});

twitterBtn.addEventListener("click", ()=>{
  let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
  window.open(tweetUrl, "_blank"); // Abrindo nova aba no twitter, passando a citação no URL
});

quoteBtn.addEventListener("click", randomQuote);
