import axios from "axios";

export default async function BlogPost({params} : any ){
    const postId = (await params).postId;
    const responce = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);

    return(
        <div>
            <h1>Post{responce.data.id}</h1>
            Id : {responce.data.id} <br />
            Title : {responce.data.title} <br />
            Body : {responce.data.body}
        </div>
    )
}