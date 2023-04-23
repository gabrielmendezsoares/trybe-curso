const emailList = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com'
];

const emailRetriever = (email) => {
  console.log(`The email ${email} is registered!`);
};

emailList.forEach(emailRetriever);
