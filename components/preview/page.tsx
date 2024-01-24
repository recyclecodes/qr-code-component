import Image from "next/image";

const Preview = () => {
  return (
    <div className="min-h-full rounded-2xl bg-qr-white shadow-qr max-h-full mx-auto p-[22px] w-[313px]">
      <div className="group relative rounded-[11px] w-[270px] h-[275px]">
        <Image
          priority={true}
          className="rounded-[11px] object-cover"
          src="/images/image-qr-code.png"
          fill={true}
          alt="qr-code"
        />
      </div>
      <div className="text-center">
        <h1 className="font-bold text-xl pt-6 hover:text-grayish-blue cursor-pointer text-balance">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-grayish-blue font-normal pt-[10px] text-sm">
          Scan the QR code to visit the Frontend Mentor and take your coding
          skills to the next level
        </p>
      </div>
    </div>
  );
};

export default Preview;
