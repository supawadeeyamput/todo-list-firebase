
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


const firebaseConfig = {
    apiKey: "AIzaSyCYvf4ondTVaE1TVUCnfivo38eNpiYaBPg",
    authDomain: "todo-list-d2679.firebaseapp.com",
    projectId: "todo-list-d2679",
    storageBucket: "todo-list-d2679.appspot.com",
    messagingSenderId: "479906194725",
    appId: "1:479906194725:web:9cdcf9d542fa6e3fa626cc"
  };

  const firbaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firbaseApp);


export default function useFirebase(){
    const getToDos= async ()=>{
        const todosCol = collection(db,'todos')
        const todoSnapshot =await getDocs(todosCol)
        const todoList = todoSnapshot.docs.map(doc => doc.data());
        console.log(todoSnapshot.docs)
        return todoList;
        
    }

  return{
    getToDos,
  }  
}
