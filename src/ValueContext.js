import React from 'react';

const ValueContext=React.createContext(45,()=>{});/* context has 2 things provider and consumer*/
//we made a function ()=>{} without anything 
export default ValueContext;