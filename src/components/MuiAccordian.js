import { Box, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import React, { useState } from 'react';
import { ExpandMore } from '@mui/icons-material'

const MuiAccordian = () => {
    const [expanded, setExpanded] = useState(false);
    const handleExpansion=(isExpanded, panel)=>{
        console.log(isExpanded);
        setExpanded( isExpanded ? panel : false );
    }
    return (
        <Box sx={{paddingY: '2rem', paddingX: '2rem'}}>
            <Accordion expanded={expanded==="panel1"} onChange={(event, isExpanded)=> handleExpansion(isExpanded, 'panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-label="Expand"
                    aria-controls="-content"
                    id="-header"
                >
                    <Typography>What is React ? </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos quam dolores incidunt numquam blanditiis, rem saepe doloremque accusamus, reiciendis quaerat praesentium consectetur 
                    recusandae soluta corporis sint adipisci reprehenderit molestias cum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis doloremque recusandae quae, quos asperiores quidem, voluptates iste nostrum velit suscipit natus dolorem, et aperiam minima accusamus eaque veniam eos.
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded==="panel2"} onChange={(e, isExpanded)=> handleExpansion(isExpanded, 'panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-label="Expand"
                    aria-controls="-content"
                    id="-header"
                >
                    <Typography>What is Nodejs ? </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos quam dolores incidunt numquam blanditiis, rem saepe doloremque accusamus, reiciendis quaerat praesentium consectetur 
                    recusandae soluta corporis sint adipisci reprehenderit molestias cum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis doloremque recusandae quae, quos asperiores quidem, voluptates iste nostrum velit suscipit natus dolorem, et aperiam minima accusamus eaque veniam eos.
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded==="panel3"} onChange={(e, isExpanded)=> handleExpansion(isExpanded, 'panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-label="Expand"
                    aria-controls="-content"
                    id="-header"
                >
                    <Typography>What is Material UI ? </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos quam dolores incidunt numquam blanditiis, rem saepe doloremque accusamus, reiciendis quaerat praesentium consectetur 
                    recusandae soluta corporis sint adipisci reprehenderit molestias cum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis doloremque recusandae quae, quos asperiores quidem, voluptates iste nostrum velit suscipit natus dolorem, et aperiam minima accusamus eaque veniam eos.
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default MuiAccordian