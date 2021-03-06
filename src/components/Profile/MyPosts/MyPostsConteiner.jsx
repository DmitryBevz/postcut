
import React from "react";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addNewPostAC} from "../../../Redux/profileReducer";


class MyPostsContainer extends React.Component {

    render(){
        return(<MyPosts 
                ProfilePage={this.props.ProfilePage}
                Lang={this.props.SetLang}
                addNewPostAC={this.props.addNewPostAC}/>)
    }
}


let mapStateToProps = (state) => {
    return {
        ProfilePage: state.ProfilePage,
        Lang: state.SetLang

    }
}


export default connect(mapStateToProps, {addNewPostAC})(MyPostsContainer);

