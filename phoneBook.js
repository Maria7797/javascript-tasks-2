'use strict'


var phoneBook = []; // Здесь вы храните записи как хотите

/*
   Функция добавления записи в телефонную книгу.
   На вход может прийти что угодно, будьте осторожны.
*/
module.exports.add = function add(name, phone, email) {
  if(isValidPhone(phone) && isValidEmail(email)) {
      var person = {
          name: name, 
          phone: phone, 
          email: email
          
      };
      phoneBook.push(person);
  }
};

function isValidPhone(phone) {
    return /^((\+?\d{1,4})[\- ]?)?((\(\d{3}\)|\d{3})[\- ]?)[\d\- ]{7,10}$/.test(phone); 
} 

function isValidEmail(email) {
    return /^[\w\d\.-]+@([\w\u0410-\u044F\d-]+)(\.[\w\u0410-\u044F\d]+)+$/.test(email); 
}

/*
   Функция поиска записи в телефонную книгу.
   Поиск ведется по всем полям.
*/
module.exports.find = function find(query) {
    if(!query) {
        console.log(phoneBook);
    }
    
    for(var i = 0; i < phoneBook.length; i++) {
        if (!phoneBook[i].name.indexOf(query) || !phoneBook[i].phone.indexOf(query) || !phoneBook[i].email.indexOf(query)) {
            console.log(phoneBook[i].name + ', ' + phoneBook[i].phone + ', ' + phoneBook[i].email);
        }
    }
};

/*
   Функция удаления записи в телефонной книге.
*/
module.exports.remove = function remove(query) {
    var sum=0;
    
    for(var i = 0; i < phoneBook.length; i++) {
        if (!phoneBook[i].name.indexOf(query) || !phoneBook[i].phone.indexOf(query) || !phoneBook[i].email.indexOf(query)) {
            phoneBook.splice(i, 1);
            sum++;
        }
    }
    console.log('Удалено: ', sum);
};
