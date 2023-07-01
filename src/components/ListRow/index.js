import React, { useState, useCallback, useEffect } from 'react';
import PostCard from '../PostCard';
import { Col, Row } from 'antd';
import { getPosts } from '../../index.js'



const ListRow = () => {

    const renderList = getPosts.map((post) => {
        const { id, src, title, description } = post;
        return (
            <Col span={12}>
                <PostCard
                    id={id}
                    src={src}
                    title={title}
                    description={description}
                />
            </Col>
        )

    })

    return (
        <Row gutter={[48, 48]}>
            {renderList}
        </Row>
    )
}


export default ListRow