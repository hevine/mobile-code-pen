<template>
    <div 
        class="html-pen"
        :class="{'active-pen': activePen}"
        @click="setActivePen('html')"
        :style="style"
    >
     <textarea ref="editor" v-model="html.code"></textarea>
       
    </div>
</template>
<script>
import createPen from '@/utils/create-pen'
export default createPen({
    name: 'html',
    editor:{
        mode:'htmlmixed',
        autoCloseTags: true,
    }
})
</script>