'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";


function UpcomingWebinars() {


  const webinars = [
    {
      title: "Introduction to Music Theory",
      description:
        "A foundational webinar covering the basics of music theory, including scales, chords, and rhythm.",
      link: "https://musicschool.com/webinars/music-theory",
    },
    {
      title: "Songwriting Techniques",
      description:
        "A session dedicated to exploring various songwriting techniques, including melody creation, lyric writing, and song structure.",
      link: "https://musicschool.com/webinars/songwriting",
    },
    {
      title: "Mastering the Guitar",
      description:
        "A comprehensive webinar for guitarists of all levels, focusing on techniques, scales, improvisation, and performance tips.",
      link: "https://musicschool.com/webinars/guitar",
    },
    {
      title: "Vocal Training Essentials",
      description:
        "An essential webinar for singers, covering vocal warm-ups, techniques for improving range and tone, and performance strategies.",
      link: "https://musicschool.com/webinars/vocal-training",
    },
    {
      title: "Music Production 101",
      description:
        "An introductory webinar on music production, including DAW setup, recording techniques, mixing, and mastering.",
      link: "https://musicschool.com/webinars/music-production",
    },
    {
      title: "Piano for Beginners",
      description:
        "A webinar designed for beginner pianists, focusing on basic playing techniques, reading sheet music, and practicing effectively.",
      link: "https://musicschool.com/webinars/piano",
    },
  ];
  


  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6" >
        <div className="text-center" >
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase" >Featured webinars</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl" >enhance your musical journey</p>
        </div>
        <div className="mt-10" >
          <HoverEffect items={webinars}/>
        </div>
        <div className="mt-10 text-center" >
          <Link href={"/"} 
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
          view all webinars
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars