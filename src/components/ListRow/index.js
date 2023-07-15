import React, { useState, useCallback, useEffect } from "react";
import PostCard from "../PostCard";
import { Col, Row } from "antd";
import DeletePost from "../../api/DeletePost";

const ListRow = ({ extractedData, setLoading, onDeletePost }) => {
  const renderList = extractedData.map((post) => {
    const id = post?.id || 0;

    return (
      <Col key={id} span={12}>
        <PostCard post={post} />
        <DeletePost
          id={id}
          setLoading={setLoading}
          onDeletePost={onDeletePost}
          extractedData={extractedData}
        />
      </Col>
    );
  });
  return <Row gutter={[48, 48]}>{renderList}</Row>;
};

export default ListRow;
