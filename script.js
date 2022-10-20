const starting = document.getElementById('startBalance')
const current = document.getElementById('currentBalance')
const wit = document.getElementById('withdraw')
const dep = document.getElementById('deposit')
const question = document.getElementById('question')
const node = document.getElementById('answer')
const end = document.getElementById('endBalance')

class Banks {
  constructor(balance, withdraw, deposit) {
    this.balance = balance
    this.withdraw = withdraw
    this.deposit = deposit
  }

  withdraw1(withdraw) {
    this.balance -= withdraw
    end.innerText = `Your current balance is: $${this.balance}.00`
    if (withdraw > this.balance & this.balance != 0) {
      end.innerText = 'Sorry!! You dont have enough😟'
      
    }
  }

  deposit1(deposit) {
    this.balance += deposit
    end.innerText = `Your current balance is: $${this.balance}.00`
  }
}
const bank = new Banks(100, 0, 0)
current.innerText = `Your starting out balance is: $${bank.balance}.00`


const withdrawDeposit = () => {
wit.onclick = () => {
  question.innerText = 'How much would you like to withdraw?'
  const node = document.createElement('input')
  node.id = 'answer'
  question.appendChild(node)
  node.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    let wAmount = Number(node.value)
    bank.withdraw1(wAmount)
    }
  })
}
  
dep.onclick = () => {
  question.innerText = 'How much would you like to deposit?'
  const node = document.createElement('input')
  question.appendChild(node)
  node.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    let dAmount = Number(node.value)
    bank.deposit1(dAmount)
    }
  })
  }
}
withdrawDeposit()