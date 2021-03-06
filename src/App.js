import React from 'react';
import './App.css';
import UsersContainer from "./components/Users/UsersContainer";
import Nav from "./components/Nav/nav";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/headerContainer";
import ProfileContainer from "./components/Profile/profileContainer";
import Login from './components/Login/Login';
import {connect} from 'react-redux';
import {loginThunkCreator} from "./Redux/loginReducer";
import {initializeApp} from "./Redux/appReducer";
import Preloader from './components/assets/preloader/Preloader';
import NotFound from "./components/404/notFound";
import {compose} from "redux";
import DialogContainer from "./components/Dialogs/Dialog/DialogContainer";
import {getNewMessageCountThunkCreator} from "./Redux/notificationReducer";
import Search from "./components/Header/Search/SearchContainer";
const DialogsListContainer = React.lazy(()=> import("./components/Dialogs/DialogList/DialogsListContainer"));
const SettingContainer = React.lazy(() => import("./components/Setting/settingContainer"));

class App extends React.Component {
    componentDidMount() {
       this.props.initializeApp()
        this.props.getNewMessageCountThunkCreator()
    }

    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }

        return (
            <div className="render">
                <HeaderContainer/>

                <div className="main-wrap">
                    <Nav/>

                    <main>
                        <React.Suspense fallback={<Preloader/>}>
                            <Switch>
                                <Route exact path="/dialogs/:userID" render={() => <DialogContainer/>}/>
                                <Route path="/dialogs/" render={() => <DialogsListContainer/>}/>
                                <Route path="/setting" render={() => <SettingContainer/>}/>
                                <Route path="/profile/:userID?" render={() => <ProfileContainer/>}/>
                                <Route path="/friends" render={() => <UsersContainer/>}/>
                                <Route path="/login" render={() => <Login/>}/>
                                <Route path="/search" render={() => <Search/>}/>
                                <Redirect exact from="/" to="/profile"/>
                                <Route render={()=> <NotFound/>}/>
                            </Switch>
                        </React.Suspense>
                    </main>
                </div>
            </div>);
    }
}

const mapStateToProps = (state) => ({initialized: state.app.initialized});

export default compose(
                    connect(mapStateToProps, {loginThunkCreator, initializeApp, getNewMessageCountThunkCreator}),
                    withRouter)(App)


