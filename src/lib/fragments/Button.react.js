import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button as MUIButton } from '@mui/material';

/**
 * A Material UI Button component.
 */
const Button = (props) => {
    const {id, setProps, children, ...rest} = props;

    const increment = () => {
        setProps({n_clicks: props.n_clicks + 1});
    }

    return (
        <MUIButton
            id={id}
            onClick={increment}
            {...rest}
        >
            {children}
        </MUIButton>
    );
}

Button.defaultProps = {
    n_clicks: 0,
    persisted_props: ['value'],
    persistence_type: 'local',
};

/** Props not implemented:
 *  - component - The component used for the root node. Either a string to use a DOM element or a component.
 */
Button.propTypes = {
    /**
     * The ID of this component, used to identify dash components
     * in callbacks. The ID needs to be unique across all of the
     * components in an app.
     */
    id: PropTypes.string,

    /**
     * Dash-assigned callback that gets fired when the value changes.
     */
    setProps: PropTypes.func,

    /**
     * Used to allow user interactions in this component to be persisted when
     * the component - or the page - is refreshed. If `persisted` is truthy and
     * hasn't changed from its previous value, any `persisted_props` that the
     * user has changed while using the app will keep those changes, as long as
     * the new prop value also matches what was given originally.
     * Used in conjunction with `persistence_type` and `persisted_props`.
     */
    persistence: PropTypes.oneOfType(
        [PropTypes.bool, PropTypes.string, PropTypes.number]
    ),

    /**
     * Properties whose user interactions will persist after refreshing the
     * component or the page.
     */
    persisted_props: PropTypes.arrayOf(PropTypes.oneOf(['value'])),

    /**
     * Where persisted user changes will be stored:
     * memory: only kept in memory, reset on page refresh.
     * local: window.localStorage, data is kept after the browser quit.
     * session: window.sessionStorage, data is cleared once the browser quit.
     */
    persistence_type: PropTypes.oneOf(['local', 'session', 'memory']),


    /**
     * The content of the button.
     */
    children: PropTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](https://mui.com/material-ui/api/button/#css) for more details.
     */
    classes: PropTypes.object,

    /**
     * The color of the component. It supports both default and custom theme colours.
     */
    color: PropTypes.oneOfType([
        PropTypes.oneOf(['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning']),
        PropTypes.string
    ]),

    /**
     * If `true`, the button will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * If `true`, no elevation is used.
     */
    disableElevation: PropTypes.bool,

    /**
     * If `true`, the  keyboard focus ripple will be disabled.
     */
    disableFocusRipple: PropTypes.bool,

    /**
     * If `true`, the ripple effect will be disabled.
     */
    disableRipple: PropTypes.bool,

    /**
     * Element placed after the children.
     */
    endIcon: PropTypes.node,

    /**
     * If `true`, the button will take up the full width of its container.
     */
    fullWidth: PropTypes.bool,

    /**
     * The URL to link to when the button is clicked.
     * If defined, an `a` element will be used as the root node.
     */
    href: PropTypes.string,

    /**
     * The size of the button. `small` is equivalent to the dense button styling.
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),

    /**
     * Element placed before the children.
     */
    startIcon: PropTypes.node,

    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.object,

    /**
     * The variant to use.
     */
    variant: PropTypes.oneOf(['text', 'outlined', 'contained']),

    /**
     * The number of times the button has been clicked
     */
    n_clicks: PropTypes.number,
};

export default Button;
