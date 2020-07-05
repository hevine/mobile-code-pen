<template>
    <img :src="iconSrc" 
                    onload="SVGInject(this)" 
                    class="svg-icon"/>
</template>
<script>
import htmlSvg from '@/svg/html.svg'
import jsSvg from '@/svg/js.svg';
import cssSvg from '@/svg/css.svg';
import consoleSvg from '@/svg/console.svg';
import outputSvg from '@/svg/data-output.svg';
import backSvg from '@/svg/backArrow.svg'
import clearSvg from '@/svg/clear.svg'
import goSvg from '@/svg/goArrow.svg';
import loadSvg from '@/svg/loading.svg';
import runSvg from '@/svg/run.svg';
import SVGInject from '@iconfu/svg-inject'

const iconMap = {
    'html': htmlSvg,
    'clear': clearSvg,
    'css': cssSvg,
    'console': consoleSvg,
    'js': jsSvg,
    'back':backSvg,
    'go':goSvg,
    'loading': loadSvg,
    'run':runSvg,
}
export default {
    name:"icon-svg",
    props:{
       type:{
           type:String,
           value:'html'
       }
    },
    data(){
        return {
            iconType: this.type,
            iconMap: iconMap,
        }
       
    },
    computed:{
        iconSrc(){
            return iconMap[this.iconType];
        },
    }
}
</script>
<style lang="stylus">
    .svg-icon{
        width:1em;
        height:1em;
        vertical-align :-0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>