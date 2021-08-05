import produce from 'immer'

const initialState = {
    selectedTab: ""
}


export default produce((draft, action = {}) => {
    switch (action.type) {
        case 'SET_SELECT_TAB':
            draft.selectedTab = action.payload.selectedTab
        default:
    }
},
    initialState
)