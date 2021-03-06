import React from "react";

import AlertStyles from "./alert.module.css";


let Alert = props => {
    return (<div className={AlertStyles.Wrap}>
                <h2>Do you really want to delete this message?</h2>
                <button className={AlertStyles.Yes} onClick={() => props.deleteMessage(props.deleteMessageId)}>Yes</button>
                <button className={AlertStyles.No} onClick={() => props.setDeleteMessageAlert(false, null)}>No</button>
           </div>)
}

export default Alert