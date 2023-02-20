import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { SideBar, Videos } from "../components";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSeletedCategory] = useState("New");
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then(
      (data) =>
        setVideos(data.items)
       
  );
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3e3e3e",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSeletedCategory={setSeletedCategory}
        />
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:"white"}}>
          {selectedCategory} <span style={{color:"#fc1503"}}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );

};
export default Feed;
         // videos คือ มันเก็บข้อมูลวิดีโอทั้งหมด 50 กว่าอันมาโชว์ที่วิดีโอ
       //  console.log(data);ดูข้อมูลข้างในวิดีโอทั้งหมด
      //  console.log(data.items[0].id.videoId);เป็นการเรียกดูข้อมูลข้างในของวิดีโอไอดี
