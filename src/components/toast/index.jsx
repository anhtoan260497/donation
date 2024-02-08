import React from "react";
import PropTypes from "prop-types";
import './styles.scss'
import clsx from "clsx";

Toast.propTypes = {
  status : PropTypes.string // success - warning - error 
};

Toast.defaultProps = {
  status : 'success'
}

function Toast({status}) {

  const colorToast = (status) => {
    if(status === 'success') return 'is-primary'
    if(status === 'warning') return 'is-warning'
    if(status === 'error') return 'is-danger'
    return ''
  }

  return (
    <article className={clsx("message","toast-container", colorToast(status))}>
      <div className="message-header">
        <p >
          {status}
        </p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body has-text-centered">
        Connect Success
      </div>
    </article>
  );
}

export default Toast;
