import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore/lite";
import { IToDo } from "./todo.interface";

const firebaseConfig = {
  apiKey: "AIzaSyCYvf4ondTVaE1TVUCnfivo38eNpiYaBPg",
  authDomain: "todo-list-d2679.firebaseapp.com",
  projectId: "todo-list-d2679",
  storageBucket: "todo-list-d2679.appspot.com",
  messagingSenderId: "479906194725",
  appId: "1:479906194725:web:9cdcf9d542fa6e3fa626cc",
};

const firbaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firbaseApp);

export default function useFirebase() {
  const getToDos = async () => {
    const todosCol = collection(db, "todos");
    const todoSnapshot = await getDocs(todosCol);
    const todoList = todoSnapshot.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });

    return todoList as IToDo[];
  };
  const addToDo = async (title: string, des: string) => {
    const todosCol = collection(db, "todos");
    const tododata = await addDoc(todosCol, {
      title: title,
      des: des,
      isConfirmed: false,
    });
  };

  const updateConfirmed = async (id: string, isConfirmed: boolean) => {
    const todoRef = doc(db, "todos", id);
    const isConfirm = await updateDoc(todoRef, {
      isConfirmed: isConfirmed,
    });
  };
  const deleteToDo = async (id: string) => {
    const todoRef = doc(db, "todos", id);
    const removeTodo = await deleteDoc(todoRef);
  };

  const editToDo = async (id: string, title: string, des: string) => {
    const todoRef = doc(db, "todos", id);
    const editToDoDoc = await updateDoc(todoRef, {
      title: title,
      des: des,
    });
  };

  return {
    getToDos,
    addToDo,
    updateConfirmed,
    deleteToDo,
    editToDo,
  };
}
