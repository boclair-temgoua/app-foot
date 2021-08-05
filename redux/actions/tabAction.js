import {
    SET_SELECT_TAB
} from './rootAction'

export const setSelectedTabSuccess = (selectedTab) => ({
    type: SET_SELECT_TAB,
    payload: {selectedTab}
})


export function setSelectedTab(selectedTab){
    return dispasth => {
        dispasth(setSelectedTabSuccess(selectedTab))
    }
}
