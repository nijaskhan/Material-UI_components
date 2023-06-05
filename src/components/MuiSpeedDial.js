import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ShareIcon from '@mui/icons-material/Share';
import PrintIcon from '@mui/icons-material/Print';

const MuiSpeedDial = () => {
    return (
        <SpeedDial ariaLabel='Navigation speed dial' sx={{ position: 'fixed', bottom: 80, right: 16}}
            icon={<SpeedDialIcon openIcon={<EditIcon />} />}
        >
            <SpeedDialAction icon={<ContentCopyIcon />} tooltipTitle={'copy'} />
            <SpeedDialAction icon={<ShareIcon />} tooltipTitle={'share'} />
            <SpeedDialAction icon={<PrintIcon />} tooltipTitle={'print'} />
        </SpeedDial>
    )
}

export default MuiSpeedDial