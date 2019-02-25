const mutations = {
    add(state, str = 1) {
        state.num += str;
    },
    pop(state, str = 1) {
        state.num -= str;
    }
}

export default mutations;

// let temp = {}
// let arr = []
// Object.keys(params).forEach(k => {
//     temp[params[k].id] = params[k];
// })
// Object.keys(temp).forEach(i => {
//             arr.push(temp[i];
//             });