<template>
    <div class="bg">
        <op-header></op-header>
        <p class="pen-lang">当前：{{activePen}}</p>
        <div class='pens'>
            <html-pen class="pen" v-show="isVisible('html')"></html-pen>
            <js-pen class="pen" v-show="isVisible('js')"></js-pen>
            <css-pen class="pen" v-show="isVisible('css')"></css-pen>
        </div>
        <btn-run title="运行"></btn-run>
          <tab-footer ></tab-footer>
    </div>
  
</template>

<script>
import { mapActions, mapState } from 'vuex';
import progress from 'nprogress'
import OpHeader from '@/components/Header.vue'
import TabFooter from '@/components/Footer.vue'
import HTMLPen from '@/view/HTMLPage.vue'
import JSPen from '@/view/JSPage.vue'
import ConsolePen from '@/view/ConsolePage.vue'
import CssPen from '@/view/CSSPage.vue'
import BtnRun from '@/components/Run.vue'

import 'normalize.css'

export default {
    name:'main-page',
    data(){
        return {
            title:'mini code pan'
        }
    },
    components:{
        'tab-footer': TabFooter,
        'html-pen': HTMLPen,
        'js-pen': JSPen,
        'css-pen': CssPen,
        'console-pen': ConsolePen,
        'op-header': OpHeader,
        'btn-run':BtnRun,
    },
    computed:{
        ...mapState([name, 'visiblePens', 'activePen']),
    },
    methods:{
        isVisible(pen){
            console.log('this.state', this.activePen)
            return this.activePen === pen
        }
    }
}
</script>
<style src="codemirror/lib/codemirror.css">

</style>
<style src="codemirror/addon/fold/foldgutter.css">

</style>

<style lang="stylus" scoped>
    .bg{
        background-color:#a4b0cc;
        height: 100vh;
        width: 100%;
        box-sizing: border-box;
    }
    .pen-lang{
        background-color:#fff;
        display:inline-block;
        height:32px;
        width:100px;
        padding:8px;
        box-sizing:border-box;
        margin-left:8px;
        border-radius:3px;
    }
    .pens{
        background-color: #fff;
        /* border: 1px solid #f1f2f4; */
        border-radius: 10px;
        height: calc(50%);
        margin: 8px;
        padding:8px;
        box-shadow: 4px 5px 4px #c7d2e3;
        -moz-box-shadow: 4px 5px 4px #c7d2e3;
        -webkit-box-shadow: 4px 5px 4px #c7d2e3;
       
    }
     .CodeMirror{
        height: calc(80vh);
    }
</style>
