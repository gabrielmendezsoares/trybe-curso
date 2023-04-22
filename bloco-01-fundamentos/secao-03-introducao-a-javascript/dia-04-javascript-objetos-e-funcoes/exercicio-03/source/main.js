const primaryObject = {
  character: 'Daisy Duck',
  origin: 'Donald Duck',
  note: 'Lorem ipsum'
};

const secondaryObject = {
  character: 'Scrooge McDuck',
  origin: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
  note: 'Lorem ipsum',
  recurrent: 'Yes'
};

primaryObject.recurrent = 'Yes';

for (const key in primaryObject) {
  console.log(`Key: ${key}`);
}

for (const key in primaryObject) {
  console.log(`Value: ${primaryObject[key]}`);
}

for (const key in primaryObject) {
  if (key === 'recurrent' && primaryObject[key] === 'Yes' && secondaryObject[key] === 'Yes') {
    console.log('Both recurrents');
  } else {
    console.log(`${primaryObject[key]} e ${secondaryObject[key]}`);
  }
}
