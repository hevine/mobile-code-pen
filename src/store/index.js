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
        editorStatus: 'saved', //'saved, error, changed,saving
        transforming: false,
    },
    mutations:{
        ACTIVE_PEN(state, pen){
            state.activePen = pen;
            console.log('state',state);
        },
        UPDATE_CODE(state, payload){
            let { type, code} = payload
            state[type].code = code;
        },
        SET_EDITOR_STATUS(state, payload){
            let { status } = payload;
            state.editorStatus = status;
        }
    },
    actions:{
        setActivePen({ commit },pen){
        
            commit('ACTIVE_PEN', pen);
        },
        updateCode({ commit }, payload){
            commit('UPDATE_CODE', payload)
        },

        //editor各种状态
        editorChanged({ commit }, payload){
            commit('SET_EDITOR_STATUS', payload);
        }
    }

})

export default store;