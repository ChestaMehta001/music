'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
    {
      quote:
        "The lessons at this music school transformed my playing. From the basics to advanced techniques, every session is packed with invaluable insights. I never imagined learning music could be this engaging and fun!",
      name: "Ludwig van Beethoven",
      title: "Piano Virtuoso",
    },
    {
      quote:
        "To master the violin or not to master, that is no longer a question. This school’s structured and personalized approach helped me overcome every challenge. Their support is truly exceptional.",
      name: "Johann Sebastian Bach",
      title: "Violin Prodigy",
    },
    {
      quote: 
        "Music is the dream we all share. This school makes that dream a reality. The instructors bring out the best in each student, turning every lesson into a beautiful melody.",
      name: "Wolfgang Amadeus Mozart",
      title: "Composer Extraordinaire",
    },
    {
      quote:
        "It is a truth universally acknowledged that anyone wanting to excel in music must enroll in these courses. The blend of theory and practical application is perfect.",
      name: "Frédéric Chopin",
      title: "Piano Maestro",
    },
    {
      quote:
        "Call me a lifelong student of music. The courses offered here are exceptional, from the fundamentals to the advanced topics. They inspire a deeper understanding and passion for music.",
      name: "Igor Stravinsky",
      title: "Orchestral Conductor",
    },
  ];
  

function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.3] relative flex flex-col items-center justify-center overflow-hidden" >
        <h2 className="text-3xl font-bold text-center mb-8 z-10" >Hear our harmony: voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8" >
            <div className="w-full max-w-6xl" >
            <InfiniteMovingCards
    items={musicSchoolTestimonials}
    direction="right"
    speed="slow"/>
            </div>
        </div>
  </div>
  )
}

export default TestimonialCards