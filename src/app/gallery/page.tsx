import Gallery from "@/components/Gallery"


const page = () => {
  return (
    <div className="h-screen bg-bg-gradient ">
      <div className="h-screen w-screen md:bg-[url(/assets/gallery/forest-bg.png)] bg-[url(/assets/gallery/bgSmall.png)]  bg-center bg-cover bg-blend-multiply">

      <Gallery/>
        

      </div>
    </div>
  )
}

export default page
