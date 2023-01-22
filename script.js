const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {

    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
    // const today = "10/01"

    const dayExists = nlwSetup.dayExists(today)

    if (dayExists) {
       /* Alerting the user that the day already exists. */
       alert("Dia já incluso ❌")
       return
    }

    alert('Adicionado com sucesso ✅') 
    nlwSetup.addDay(today)
}

function save() {
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data)) || {}
}











// const data = {
//     run: ['01-23', '01-24', '01-28', '01-29', '01-30', '01-31', '02-01',],   //ARRAY
//     water: ['01-26'],
//     food: ['01-27'],
//     gym: ['01-25'],
// }

const data = JSON.parse(localStorage.getItem("NLWSetup@habits"))
 nlwSetup.setData(data)
 nlwSetup.load()