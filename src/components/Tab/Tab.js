import styled, { css } from 'styled-components';

//onClick and selected are meant to be passed in via tabs, not manually
export const Tab = ({ name, children, label, onClick, selected }) => {
    return (
        <>
            <StyledTab $selected={selected} onClick={onClick}>
                {label}
            </StyledTab>
            {selected && <StyledChild>{children}</StyledChild>}
        </>
    );
};

const StyledTab = styled.div`
    ${({ $selected }) => {
        if ($selected) {
            return css`
                border-bottom: 3px solid #155d84;
            `;
        } else {
            return css``;
        }
    }}
    padding:5px;
    cursor: pointer;

    :hover {
        background-color: #eee;
    }
`;

const StyledChild = styled.div`
    order: 1000;
    width: 100%;
`;
