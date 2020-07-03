<template>
    <div>
        helloworld
        <div class='pens'>
            <html-pen class="pen" v-show="isVisible('html')"></html-pen>
            <js-pen class="pen" v-show="isVisible('js')"></js-pen>
            <console-pen class="pen" v-show="isVisible('console')"></console-pen>
        </div>
          <tab-footer ></tab-footer>
    </div>
  
</template>

<script>
import { mapActions, mapState} from 'vuex';
import progress from 'nprogress'
import TabFooter from '@/components/Footer.vue'
import HTMLPen from '@/view/HTMLPage.vue'
import JSPen from '@/view/JSPage.vue'
import ConsolePen from '@/view/ConsolePage.vue'


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
        'console-pen': ConsolePen,
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
    .pens{
        height: calc(100%)
    }
     .CodeMirror{
        height: calc(80vh);
    }
</style>
