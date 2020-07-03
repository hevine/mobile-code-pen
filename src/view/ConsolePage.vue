<template>
    <div 
        class="console-pen"
        :class="{'active-pen': activePen}"
        @click="setActivePen('console')"
        :style="style"
    >
    <div class="output-iframe" id="output-iframe">
        <div id="output-iframe-holder"></div>
    </div>
    </div>
</template>
<script>
import createPen from '@/utils/create-pen'
export default createPen({
    name: 'console',
   
})
</script>
<style lang="stylus" scoped>
    .CodeMirror{
        height: 80vh;
    }
</style> 
    
