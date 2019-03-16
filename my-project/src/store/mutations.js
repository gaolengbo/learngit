const ADD = (state, res) => {
  Object.assign(state.form, res);
};
const POP = (state, str = 1) => {
  state.num -= str;
};

export default {
  ADD,
  POP,
};

// let temp = {}
// let arr = []
// Object.keys(params).forEach(k => {
//     temp[params[k].id] = params[k];
// })
// Object.keys(temp).forEach(i => {
//             arr.push(temp[i];
//             });

// this.valueList[id]={
//   id
// }
