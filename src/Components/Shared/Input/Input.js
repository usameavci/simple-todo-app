import React, { forwardRef } from 'react';

import './input.scss';

const Input = (props, ref) => (<input className="shared-input" ref={ref} {...props}/>);

export default forwardRef(Input);
