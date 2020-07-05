<template>
    <div class="tab-footer">
        <ul class="footer-wrap">
            <li class="footer-item"  @click="setActivePen('html')">
               <icon-svg type="html"></icon-svg>
                  {{this.htmlText}}
            </li>
            <li class="footer-item" @click="setActivePen('js')">
                 <icon-svg type="js"></icon-svg>
                {{this.jsText}}</li>
            <li class="footer-item" @click="setActivePen('css')">
                 <icon-svg type="css"></icon-svg>
                {{this.cssText}}</li>
        </ul>
    </div>
</template>
<script>
    import { mapState, mapActions } from 'vuex';
    import IconSvg from '@/components/Icons.vue'
    import { Button } from 'mint-ui'

    export default {
        name: 'tab-footer',
        data(){
            return {
                htmlText:'html',
                cssText:'css',
                jsText:'js',
                console:'console',
                output: 'output',
                css: 'css',
            }
        },
        methods:{
            ...mapActions(['setActivePen'])
        },
        components:{
            "mt-button":Button,
            "icon-svg": IconSvg,
        }
    }
</script>
<style lang="stylus" scoped>
    .tab-footer{
        position: absolute;
        bottom: 0px;
        width: 100%;
        height: 50px;
        background-color: white;
        box-sizing: border-box;
        vertical-align: middle;
        

        .footer-wrap{
          list-style: none;
            border-top: #f1f2f4;
            overflow: hidden;
            display: flex;
            flex-direction: row;
            color: #545475;
            margin: 0px;
            padding: 0px;
            line-height: 30px;
            text-align: center;
        }
        .footer-item{
            flex: 1;
            margin: 8px;
            box-sizing: border-box;
            font-size: larger;
        }
    }
    .svg-icon{
        display:inline-block;
        width:33px;
        height:24px;
        color:#f1f2f4;
    }
</style>