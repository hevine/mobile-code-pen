<template>
    <div>
        <mt-navbar v-model="selectType">
            <mt-tab-item id="console">Console</mt-tab-item>
            <mt-tab-item id="output">Output</mt-tab-item>
        </mt-navbar>
    </div>
</template>
<script>
import { Navbar, TabItem } from 'mint-ui'

export default {
    name:'result-page',
    data(){
        return {
            selectType:'output',
        }
    },
    
}
</script>