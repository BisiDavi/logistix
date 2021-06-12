import React, { FC, useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import DisplayTabs from './displayTab';
import styles from './tabs.module.css';

const AppTab: FC<AppTabProps> = ({ tabData }) => {
    const [key, setKey] = useState(tabData.defaultTab);
    return (
        <Tabs
            activeKey={key}
            className={styles.tabs}
            onSelect={(k) => setKey(k)}
            id={tabData.id}
        >
            {tabData.content.map((tab, index) => (
                <Tab key={index} eventKey={tab.eventKey} title={tab.title}>
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
}

export default AppTab;
