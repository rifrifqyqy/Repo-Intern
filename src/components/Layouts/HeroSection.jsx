import { Fragment } from "react";

export default function HeroSection() {
  const title_style = "text-5xl font-medium bg-white";

  return (
    <Fragment>
      <div className="grid grid-cols-4 h-[500px] w-full ">
        <div className="flex flex-col row-span-2 col-span-2 justify-center bg-gray-200">
          <h1 className={title_style}>Bangun karir bisnis Anda!</h1>
          <p className=" self-start">Ikuti kelas kami</p>
        </div>
        <div className="bg-white row-span-2">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis vel reiciendis voluptatem id ipsa sed illo officiis animi laboriosam voluptatum?</p>
        </div>
        <div className="bg-sky-200 bg-cover bg-center text-white " style={{ backgroundImage: "url(https://source.unsplash.com/category/grocery)" }}>
          <h1>Learning Path</h1>
        </div>
        <div>dasdaads</div>
      </div>
    </Fragment>
  );
}
