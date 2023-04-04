const emailList = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com'
];

const emailRetriever = (email) => {
  console.log(`O email ${email} está cadastrado!`);
};

emailList.forEach(emailRetriever);
