import { multiply } from "lodash"
import {atom} from "recoil"

export const playlistState = atom({

    key:'playlistState',
    default:null,

})

export const playlistIdState = atom({
    key:'playlistIdState',
    default:'5Y9eVQ3u5rBAfL61OmsvDZ',
})