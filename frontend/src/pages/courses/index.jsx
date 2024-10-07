import React from "react";
import { CoursesCourses } from "../../components/CoursesCourses";

const Courses = ({ showModal }) => {
  return (
    <div>
      <CoursesCourses showModal={showModal}/>
    </div>
  );
};

export { Courses };