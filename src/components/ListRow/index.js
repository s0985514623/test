import React, { useState, useCallback, useEffect } from "react";
import PostCard from "../PostCard";
import { Col, Row } from "antd";
import DeletePost from "../../components/DeletePostBtn";

const ListRow = ({ postData }) => {
  const renderList = postData.map((post) => {
    const id = post?.id || 0;

    return (
      <Col key={id} span={12}>
        <PostCard post={post} />
        <DeletePost id={id} />
      </Col>
    );
  });
  return <Row gutter={[48, 48]}>{renderList}</Row>;
};

export default ListRow;
