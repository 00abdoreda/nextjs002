'use client'
import React, { ReactElement } from 'react';
import { CommentOutlined, CustomerServiceOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import Image from 'next/image';
interface FloatingButtonProps {
  right0: string;
  bottom0: string;
  icon0: ReactElement;
}
const FloatingButton02: React.FC<FloatingButtonProps> = ({ right0, bottom0, icon0 }) => (
  <>
    <FloatButton.Group
      trigger="click"
      type="primary"
      style={{
        insetInlineEnd: 24, position: 'absolute', bottom: `${bottom0}`, right: `${right0}`
      }}
      icon={icon0}
    >
      {/* <FloatButton /> */}
      <FloatButton icon={<CommentOutlined />} />
    </FloatButton.Group>
  </>
);

export default FloatingButton02;