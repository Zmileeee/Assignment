const student = {
  name: "Sokha",
  scores: [78, 85, 92, 60, 74],
};

function calculateAverage(scores) {
  let total = 0;
  scores.forEach((score) => {
    total += score;
  });
  return total / scores.length;
}

function getLetterGrade(average) {
  if (average >= 90) return "A";
  if (average >= 80) return "B";
  if (average >= 70) return "C";
  return "F";
}

const sokhaAverage = calculateAverage(student.scores);
const sokhaGrade = getLetterGrade(sokhaAverage);
console.log(`${student.name}'s average is ${sokhaAverage.toFixed(1)} — Grade: ${sokhaGrade}`);
