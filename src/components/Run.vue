<template>
    <div>
        <mt-button class="button" @click="goToResult()">
            <icon-svg type="run"></icon-svg>
            {{text}}
        </mt-button>
    </div>
</template>
<script>
import { Button } from 'mint-ui'
import IconSvg from '@/components/Icons.vue'
export default {
    name:'btn-run',
    props:{
        title:{
            type:String,
            value:'run'
        }
    },
    data(){
        return {
            text: this.title
        }
    },
    methods:{
        goToResult(){
            this.$router.push({path:'/run',query: {id:'1'}})
        }
    },
    components:{
        'mt-button': Button
    }
}
</script>
<style lang="stylus">
    .button{
        width:150px;
        height:32px;
        border-radius:8px;
        position:absolute;
        right:16px;
        
    }
</style>