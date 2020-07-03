<template>
    <div class="tab-footer">
        <ul class="footer-wrap">
            <li class="footer-item"  @click="setActivePen('html')">{{this.htmlText}}</li>
            <li class="footer-item" @click="setActivePen('js')">{{this.cssText}}</li>
            <li class="footer-item" @click="setActivePen('console')">{{this.console}}</li>
        </ul>
    </div>
</template>
<script>
    import { mapState, mapActions } from 'vuex';
    export default {
        name: 'tab-footer',
        data(){
            return {
                htmlText:'html',
                cssText:'js',
                console:'console'
            }
        },
        watch:{

        },
        beforeRouteEnter(){
            
        },
        methods:{
            ...mapActions(['setActivePen'])
        }
    }
</script>
<style lang="stylus" scoped>
    .tab-footer{
        position:absolute;
        bottom:0px;
        width:100%;
        height:50px;
        

        .footer-wrap{
            list-style :none;
            border-top: #f1f2f4;
            overflow:hidden;
            display:flex;
            flex-direction:row;
            color: #545475;
        }
        .footer-item{
            flex:30%;
            margin:8px;
            border-box:box-sizing;
        }
    }
</style>