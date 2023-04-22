const grossSalary = 5000.00;

const inssTable = {
  firstAliquot: { maxValue: 1556.94, rate: 0.08 },
  secondAliquot: { maxValue: 2594.92, rate: 0.09 },
  thirdAliquot: { maxValue: 5189.82, rate: 0.11 },
  ceiling: { value: 570.88 }
};

const irTable = {
  firstAliquot: { maxValue: 1903.98, rate: 0, deduction: 0 },
  secondAliquot: { maxValue: 2826.65, rate: 0.075, deduction: 142.80 },
  thirdAliquot: { maxValue: 3751.05, rate: 0.15, deduction: 354.80 },
  fourthAliquot: { maxValue: 4664.68, rate: 0.225, deduction: 636.13 },
  ceiling: { rate: 0.275, deduction: 869.36 }
};

const calculateInss = (salary) => {
  for (const [key, value] of Object.entries(inssTable)) {
    if (salary <= value.maxValue || key === 'ceiling') {
      return salary * value.rate + (key === 'ceiling' ? value.value : 0);
    }
  }
};

const calculateIr = (salary) => {
  const baseSalary = salary - calculateInss(salary);

  for (const [key, value] of Object.entries(irTable)) {
    if (baseSalary <= value.maxValue || key === 'ceiling') {
      return baseSalary * value.rate - value.deduction;
    }
  }
};

console.log(`Gross salary: ${grossSalary}`);
console.log(`Net salary: ${grossSalary - calculateIr(grossSalary)}`);
