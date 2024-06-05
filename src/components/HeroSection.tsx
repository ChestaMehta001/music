import Link from "next/link"


function HeroSection() {
  return (
    <div
    className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
    <div className="p-4 relative z-10 w-full text-center" >
        <h1>master the art of music</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iste officiis pariatur maxime neque nam ut ratione quam ipsam nostrum deserunt consectetur id, adipisci quibusdam distinctio aliquid accusantium recusandae assumenda eius dignissimos! Aliquam, optio, itaque facere praesentium iusto dolor sed ad tempore voluptatibus vel veniam? Repellendus suscipit, nulla libero inventore, perspiciatis natus minus numquam est perferendis dignissimos exercitationem eveniet repellat quibusdam sequi magni modi dicta aliquam, enim itaque vel. Repudiandae quis obcaecati quod totam. Laborum reiciendis commodi maxime! Quae repellendus, reprehenderit tempore delectus laudantium numquam dolor nesciunt corrupti, facilis perferendis, iste architecto? Accusamus assumenda quod ea ex, nemo earum alias.</p>
        <div className="mt-4" >
        <Link href={"/courses"}>explore courses</Link>
        </div>
    </div>
    </div>
  )
}

export default HeroSection