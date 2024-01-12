import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';


//creating interface to catch errors while writing code

interface Todo {
  id: number;
  title: string;
  completed: boolean;

}


axios.get(url).then(response => {
  // console.log(response.data);
  
  // ad as Todo to catch the error with interface
  const todo = response.data as Todo
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  logTodo(id, title,completed);
});

// adding the type can also catch error 
const logTodo = (id:number , title:string , completed:boolean) => {
  console.log(`
  The todo with ID : ${id}
  has title of : ${title}
  and is it finished ? ${completed}
  `)
}
