const defaultState = {
    num: 0
};

export default (state=defaultState, action) =>{
    switch(action.type){
        case 'SETnum':
            return {
                ...state,
                num: action.num
            }
        default:
            return state;
    }
}