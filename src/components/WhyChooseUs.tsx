'use client'
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";


const musicSchoolContent = [
    {
      title: "Collaborative Learning",
      description:
        "Engage with fellow students and instructors in a dynamic, interactive environment. Collaborate on musical pieces, share insights, and enhance your learning experience through teamwork. Our platform enables a seamless flow of ideas, fostering a rich educational experience.",

    },
    {
      title: "Real-time Feedback",
      description:
        "Receive instant feedback on your performances and assignments. With our platform, you can track your progress in real time and make immediate improvements. Stay ahead in your musical journey with continuous, up-to-date guidance from your instructors.",

    },
    {
      title: "Comprehensive Course Material",
      description:
        "Access a vast library of resources including sheet music, video tutorials, and interactive exercises. Our platform ensures you have all the materials you need at your fingertips, supporting your learning every step of the way.",

    },
    {
      title: "Performance Tracking",
      description:
        "Monitor your development with our advanced performance tracking tools. Our platform keeps a detailed record of your progress, helping you to stay focused and motivated. Celebrate your achievements and identify areas for improvement with ease.",

    },
  ];




function WhyChooseUs() {
  return (
    <div className="text-white" >
        <StickyScroll content={musicSchoolContent} />
    </div>
  )
}

export default WhyChooseUs