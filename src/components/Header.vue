<template>
    <header class="header-wrap">
        <div class="op-back">
           <icon-svg type="back"></icon-svg>
        </div>
        <div class="op-title">
            header
        </div>
        <div class="op-right">
            <mt-button>Template</mt-button>
        </div>
    </header>
    <!-- <mt-header content="详情页面">
    </mt-header> -->
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import IconSvg from '@/components/Icons.vue'
import Event from '@/utils/event'
import notie from 'notie'
import { Button, Header } from 'mint-ui'
export default {
    name:'op-header',
    data(){
        return {
            url: window.location.href,
        }
    },
    methods:{
        goBack(){
            console.log('go back.')
        }
    },
    components:{
        'mt-header':Header,
        'mt-button': Button,
        'icon-svg': IconSvg
    }
}
</script>
<style lang="stylus">
    .header-wrap{
        display: flex;
        flex-direction: row;
        background-color:#fff;
        height: 52px;
        line-height: 52px;
        font-size:18px;
        .op-back, .op-title, .op-right{
            flex:1;
        }
        .op-back{
            font-size:24px;
            padding-left:16px;
        }
    }
</style>