import initialState from '../store/initialState';

function reducer(state = initialState, action){
    switch (action.type) {
        case 'SET_VAR':
            return{
                ...state,
                var: action.var
            };
        case 'SET_RESTRICTIONS':
            return{
                ...state,
                restricciones: action.restricciones
            };
        case 'SET_OBJ_FUNCTION':
            return{
                ...state,
                FuncionObj:{
                    ...state.FuncionObj,
                    objetivo: action.objetivo,
                    tipoOptimizacion: action.tipoOptimizacion
                }
            };
        default:
            return state;
    }
}

export default reducer;