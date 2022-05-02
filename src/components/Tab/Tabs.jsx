import styled from 'styled-components';
import * as React from 'react';

export const Tabs = ({ children, onChange, selectedName }) => {
    const clonedChildren = React.Children.map(children, (child) => {
        if (child) {
            return React.cloneElement(child, {
                onClick: () => onChange(child.props.name),
                selected: child.props.name === selectedName,
            });
        }
    });
    // const tabToDisplay = React.Children.toArray(clonedChildren).find((child) => child?.props?.name === selectedName);
    return <StyledTabs>{clonedChildren}</StyledTabs>;
};

const StyledTabs = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
