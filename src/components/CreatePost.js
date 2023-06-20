import { useState } from "react";
import { firestore } from "../firebase";



function useFormInput(initialValue){
  const [value, setValue]=useState(initialValue);
  
  function handleChange(e){
    setValue(e.target.value);
  }
  return{
    value,
    onChange: handleChange
  }
}


function CreatePost() {
    const title=useFormInput('');
    const subTitle=useFormInput('');
    const content=useFormInput('');
    
    function handleSubmit(e){
      e.preventDefault();
      // console.log('title', title)
      // console.log('subTitle', subTitle)
      // console.log('content', content)
      firestore.collection('posts').add({
        title: title.value,
        content: content.value,
        subTitle: subTitle.value,
        createdAt:  new Date(),
      })
    }


    return (
      <div className="create-post">
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-field">
                  <label>Title</label>
                  <input value={title.value} onChange={title.onChange} type="text"/>
              </div>
              <div className="form-field">
                  <label>Sub Title</label>
                  <input {...subTitle} type="text"/>
              </div>
              <div className="form-field">
                  <label>Content</label>
                  <textarea {...content}></textarea>
              </div>
              <button className="create-post-btn">Create Post</button>
            </form>
      </div>
    );
  }
  
  export default CreatePost;