import axios from "axios";

export default async function BlogPost({params} : any ){
    ///const postId = (await params).postId;
    // const responce = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);

    return(
        <div>
            Blog Page {JSON.stringify(params.postId)}
        </div>
    )
}