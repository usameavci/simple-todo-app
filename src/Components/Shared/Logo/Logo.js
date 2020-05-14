import React from 'react';
import logoUrl from '../../../logo.png';

import './logo.scss';

const Logo = () => (<div className="shared-logo">
    <img src={logoUrl} alt="Simple Todo App"/>
    <span>Simple <b>TODO</b> App</span>
</div>);

export default Logo;
