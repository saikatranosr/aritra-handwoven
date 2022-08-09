import PropTypes from 'prop-types'
import 'material-icons/iconfont/material-icons.css'

export default function Icon({children, varient, fill, size, className}){
    return <span
        className={`material-icons-${varient} select-none ${className}`}
        style={{fontSize: size}}
        >
        {children}
        </span>
}

Icon.propTypes = {
    fill: PropTypes.string,
    size: PropTypes.string,
    varient: PropTypes.string,
    className: PropTypes.string
}

Icon.defaultProps = {
    varient: 'outlined',
    fill: 'black', // Should Depend on theme
    size: '1.5rem',
    className: ""
}