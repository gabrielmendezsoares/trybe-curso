const degreeAngleA = 65;
const degreeAngleB = 100;
const degreeAngleC = 15;
const sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;
const allAnglesArePositives = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

if (allAnglesArePositives) {
  if (sumOfAngles === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log('Erro, ângulo inválido!');
}
