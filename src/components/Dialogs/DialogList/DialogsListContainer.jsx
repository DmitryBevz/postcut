import React from "react";
import {connect} from "react-redux";
import DialogsList from "./DialogsList";
import LoginHoc from "../../../hoc/loginHoc";
import {compose} from "redux";
import {getDialogsThunkCreator} from "../../../Redux/messageReducer";
import Preloader from "../../assets/preloader/Preloader";


class DialogsListContainer extends React.Component {
    componentDidMount() {
        this.props.getDialogsThunkCreator()
    }

    render (){

        if(this.props.dialogs === null) return <Preloader/>

        return <DialogsList {...this.props}/>
    }
}


let mapStateToProps = (state) =>{
    return {
        isLogined: state.LoginReducer.isLogined,
        dialogs: state.MessagePage.dialogs,
    }

}


export default compose(connect(mapStateToProps, {getDialogsThunkCreator}),
                LoginHoc)(DialogsListContainer);