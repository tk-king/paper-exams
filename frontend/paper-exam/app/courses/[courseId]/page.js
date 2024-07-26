'use client'

import React, { useState } from 'react';
import useCourse from '@/hooks/useCourse';
import { Tabs, Tab, Box } from '@mui/material';
import { useParams } from 'next/navigation';
import QuestionPage from '@/app/components/QuestionPage';


const Page = () => {
  const { courseId } = useParams();
  const { course } = useCourse(courseId);
  const [value, setValue] = useState(0);

  if (!course) {
    return <div>Loading...</div>
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <h1>Course: {course.name}</h1>
      <Box sx={{ width: '100%' }}>
        <Tabs value={value} onChange={handleChange} aria-label="course tabs">
          <Tab label="Questions" />
          <Tab label="Exams" />
        </Tabs>
        {value === 0 && (
          <Box sx={{ p: 3 }}>
            <QuestionPage></QuestionPage>
          </Box>
        )}
        {value === 1 && (
          <Box sx={{ p: 3 }}>
            <h2>Exams Content</h2>
            {/* You can add content related to Exams here */}
          </Box>
        )}
      </Box>
    </div>
  );
};

export default Page;
