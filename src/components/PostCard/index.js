import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";

const PostCard = (props) => {
  const { Meta } = Card;

  const post = props?.post || {};
  const id = post?.id || 0;
  const src =
    post?.src || "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png";
  const title = post?.title || "";
  const description = post?.description || "";

  return (
    <Link to={`/post/${id}`} state={post}>
      <Card
        hoverable
        size="small"
        cover={
          <img
            className="ListImage"
            alt=""
            style={{ aspectRatio: "1/1", objectFit: "cover" }}
            src={src}
          />
        }
      >
        <Meta className="ListTitle" title={title} description={description} />
      </Card>
    </Link>
  );
};

export default PostCard;
