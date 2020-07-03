import Vue from 'vue'
import Vuex from 'vuex'

import progress from 'nprogress'

Vue.use(Vuex);

const pens = ['html', 'css', 'js', 'console', 'output'];

const initPens = () => ({
    js:{
        code: '',
        transformer: 'js'
    },
    html:{
        code:'',
        transformer: 'html'
    },
    css:{
        code:'',
        transformer: 'css'
    }
});

//预置的模版
const boilerplates = {
    empty: async ()=>({
        ...initPens(),
        showPens: [ 'html', 'js', 'console']
    })
}
const store = new Vuex.Store({
    state:{
        ...initPens(),
        name:'html',
        visiblePens: ['html', 'js', 'console'],
        activePen: 'js',
        autoRun: false,
        editorStatus: 'saved',
        transforming: false,
    },
    mutations:{
        ACTIVE_PEN(state, pen){
            state.activePen = pen;
            console.log('state',state);
        },
    },
    actions:{
        setActivePen({ commit },pen){
        
            commit('ACTIVE_PEN', pen);
        }
    }

})

export default store;