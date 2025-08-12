let classRoom = [
    {
        "Marnie" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : true},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    {
        "Lena" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : true},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    },
    {
        "Shoshanna" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : false},
                {"Thursday" : true},
                {"Friday" : false}
            ]
    },
    {
        "Jessa" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : false},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    }
];

// YOUR CODE BELOW
function attendanceCheck(day) {
  let presentStudent=[];
  for(let i=0;i<classRoom.length;i++){
   let studentName =classRoom[i];
    let student= Object.keys(studentName)[0]
    // console.log(student)
    let dayName = studentName[student]
    console.log(dayName)
    
    for(let j=0;j<dayName.length;j++){
      let value = dayName[j];
    console.log(value)
      
      let dayObj= Object.keys(value)[0]
      if(dayObj===day && value[dayObj]){
        
        presentStudent.push(student)
      }
      
    }
  }
  return presentStudent
}