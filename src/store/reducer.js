import initialState from './initialState';

function reducer(state = initialState, action){
    switch (action.type) {
        case 'SET_VAR':
            return{
                ...state,
                var: action.var
            };
        case 'SET_RESTRICTIONS':
            console.log('paso por el reducer con: ', action.restricciones)
            return{
                ...state,
                restricciones: action.restricciones
            };
        case 'SET_OBJ_FUNCTION':
            console.log('paso por el reducer con: ', typeof(action.obj.obj),action.obj.obj)
            return{
                ...state,
                FuncionObj:{
                    ...state.FuncionObj,
                    objetivo: action.obj.obj,
                    tipoOptimizacion: action.obj.tipoOptimizacion
                }
            };
        case 'SET_RESTRICTIONS_VALUES':
            console.log('paso por el reducer en el SET_RESTRICTIONS_VALUES', action.value)
                return {
                ...state,
                ArrRestricciones:{
                    ...state.ArrRestricciones,
                    restricciones: action.value,   
                }
            };
            case 'SAVE_RESULT':
            console.log('paso por el reducer en el SAVE_RESULT', action.result)
                return {
                ...state,
                resultado: action.result 
            };
        default:
            return state;
    }
}

export default reducer;