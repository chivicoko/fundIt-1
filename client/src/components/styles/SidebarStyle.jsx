import styled from "styled-components";

const SidebarStyle = styled.aside`
    background-color: orange;
    padding: 20px;
    margin: 70px 40px 20px 40px;
    border-radius: 15px;
    height: 620px;

    .container1 {
        margin: 40px 20px;
        text-align: start;
    }

    .container1 .pa {
        text-decoration: none !important;
    }

`;

// mobile
const MobileSidebarStyle = styled.aside`
    font-size: 11px;

    .container {
        display: grid;
        grid-template-columns: auto auto auto auto;
        grid-column-gap: 5px;
        width: 90vw;
        padding: 0 2px;
        margin-top: 10px;
    }

    .container .container1 {
        background-color: orange;
        border: 1px solid rgb(36, 35, 35);
        // color: white;
        border-radius: 4px;
        margin: 3px 0;
        padding: 3px;
        text-align: center;
        font-size: 12px;

        display: table;
    }
`;


export { SidebarStyle, MobileSidebarStyle};