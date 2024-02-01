import { Add } from '@mui/icons-material'
import { Avatar, Box, Fab, Modal, Tooltip, Typography, styled } from '@mui/material'
import React, { useState } from 'react'

const StyledModal = styled(Modal)({
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
})

const UserBox = styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"20px"
})
const AddPost = () => {
    const [open, setOpen] = useState<boolean>(false)
    return (
        <>
            <Tooltip title="Add Post" sx={{ position: "fixed", bottom: 20, left: { xs: "cal(50% -25px)", md: 30 } }}>
                <Fab color="primary" aria-label="add" onClick={e=> setOpen(true)}>
                    <Add />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} bgcolor="white" borderRadius={5} p={3}>
                    <Typography variant="h6" color="gray" textAlign="center">Create Post</Typography>
                    <UserBox>
                    <Avatar  sx={{ width: 30, height: 30 }}>S</Avatar>
                    <Typography variant="inherit" fontWeight={500}>Shri</Typography>
                    </UserBox>
                </Box>

            </StyledModal>

        </>
    )
}

export default AddPost
