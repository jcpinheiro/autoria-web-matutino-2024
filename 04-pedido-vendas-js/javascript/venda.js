let nome = document.querySelector('#nome')
let quantidade = document.querySelector('#quantidade')
let valor = document.querySelector('#valor')

let tbody = document.querySelector('#tbody-js')

document
    .querySelector('#btnCadastro')
    .addEventListener('click', function (event) {
        event.preventDefault()

        let inputs = [nome.value, quantidade.value, valor.value]

/*         for(let i=0; i < inputs.length; i++) {
            console.log(inputs[i])
        }
 */
/*         inputs.forEach(function(campo) {
            console.log(campo)

        }) */
    
        let linha = document.createElement('tr')
        
        inputs.forEach(campo => {

           let celula = document.createElement('td')
           celula.textContent = campo
           linha.appendChild(celula )
        })

      
        let celulaSubTotal = document.createElement('td')
        celulaSubTotal.textContent = calculaSubTotal( inputs[1], inputs[2] )

        linha.appendChild(celulaSubTotal )
        tbody.appendChild(linha )
      
        console.log(linha )
    });


 function calculaSubTotal(quantidade, valor ) {
    return parseFloat(quantidade * valor )
 }   






