const students = [
    { name: "Prashant", marks: 85 },
    { name: "Tejaswini", marks: 92 },
    { name: "Roshani", marks: 78 },
    { name: "Sarthak", marks: 64 }
  ];
  
  function calculategrade(marks){
    if(marks>=90) return "A";
    else if(marks>=70) return "B";
    else if(marks>=50) return "C";
    else return "F";
  }

  for(let student of students){
    student.grade = calculategrade(student.marks);

  }

  function calculateavg(){
    let total = 0;
    for(let student of students){
        total += student.marks;
    }
    return total/students.length;

  }

  function gethighestmarks(){
    let highest = students[0].marks;

    for(let student of students){
        if(student.marks>highest){
            highest=student.marks;


        }
    }
    return highest;

  }

  function getlowestmarks(){
    let lowest = students[0].marks;

    for(let student of students){
        if(student.marks<lowest){
            lowest = student.marks;
        }
    }
    return lowest;

  }

  console.log("Student Performance Report");

for (let student of students) {
  console.log(
    `${student.name} - Marks: ${student.marks}, Grade: ${student.grade}`
  );
}

console.log("Average Marks : ",calculateavg());
console.log("Highest marks: ",gethighestmarks());
console.log("Lowest marks : ",getlowestmarks());
