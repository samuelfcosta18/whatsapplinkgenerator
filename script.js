function mensagem() {
    let input1 = document.querySelector("#input1").value
    let input2 = document.querySelector("#input2").value

    let input1semespaco = input1.replace(/[ +]/gm, "");
    let input2semnada = input2.replace(/\s+/g, "+");
    window.open(`https://wa.me/${input1semespaco}/?text=${input2semnada}`)
}