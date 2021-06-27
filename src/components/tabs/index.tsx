import React, { FC, useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import DisplayTabs from './displayTab';
import styles from './tabs.module.css';

export default function AppTab({ tabData }: AppTabProps) {
    const [key, setKey] = useState(tabData.defaultTab);
    return (
        <Tabs
            activeKey={key}
            className={styles.tabs}
            onSelect={(k) => setKey(k)}
            id={tabData.id}
        >
            {tabData.content.map(function (tab, index) {
                return (
                    <Tab key={index} eventKey={tab.eventKey} title={tab.title}>
                        {DisplayTabs(tab.eventKey)}
                    </Tab>
                );
            })}
        </Tabs>
    );
}

interface AppTabProps {
    tabData: {
        id: string;
        defaultTab: string;
        content: { eventKey: string; title: string }[];
    };
}
