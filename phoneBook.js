var phoneBook = []; // Здесь вы храните записи как хотите

/*
   Функция добавления записи в телефонную книгу.
   На вход может прийти что угодно, будьте осторожны.
*/
module.exports.add = function add(name, phone, email) {
  if(ValidPhone(phone) && ValidEmail(email)) {
      var person = {
    name: name, 
    phone: phone, 
    email: email
  };
  phoneBook.push(person);
  }
};

function ValidEmail(email) {
  var Ve = /^\w+[@]+[a-z]+\.+[a-z]+$/;
  return Ve.test(email);
};

function ValidPhone(phone) {
  var Vp = /^\+?\d+$/g;
  return Vp.test(phone);
};

/*
   Функция поиска записи в телефонную книгу.
   Поиск ведется по всем полям.
*/
module.exports.find = function find(query) {
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
