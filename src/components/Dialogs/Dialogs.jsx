import React from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map(m => <Message message={m.message}/>);

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.sendMessage();
    };

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    };

    if (!props.isAuth) return <Redirect to={"/login"} />;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}

                <div>
                    <div>
                        <textarea onChange={onMessageChange} ref={newMessageElement}
                                  value={props.newMessageText} />
                    </div>
                    <div>
                        <button onClick={sendMessage}>Send Message</button>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Dialogs;