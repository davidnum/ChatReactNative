const sagas = {};

export default sagaMiddleWare => {
  Object.keys(sagas).forEach(key => {
    sagaMiddleWare.run(sagas[key]);
  });
};
