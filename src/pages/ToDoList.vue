<script setup lang="ts">

import { onMounted, ref } from '@vue/runtime-core';

import useFirebase from '../firebase';

import ToDoCard from '../components/ToDoCard.vue';
import { IToDo } from '../todo.interface';
import { updateDoc } from '@firebase/firestore/dist/lite';

import { trigger } from '@vue/reactivity';

const {
    getToDos,
    addToDo,
    updateConfirmed,
    deleteToDo,
    editToDo,

} = useFirebase();
const title = ref<string>('')
const des = ref<string>('')
const toDos = ref<IToDo[]>([])


const addData = async () => {
    await addToDo(title.value, des.value)
    toDos.value = await getToDos();
}
const updateConfirm = async (id: string, isConfirmed: boolean) => {
    await updateConfirmed(id, !isConfirmed)
    console.log('updateConfirm')
    toDos.value = await getToDos();
}
const removeToDo = async (id: string) => {
    if (!confirm('Are you sure?')) return;
    await deleteToDo(id)

    toDos.value = await getToDos();
}

onMounted(async () => {
    toDos.value = await getToDos();
})




</script>

<template>

    <div class="todolist-page">
        <div class="container">
            
            <div class="topic-title">
                <h1>To Do List</h1>
            </div>
            <div class="todolist pt-3 d-flex flex-wrap ">
                <div class="add-todo-form ">
                    <div class="input-group">
                        <span class="input-group-text" id="basic-addon1">
                            Title
                        </span>
                        <input v-model="title" type="text" class="form-control" placeholder="Title" aria-label="Title"
                            aria-describedby="basic-addon1" />
                    </div>
                    <div class="input-group mt-3">
                        <span class="input-group-text" id="basic-addon1">
                            Body
                        </span>
                        <textarea v-model="des" class="form-control " placeholder="Body" aria-label="Body"
                            aria-describedby="basic-addon1" />
                    </div>
                    <div class="d-flex justify-content-center align-items-center mt-4">
                        <button class="btn btn-warning px-3 py-2 " @click="addData">Add</button>
                    </div>

                </div>
                <ToDoCard v-for="toDo in toDos" :key="toDo.id" :item="toDo" @update-confirm="updateConfirm"
                    @remove-todo="removeToDo" />

            </div>
      
        </div>
    </div>
</template>
<style scoped>
.todolist-page {
    min-height: 100vh;
    height: 100%;
    background-color: #262650;

}

.add-todo-form {
    width: 15em;
    height: 15em;
    background-color: #fdfefb;

    border-radius: 0.5rem;
    padding: 20px;
}

.todolist {
    gap: 1em;
}

.topic-title {
    color: #fff;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
    padding-top: 1em;

}
</style>