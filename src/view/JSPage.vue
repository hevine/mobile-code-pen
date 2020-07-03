<template>
    <div 
        class="js-pen"
        :class="{'active-pen': activePen}"
        @click="setActivePen('js')"
        :style="style"
    >
     <textarea ref="editor" v-model="js.code"></textarea>
       
    </div>
</template>
<script>
import createPen from '@/utils/create-pen'
export default createPen({
    name: 'js',
    editor:{
        mode:'jsx',
        autoCloseTags: true,
        autofocus: true,
    }
})
</script>