import React from 'react';
import {NavLink} from "react-router-dom";
import DialogsStyles from "./DialogsList.module.css";
import Avatar from "../../../img/Profile/avatar.png";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (<li className={DialogsStyles.DialogItem}>
                <div className={DialogsStyles.avatar}>
                    <img src={props.photos.small || Avatar} alt={"avatar"}/>
                </div>

                <div className={DialogsStyles.dates}>
                    <NavLink to={path}>{props.name}</NavLink>

                    <div className={DialogsStyles.lastMessage}>
                        <span>Last message: </span>{props.lastDialogActivityDate}
                        {props.LastMessage}
                    </div>
                </div>

                 {(props.newMessagesCount > 0) && <div className={DialogsStyles.newMessagesCount + " " + DialogsStyles.active}>
                    {props.newMessagesCount}
                 </div>}
            </li>);
}

const DialogsList = (props) => {

    let dialogsElements = props.dialogs.map((dialog, key) => {
        return <DialogItem name={dialog.userName}
                           key={key} id={dialog.id}
                           lastDialogActivityDate={dialog.lastDialogActivityDate}
                           lastUserActivityDate={dialog.lastUserActivityDate}
                           newMessagesCount={dialog.newMessagesCount}
                           photos={dialog.photos}
        />
    });

    return(
        <div className={DialogsStyles.dialogs}>
            <div className={DialogsStyles.dialogList}>
                <div className={DialogsStyles.dialogListHeader}>

                    <div className={DialogsStyles.searchDialog}>
                        <input type="text" placeholder={"Search"} className={DialogsStyles.search}/>
                    </div>
                </div>

                <div className={DialogsStyles.contactList}>
                    <ul>
                        {dialogsElements.length ? dialogsElements : <p>You have no messages</p>}
                    </ul>
                </div>

               
            </div>
        </div>);
}


export default DialogsList;