const students = [
    {id:21, name:'Nayan Halder'},
    {id:31, name:'Roma Moulick'},
    {id:41, name:'Tanzir Ahasan'},
    {id:51, name:'Anup Halder'}
];
const names = students.map(s => s.name); // students er name janar jonno:
const ids = students.map(s=>s.id); // students er id no janar jonno:
const bigger = students.filter(s => s.id>40); // 40 er upore er janar jonno:
const biggerOne = students.find(s => s.id>40);
console.log(biggerOne);