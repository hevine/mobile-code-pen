<template>
    <div 
        class="html-pen"
        :class="{'active-pen': activePen}"
        @click="setActivePen('css')"
        :style="style"
    >
     <textarea ref="editor" v-model="css.code"></textarea>
       
    </div>
</template>
<script>
import createPen from '@/utils/create-pen'
export default createPen({
    name: 'css',
    editor:{
        mode:'cssmixed',
        autoCloseTags: true,
    }
})
</script>