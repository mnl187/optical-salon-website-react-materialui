import styled from 'styled-components';

export const StyledTabPanel = styled.div`
  role: tabpanel;
  display: ${({ value, index }) => value === index ? 'block' : 'none'};
  id: ${({ index }) => `simple-tabpanel-${index}`};
  aria-labelledby: ${({ index }) => `simple-tab-${index}`};
  
  .MuiBox-root {
    padding: 3px;
  }
`;
