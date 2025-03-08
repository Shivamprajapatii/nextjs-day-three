export default function BlogPost({params} : any ){

    const postId = params.postId;
    console.log(postId);

    return(
        <div>
            Hii There {postId}
        </div>
    )
}