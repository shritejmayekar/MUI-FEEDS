import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Rightbar from './components/Rightbar/Rightbar';
import { Box, Stack } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import AddPost from './components/AddPost/AddPost';
function App() {
  return (
    <Box >
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <AddPost/>
    </Box>
  );
}

export default App;
