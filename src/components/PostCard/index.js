import React from 'react'
import { Link } from "react-router-dom";
import { Card } from 'antd';



const PostCard = (post) => {
    const { Meta } = Card;

    const { id,src, title, description } = post;
    
    return (
        <Link to={`/post?postID=${id}`}>
            <Card
                hoverable
                size='small'
                cover={<img className='ListImage' alt="" style={{ aspectRatio: '1/1', objectFit: 'cover', }} src={src} />}
            >
                <Meta className='ListTitle' title={title} description={description} />
            </Card>
        </Link>
    )
}

export default PostCard