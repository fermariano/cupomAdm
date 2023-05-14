const datePicker = document.getElementById('admin-date');
// fr-ca é obrigatório porque precisamos seguir o seguinte esquema: yyyy-mm-dd
datePicker.min = new Date().toLocaleDateString('fr-ca');

let posmessage = document.getElementById('pos-message')

function leDados() {
    let strDados = localStorage.getItem('db')
    let objDados = {}

    if (strDados) {
        objDados = JSON.parse (strDados)
    } else { 
        objDados =  {
            "cupons": [
              {
                "id": 1,
                "nome": "Novos usuários",
                "codigo": "maquinabacana10",
                "data": "2023-11-29",
                "horario": "23:59",
                "desconto": 10
              },
              {
                "id": 2,
                "nome": "Parceria LubaTV",
                "codigo": "lubatv15",
                "data": "2024-10-15",
                "horario": "23:59",
                "desconto": 15
              },
              {
                "id": 3,
                "nome": "Parceria Ballerini",
                "codigo": "ballerini20",
                "data": "2024-06-10",
                "horario": "23:59",
                "desconto": 20
              }
            ]
          }
        }
          
    return objDados
}

function salvaDados(dados) {
    localStorage.setItem ('db', JSON.stringify(dados))
}

function incluirCupom() {
   let objDados = leDados()

   let date = document.getElementById('admin-date').value
   let time = document.getElementById('admin-time').value
   let name = document.getElementById('cupom-name').value
   let code = document.getElementById('cupom-cod').value
   let porc = document.getElementById('cupom-discount').value
   
   if (porc > 100 || porc < 0) {
    posmessage.innerHTML = '[ERRO] Cupom inválido!'
   } else {
    let novoCupom = {
        nome: name,
        codigo: code,
        data: date,
        horario: time,
        desconto: porc
    };

    objDados.cupons.push(novoCupom)
    posmessage.innerHTML = 'Cupom salvo com sucesso!'
   }
    salvaDados(objDados)
}

function imprimeCupons() {
    let tela = document.getElementById('info-message')
    let strHTML = ''
    let objDados = leDados()

    let i = 0
    while (i < objDados.cupons.length) {
        strHTML += `<p><br /> Nome do cupom: ${objDados.cupons[i].nome} <br /> Código do cupom: ${objDados.cupons[i].codigo} <br /> Dia de vencimento: ${objDados.cupons[i].data} <br /> Hora de vencimento: ${objDados.cupons[i].horario} <br /> Porcentagem: ${objDados.cupons[i].desconto}<br /> <br /> </p>`
        i++
    }
        tela.innerHTML = strHTML
}

// botões
document.getElementById('loaddado').addEventListener('click', imprimeCupons)
document.getElementById('botao').addEventListener('click', incluirCupom)
