<script setup lang="ts">
import { ref } from '@vue/reactivity';
import { IToDo } from '../todo.interface';
import ToDoPopup from './ToDoPopup.vue';

const props = defineProps({
    item: {
        type: Object as () => IToDo,
    },
})
const emit = defineEmits(['updateConfirm', 'removeToDo']);

const popupTrigger = ref(false)
const TogglePopup =()=>{
    popupTrigger.value = !popupTrigger.value
}

</script>
<template>
    <div class="todo-card">
        <div class="todo-card-in ">
            <ToDoPopup v-if="popupTrigger"
            :TogglePopup="() =>TogglePopup()"/>
            <div class="card-check" :class="{ 'is-confirmed': item.isConfirmed }"
                @click="emit('updateConfirm', item.id, item.isConfirmed)"><i
                    class="las la-check check-icon rounded-circle"></i>
            </div>
            <div class="tab-color">

            </div>
            <div class="card-title w-100 border-bottom">
                <h3>{{ item.title }}</h3>

            </div>
            <div class="card-body">{{ item.des }}</div>
            <div class="card-bottom" @click="emit('removeTodo', item.id)"><i class="las la-trash delete-icon"></i></div>
            <div class="card-edit" @click="TogglePopup()"><i class="las la-pen edit-icon"></i></div>
        </div>
        


    </div>
</template>
<style scoped>
.todo-card-in {
    width: 15em;
    height: 15em;
    background-color: #fdfefb;
    border-radius: 0.5rem;
    padding: 20px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
}

.tab-color {
    width: 15px;
    background-color: #efbc67;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

}

.card-body {
    font-size: 20px;
}

.todo-card {
    position: relative;

}

.card-check {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 7px;
    right: 3px;
    outline: 1px solid #efbc67;
    border-radius: 50%;
    background-color: #fdfefb;
}


.is-confirmed .check-icon {

    display: block;
    color: white;

}


.check-icon {
    width: 40px;
    height: 40px;
    display: none;

    font-size: 32px;
    color: white;
    font-weight: 600;
    background-color: #efbc67;
    padding: 5px;
}

.delete-icon {
    position: absolute;
    bottom: 5px;
    right: 3px;
    font-size: 30px;
    color: #e84267;
    font-weight: 600;
    cursor: pointer;
    padding: 5px;
}

.edit-icon {
    position: absolute;
    bottom: 5px;
    right: 40px;
    font-size: 30px;
    color: #efbc67;
    font-weight: 600;
    cursor: pointer;
    padding: 5px;
}

</style>
