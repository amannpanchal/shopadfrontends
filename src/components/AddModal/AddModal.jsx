import { Modal } from 'antd'
import React from 'react'

const AddModal = (
    { title, visible, onOk, onCancel,element }
) => {
    return (
        <Modal
            title={title}
            visible={visible}
            onOk={onOk}
            onCancel={onCancel}
            // okText={okText}
            // cancelText={cancelText}
            footer={null}
      >
          {element}
          
    </Modal>
  )
}

export default AddModal