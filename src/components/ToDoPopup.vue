<script setup lang="ts">

const props = defineProps({
    TogglePopup:{
        type:Function,
    }
})
  





</script>
<template>


    <div class="overlay" @click="TogglePopup()"></div>
    <div class="popup-edit">
        <div class="edit-todo-form ">

            <div class="input-group">
                <span class="input-group-text" id="basic-addon1">
                    Title
                </span>
                <input type="text" class="form-control" placeholder="Title" aria-label="Title"
                    aria-describedby="basic-addon1" />
            </div>
            <div class="input-group mt-3">
                <span class="input-group-text" id="basic-addon1">
                    Body
                </span>
                <textarea class="form-control " placeholder="Body" aria-label="Body" aria-describedby="basic-addon1" />
            </div>
            <div class="d-flex justify-content-center align-items-center mt-4">
                <button class="btn btn-danger px-3 py-2 " @click="TogglePopup()">CANCEL</button>
                <button class="btn btn-warning px-3 py-2 ms-2">EDIT</button>

            </div>

        </div>

    </div>


</template>
<style scoped>
.edit-todo-form {
    width: 20em;
    height: 15em;
    background-color: #fdfefb;
    border-radius: 0.5rem;
    padding: 20px;
    position: relative;

}

.popup-edit {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 1000;
    transform: translate(-50%, -50%);
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.5);

}
</style>
