import { mapActions, mapState} from 'vuex';
import createEditor from '@/utils/create-editor'
import Event from '@/utils/event'

export default ({ name, editor, components} = {})=>{
    return {
        name: `${name}-pen`,
        data(){
            return {
                style:{},
            }
        },
        computed:{
            ...mapState([name, 'visiblePens', 'activePen', 'autoRun']),
            ...mapState({
                isVisible: state => state.visiblePens.indexOf(name) !== -1
            }),
            isActivePen(){
                console.log('==== ')
                return this.activePen === name;
            }
        },
        watch:{
            isVisible(){
                this.editor.refresh();
                console.log('refresh')
            },
            visiblePens:{
                immediate: true,
                handler(val){
                    this.style = {};
                   console.log('visible pen change')
                }
            },
            [`${name}.code`](){
                console.log('code');
            },
        },
        mounted(){
            this.editor = createEditor(this.$refs.editor, {
                ...editor,
                readOnly: 'readonly' in this.$route.query, //也可设置只读模式
            });

            this.editor.on('focus', ()=>{
                if(this.activePen !== name ){
                    this.setActivePen(name);
                }
            });

            Event.$on('refresh-editor',()=>{
                this.editor.setValue(this[name].code)
                this.editor.refresh();
            })
        },
        methods:{
            ...mapActions(['setActivePen'])
        },
        components:{
            ...components,
        }
    }
}