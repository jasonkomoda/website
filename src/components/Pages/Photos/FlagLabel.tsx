import React from 'react';

interface FlagLabelProps {
    label: string;
    flagUrl: string;
}

const FlagLabel: React.FC<FlagLabelProps> = ({ label, flagUrl }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <label style={{ fontSize: '20px' }} >{label}</label>
            {/* Flag Image */}
            <img
                src={flagUrl}
                style={{ width: '24px', height: '24px', marginRight: '8px' }}
                alt={flagUrl}
            />
            {/* Label */}
        </div>
    );
};

export default FlagLabel;