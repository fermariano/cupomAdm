const datePicker = document.getElementById('admin-date');
// fr-ca é obrigatório porque precisamos seguir o seguinte esquema: yyyy-mm-dd
datePicker.min = new Date().toLocaleDateString('fr-ca');

const message = document.getElementById('pos-message')
const info = document.getElementById('info-message')


function enviar() {
    var date = document.getElementById('admin-date').value
    var time = document.getElementById('admin-time').value
    var name = document.getElementById('cupom-name').value
    var code = document.getElementById('cupom-cod').value
    var porc = document.getElementById('cupom-discount').value

    if (porc > 100 || porc < 1) {
        window.alert("Porcentagem inválida!")
    } else {
        window.alert("Cupom inserido com sucesso");
        info.innerHTML += `Nome do cupom: ${name} <br /> Código do cupom: ${code} <br /> Dia de vencimento: ${date} <br /> Hora de vencimento: ${time} <br /> Porcentagem: ${porc}<br /> <br />`
    }

    
    

    
}



