import React, { FC, useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import DisplayTabs from './displayTab';

const AppTab: FC<AppTabProps> = ({ tabData, className }) => {
    const [key, setKey] = useState(tabData.defaultTab);
    return (
        <Tabs
            activeKey={key}
            onSelect={(k) => setKey(k)}
            id={tabData.id}
        >
            {tabData.content.map((tab, index) => (
                <Tab
                    tabclassName={className}
                    key={index}
                    eventKey={tab.eventKey}
                    title={tab.title}
                >
                    {DisplayTabs(tab.eventKey)}
                </Tab>
            ))}
        </Tabs>
    );
};

interface AppTabProps {
    tabData: {
        id: string;
        defaultTab: string;
        content: { eventKey: string; title: string }[];
    };
    className?: string;
}

export default AppTab;
