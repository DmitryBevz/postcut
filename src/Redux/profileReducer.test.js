import React from "react";
import profileReducer, {addNewPostAC, deletePostAC} from "./profileReducer";

let state = {
    PostsData: [
        {id: 1, content: "Cool!", likes: 0, rep: 0, comm: 0, dataSend: "28.07.2019 | 12:26"},
        {id: 2, content: "Hi, how are you?", likes: 0, rep: 0, comm: 0, dataSend: "28.07.2019 | 12:26"},

    ],

    profile: null,
    status: "",
    isFetching: true,
};



it('The new post should be added', ()=> {
    let action = addNewPostAC("Geer")
    let newState = profileReducer(state, action)

    expect(newState.PostsData.length).toBe(4)
})


it('The post should be deleted', ()=> {
    //test data
    let action = deletePostAC(1)

    //new state
    let newState = profileReducer(state, action)

    //expect
    expect(newState.PostsData.length).toBe(2)
})