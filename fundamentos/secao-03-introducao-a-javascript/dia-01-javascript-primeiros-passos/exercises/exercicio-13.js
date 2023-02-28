const grade = 100;

if (grade >= 0 && grade <= 100) {
    if (grade >= 90) {
        console.log('A');
    } else if (grade >= 80) {
        console.log('B');
    } else if (grade >= 70) {
        console.log('C');
    } else if (grade >= 60) {
        console.log('D');
    } else if (grade >= 50) {
        console.log('E');
    } else if (grade < 50) {
        console.log('F');
    } else {
        console.log('Erro, nota incorreta!');
    };
} else {
    console.log('Erro, nota incorreta!');
};
