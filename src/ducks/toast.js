const initialState = {

};
export const toastActions = {
    SHOW_TOAST: 'SHOW_TOAST',
    HIDE_TOAST: 'HIDE_TOAST'
};

export const toastAsyncActions = {
    showToast: (data) => {
        return async (dispatch) => {
            const toastId = Date.now();
            // send errors to logger/analytics
            // override message if user has lost internet connection
            dispatch({
                type: toastActions.SHOW_TOAST,
                payload: {
                    ...data,
                    id: toastId
                }
            });
            setTimeout(() => dispatch({
                type: toastActions.HIDE_TOAST,
                payload: {
                    ...data,
                    id: toastId
                }
            }), (data.timeout || 5000));
        };
    }
};

export function toastReducer(state = initialState, action) {
    switch (action.type) {
        case toastActions.SHOW_TOAST:
            return {
                ...state,
                ...action.payload,
                showToast: true
            };
        case toastActions.HIDE_TOAST:
            return {
                ...initialState,
                showToast: false
            };
        default:
            return initialState;
    }
}