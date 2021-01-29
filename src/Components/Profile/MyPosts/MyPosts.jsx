import React from "react";
import Posts from "./Posts/Post";
import style from './MyPosts.module.css';


const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Posts message={p.message} likeCount={p.likeCount}/>)
    let newPostsElement = React.createRef()
    let newPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostsElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={style.postField}>
            <p>My posts</p>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostsElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={newPost}>Add post</button>
                </div>
            </div>
            <div className={style.postsBlock}>
                {postsElement}
            </div>
        </div>
    );
}

export default MyPosts