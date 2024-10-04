import React from 'react';
import { Text } from 'recharts';

const AdminDetails = ({ handleDetailsVisible, setHandlDetailsVisible, editingRecord }) => {
    if (!editingRecord) {
        return <Text>No editingRecord details available.</Text>;
    }

    // Destructure the unwanted properties from the editingRecord
    const { __v, _id, ...rest } = editingRecord;

    // Convert boolean values to "Yes" or "No"
    const formattedData = Object.entries(rest).map(([key, value]) => ({
        [key]: value ? 'Yes' : 'No'
    }));

    return (
        <div>
            {formattedData.map((item, index) => (
                <div key={index}>
                    <strong>{Object.keys(item)[0]}:</strong> {Object.values(item)[0]}
                </div>
            ))}
        </div>
    );
};

export default AdminDetails;
