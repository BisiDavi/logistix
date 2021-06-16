import styled from 'styled-components';

export const Authmodal = styled.div`
    .tab-content {
        margin-bottom: 60px;
    }
    .socialLogin {
        margin: 10px 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .socials {
        background-color: orange;
        margin-top: 0px;
        padding: 10px 0px;
        width: 100%;
        color: white;
        position: absolute;
        bottom: 0;
        left: 0;
    }
    h4 {
        font-size: 15px;
        text-align: center;
    }
    h5 {
        color: #c85a5f;
        font-size: 14px;
        font-family: 'Roboto', sans-serif;
        text-align: center;
    }
`;

export const TextCard = styled.section`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    margin: 10px;
    padding: 10px;
    box-shadow: 1px 10px 20px 10px #fff2d9;

    img {
        height: 100%;
        width: 100%;
    }

    .text {
        background-color: #c85a5f;
        text-align: center;
        color: white;
        padding: 0px 10px;
    }
    .text h3 {
        font-size: 20px;
    }
    .text p {
        font-size: 14px;
    }
`;

export const Profilecard = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    padding: 20px;
    box-shadow: 1px 3px 10px 10px #f5ecd9;
    font-family: 'Roboto', sans-serif;

    h4 {
        font-size: 16px;
        margin-bottom: 0px;
    }

    .text {
        display: flex;
        align-items: center;
    }

    .indicator img {
        height: 45px;
        margin: 0px 10px;
        margin-top: -10px;
    }

    p {
        margin-bottom: 10px;
    }

    .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        marign: 5px 20px;
    }
    .content {
        display: flex;
        margin-top: 10px;
        flex-direction: column;
    }
    .button {
        display: flex;
        justify-content: flex-end;
    }
    button {
        width: 70px;
        border-radius: 0px;
        font-size: 12px;
        font-weight: bold;
    }
`;

const Status = styled.span`
    border-radius: 20px;
    color: white;
    font-weight: bold;
    padding: 5px 10px;
    font-size: 12px;
`;

const SuccessStatus = styled(Status)`
    background-color: green;
`;

const InprogressStatus = styled(Status)`
    background-color: #dcdc25;
`;

const PendingStatus = styled(Status)`
    background-color: grey;
`;

const DelayedStatus = styled(Status)`
    background-color: red;
`;

export const ParcelStatus = (status) => {
    switch (status) {
        case 'In Progress':
            return <InprogressStatus>{status}</InprogressStatus>;
        case 'Delayed':
            return <DelayedStatus>{status}</DelayedStatus>;
        case 'Pending':
            return <PendingStatus>{status}</PendingStatus>;
        case 'Success':
            return <SuccessStatus>{status}</SuccessStatus>;
        default:
            return status;
    }
};
