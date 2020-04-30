export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;// undefined를 리턴해서는 안되기 때문에 state만 리턴하면 됨
    }
};