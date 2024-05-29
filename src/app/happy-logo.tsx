import { FaceSmileIcon } from '@heroicons/react/24/solid';

export default function HappyLogo() {
  return (
    <div className={"flex flex-row items-center leading-none text-white"}>
      <FaceSmileIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="font-ubuntu text-[44px]">Hello!</p>
    </div>
  );
}
