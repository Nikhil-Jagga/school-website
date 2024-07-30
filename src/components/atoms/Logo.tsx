import { images } from "@/assets/images";

function Logo() {
  return (
    <div className="flex items-center space-x-3">
      <img
        src={images.schoolImg}
        alt=""
        className="w-10 h-10 object-cover rounded-full"
      />
      <p className="text-xl font-bold tracking-normal">
        Springdale Public School
      </p>
    </div>
  );
}

export default Logo;
