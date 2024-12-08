let grades = [];
for (let i = 0; i < 12; i++) {
  grades.push(Math.floor(Math.random() * 100) + 1);
}

console.log("Оценки студентов:", grades);


let averageGrade = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
console.log("Средний балл студентов:", averageGrade.toFixed(2));


let maxGrade = Math.max(...grades);
console.log("Максимальный балл:", maxGrade);


let minGrade = Math.min(...grades);
console.log("Минимальный балл:", minGrade);


let positiveGrades = grades.filter(grade => grade >= 60);
console.log("Количество студентов с положительной оценкой:", positiveGrades.length);


let negativeGrades = grades.filter(grade => grade < 60);
console.log("Количество студентов с отрицательной оценкой:", negativeGrades.length);


let letterGrades = grades.map(grade => {
  if (grade >= 80) return 'A';
  if (grade >= 60) return 'B';
  if (grade >= 40) return 'C';
  if (grade >= 20) return 'D';
  return 'E';
});

console.log("Буквенные оценки студентов:", letterGrades);
