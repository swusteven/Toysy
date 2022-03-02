export const OPEN_MODAL = "OPEN_MODAL"
export const CLOSE_MODAL = "CLOSE_MODAL"

const openModal = () =>({
  type: OPEN_MODAL
});

const closeModal = () =>({
  type: CLOSE_MODAL
});


export const setModalToClose = () => dispatch =>{
  return dispatch(closeModal());
}

export const setModalToOpen = () => dispatch =>(
  dispatch(openModal()) 
);  