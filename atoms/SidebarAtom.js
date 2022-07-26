import {
    atom,
  } from 'recoil';

const SidebarAtom = atom({
    key: 'SidebarAtom', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
  });

  export default SidebarAtom;