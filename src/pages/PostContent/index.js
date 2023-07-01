import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Select, Image, Typography, Space } from "antd";
import { getPosts } from '../../index.js'




const PostContent = (props) => {

    //上一頁
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    }

    const location = useLocation();
    // 獲取postId
    const searchParams = new URLSearchParams(location.search);
    const postId = searchParams.get('postID');
    const postObj = getPosts.find((getPosts) => getPosts.id === postId);
    const { src, title, description } = postObj;

    return (
        <Space direction="vertical" style={{ width: '100%' }} size='large'>
            <Button type="default" onClick={handleClick}>回上一頁</Button>
            <Image
                width={500}
                src={src}
            />
            <Typography.Title level={1} style={{ margin: 0 }}>
                {title}
            </Typography.Title>
            <Typography.Title level={2} style={{ margin: 0 }}>
                {description}
            </Typography.Title>
        </Space>
    )
};

export default PostContent;