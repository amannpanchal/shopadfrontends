import { Button, Form, Input, InputNumber, message, Switch } from 'antd';
import React, { useState } from 'react';
import { updateIndividualPackage } from '../../../redux/actions/AllActions';

const EditIndividualPackages = ({
  setIsEditingModelVisible,
  isEditingModelVisible,
  editingRecord,
  workFunction,
}) => {
    const [subcriptionName, setSubscriptionName] = useState(editingRecord?.subcriptionName);
  const [description, setDescription] = useState(editingRecord?.description);
  const [amount, setAmount] = useState(editingRecord?.amount);
    const [validityday, setValidityDay] = useState(editingRecord?.validityday);
    const [TotalJobApply, setTotalJobApply] = useState(editingRecord?.TotalJobApply);
    const [Unlimitedjobapply, setUnlimitedJobApply] = useState(editingRecord?.Unlimitedjobapply);
    const [totalUsed, setTotalUsed] = useState(editingRecord?.totalUsed);
    
    

    const submitEditingForm = async () => {
       
        const data = await  updateIndividualPackage(editingRecord?._id, {
            subcriptionName,
            description,
            amount,
            validityday,
            TotalJobApply,
            Unlimitedjobapply,
            totalUsed
        });
        if (data?.success) {
            setIsEditingModelVisible(false);
            workFunction();
            message.success("Edited successfully")
        }
        else {
            message.error("Individaul package  not edited")
        }
    }

    
    
    
  return (
    <div>
      <Form>
        <Form.Item label="Subscription Name">
                  <Input value={subcriptionName} onChange={(e) => setSubscriptionName(e.target.value)} />
        </Form.Item>
        <Form.Item label="Description">
          <Input value={description} onChange={(e) => setDescription(e.target.value)} />
        </Form.Item>
        <Form.Item label="Amount">
          <InputNumber value={amount} onChange={setAmount} />
        </Form.Item>
        <Form.Item label="Validity Day">
                  <InputNumber value={validityday} onChange={setValidityDay} />
        </Form.Item>
     
              {
   !Unlimitedjobapply && 
                  
                  <Form.Item label="Total Job Apply">
                  <InputNumber value={TotalJobApply} onChange={setTotalJobApply} />
        </Form.Item>}
        <Form.Item label="Unlimited Job Apply" valuePropName="checked">
          <Switch
            checked={Unlimitedjobapply}
            onChange={(checked) => setUnlimitedJobApply(checked)}
            checkedChildren="True"
            unCheckedChildren="False"
          />
        </Form.Item>
        <Form.Item label="Total Used">
          <InputNumber value={totalUsed} onChange={setTotalUsed} />
        </Form.Item>
          </Form>
          <Button
              type = "primary"
              onClick= {submitEditingForm}
          >
              Submit
          </Button>
    </div>
  );
};

export default EditIndividualPackages;
