import React from 'react'
import Container from '@mui/material/Container';

const PageContainer = ({children}) => { {/* children aslında Header görevi görüyor*/}
  return (
    <Container maxWidth="lg">{children}</Container>
  )
}

export default PageContainer;