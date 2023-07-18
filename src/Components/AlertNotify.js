import React from 'react';
import Alert from 'react-bootstrap/Alert';

const AlertNotify = () => {
    return (
        <div>
    {[
      'success'
      ].map((variant) => (
        <Alert className="alert-fixed alert-top" key={variant} variant={variant}>
          Thank you for your email,  i will come back to you as soon as possible!
        </Alert>
      ))}
        </div>
    );
};

export default AlertNotify;