function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
  this.subject = undefined;
  this.excluded = undefined;
}

Student.prototype.setSubject = function (subjectName) {
  if (this.excluded === undefined) {
    this.subject = subjectName;
  } else {
    console.log(
      `Студент ${this.name} отчислен, установка предмета невозможна.`
    );
  }
};

Student.prototype.addMarks = function (...marksToAdd) {
  if (this.marks !== undefined) {
    this.marks.push(...marksToAdd);
  } else {
    console.log(`Студент ${this.name} отчислен, добавление оценок невозможно.`);
  }
};

Student.prototype.getAverage = function () {
  if (this.marks === undefined || this.marks.length === 0) {
    return 0;
  }
  const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
  return sum / this.marks.length;
};

Student.prototype.exclude = function (reason) {
  this.subject = undefined;
  this.marks = undefined;
  this.excluded = reason;
};
