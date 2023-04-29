import styled from "styled-components";


const FAQStyle = styled.div`
    background-color: rgb(36, 35, 35);
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    padding: 0 55px;
    text-align: center;


    .general-container {
        padding-top: 120px;
        padding-bottom: 150px;
    }

    .general-container h2 {
        color: orange;
    }

    .general-container .container-1 {
        border: 1px solid orange;
        border-radius: 10px;
        text-align: start;
        padding: 10px 20px;
        margin-top: 20px;
        margin-right: 40px;
        margin-left: 40px;
    }

    .general-container .container-1 h2 {
        color: orange;
    }

    .general-container .container-1 p {
        // display: none;
    }

`;

// mobile
const MobileFAQStyle = styled.div`

    .general-container {
        padding-top: 50px;
        padding-bottom: 150px;
        color: white;
    }

    h2 {
        color: orange;
    }

    .general-container .container-1 {
        border: 1px solid orange;
        border-radius: 10px;
        text-align: start;
        padding: 10px 15px;
        margin-top: 20px;
        margin-right: 20px;
        margin-left: 20px;
    }

    .general-container .container-1 h3 {
        color: orange;
    }

    .general-container .container-1 p {
        // display: none;
    }
`;

export { FAQStyle, MobileFAQStyle };