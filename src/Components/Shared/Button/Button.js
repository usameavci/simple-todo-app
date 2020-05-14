import omit from 'lodash/omit';
import classNames from 'classnames';
import React, { forwardRef } from 'react';

import './button.scss';

const Button = (props, ref) => (<button
    className={classNames("shared-button", props.className)}
    ref={ref}
    {...omit(props, ['className'])}>{props.children}</button>);

export default forwardRef(Button);
