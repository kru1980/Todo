// import R from "ramda";
const R = require("ramda");

// const getTracksById = (state, id) => R.prop(id, state.tracks)

// export const getTracks = state => {
//   const tracks = R.map(id => getTracksById(state, id), state.tracksPage.ids )
//   return tracks
// }

//================================================
// Расчет количества задач для toolbar
// При добавлении задачи происходит глюк и в массив allIds записывается лишнее значение из за чего не правильная длина массива
export const hakLength = state => {
  const todoLength = R.compose(
    R.length,
    R.keys
  )(state.todo.byId);

  return todoLength;
};
//================================================

// export const filterAuthUserTodos = (auth, todos) => {
//   // const userId = auth.uid;
//   const todosUser = R.filter(
//     R.where({
//       authorId: R.equals(auth.uid)
//     })
//   );

//   return {todosUser(todos)};
// };
