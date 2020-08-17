import React from 'react';
import Alert from 'react-bootstrap/Alert';
import '../style/Alert.scss';

const alert = props => {
    return (
        <div className="Alert">
            <div>
                <Alert variant={props.variant} onClose={props.handleClose} dismissible>
                    <h5>{props.message}</h5>
                </Alert>
            </div>
        </div>
    );
}

export default alert;