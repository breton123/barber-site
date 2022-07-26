import {
    atom,
  } from 'recoil';

const ErrorAtom = atom({
    key: 'ErrorAtom', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
  });

  export default ErrorAtom;