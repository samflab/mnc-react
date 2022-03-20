
export const dispatchHandler = (dispatch, dispatchType, payloadType) => {
        return dispatch({
            type: dispatchType,
            payload: payloadType
        })
}