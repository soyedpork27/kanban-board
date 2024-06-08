import {atom} from 'recoil';


export const settingAtom = atom({
  key : 'settingAtom',
  default : {
    undo : {
      maxUnit : 5
    },
    progress : {
      maxUnit : 5
    }
  }
})

