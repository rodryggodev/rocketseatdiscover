/*esse codigo abaixo é um objeto
  * dentro dele tem duas função que são chamadas de metodos
  * 
  */
const Modal = {
    open() {
      document.querySelector('.modal-overlay')
      .classList.add('active');  
    },
    close() {
      document.querySelector('.modal-overlay')
      .classList.remove('active');
    }
  }

// array com objetos dentro
const transactions = [
    {
      id: 1,
      description: 'Luz',
      ammount: -500000,
      date: '23/01/2021'
    },
    
    {  
      id: 2,
      description: 'Website',
      ammount: 500000,
      date: '23/01/2021'
    },
    
    {
      id: 3,
      description: 'Internet',
      ammount: -20000,
      date: '23/01/2021'
    }
  ]


const Transaction = {
    incomes() {
      // vai somar as entradas
    },
    
    expenses() {
      // somar saídas
    },
    
    total() {
      // entradas - saidas
    }
  }

// Eu preciso pegar minhas transações do meu obejto aqui no javascript
// e colocar la no html


const DOM = { 
    addTransaction(transaction, index) {
      const tr = document.createElement('tr')
      tr.innerHTML = DOM.innerHTMLTransaction(transaction); 
    },
    
    innerHTMLTransaction(transaction) {
      const html = `
      <tr>
        <td class="description">${transaction.description}</td>
        <td class="expense">${transaction.ammount}</td>
        <td class="date">${transaction.date}</td>
        <td>
          <img src="./assets/minus.svg" alt="Remover transação">
        </td>
      </tr>`  
      
      return html;
    }
  }

  DOM.addTransaction(transaction[0]);
