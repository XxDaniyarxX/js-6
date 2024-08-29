let arrayTasks = [
  {
      name: "Kitep okuu",
      isDone: false,
      id: 1
  },
  {
      name: "HTML & CSS",
      isDone: true,
      id: 2
  },
]

const ulElm = document.querySelector('.list-group')
const inputElm = document.querySelector('.form-control')
const addButton = document.querySelector('.btn-primary')
const editBtn = document.querySelector('.edit-btn')

let taskIdGlobal = null



showTasks()  


addButton.addEventListener('click', function(){
  if (addButton.innerText == "SAVE"){
      updateArray()
      return
  }
  if(inputElm.value.trim().length !== 0){
      const newTask = {
          name: inputElm.value,
          isDone: false
      }
      
      arrayTasks.push(newTask)
      showTasks()


  }
})





function showTasks(){
  ulElm.innerHTML = ''
  for (const task of arrayTasks) {
      ulElm.innerHTML += `
           <li class="list-group-item d-flex align-items-center
           gap-3">
               <span class="flex-grow-1"> ${task.name} </span>
               <button class="btn btn-info">
                   <i class="bi bi-pencil-square" onclick="updateTask(${task.id})"></i>
               </button>
               <button class="btn btn-danger" onclick="delTask(${task.id})">
               <i class="bi bi-trash"></i>
               </button> 
          </li>
      `
 }
}

function delTask(taskId) {
  arrayTasks = arrayTasks.filter((task) => {
      console.log(task);
      return task.id !== taskId
  })
  showTasks()
}


function updateTask (taskId){
  taskIdGlobal = taskId
  const oldTask = arrayTasks.find(  (task) => task.id == taskId)
  inputElm.value = oldTask.name
  addButton.innerText = 'SAVE'
}

function updateArray(){
  arrayTasks = arrayTasks.map(  (task) => {
      if(task.id == taskIdGlobal){
          return {
              ...task,
              name: inputElm.value
              
          }
      }else{
          return rask
      }
  })
  showTasks()
}
 
// swith case 
// setInterval() бул JavaScriptтеги бир функцияны белгиленген убакыт аралыгында 
//кайталап аткарууга мүмкүндүк берген ички функция. Башкача айтканда,
// бул белгилүү бир иш-аракетти белгилүү бир убакыт аралыгында кайталап аткаруу үчүн коңгуроо коюу менен барабар.
/* setSetTimeout()бул JavaScriptтеги дагы бир ички функция болуп саналат, 
   ал белгиленген убакыттан кийин бир жолу функцияны аткарууга мүмкүндүк берет. setInterval() функциясынан айырмаланып, 
   ал функцияны кайталай берет, setTimeout() бир гана жолу аткарылат.  /*
// методы обьекта values( Объекттин бардык касиеттеринин маанилерин камтыган массивди кайтарат.),
 keys(: Объекттин бардык касиеттеринин ачкычтарын камтыган массивди кайтарат.)
// GIT( это система контроля версий (VCS), которая позволяет отслеживать изменения в коде с течением времени. 
Она позволяет:),
/* GITHUB (это популярная веб-платформа, которая предоставляет облачное хранилище для ваших Git-репозиториев.
  Она предлагает множество дополнительных функций, таких как:)*/