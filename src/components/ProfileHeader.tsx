import Image from "next/image";

type Props = {
  name: string;
  bio: string;
  image: string;
};

export default function ProfileHeader({ name, bio, image }: Props) {
  return (
    <header className="flex w-full flex-col items-center text-center">
      <Image
        src={image}
        alt={`${name} 프로필 사진`}
        width={192}
        height={192}
        priority
        className="h-40 w-40 rounded-full border-2 border-neutral-900 bg-white object-cover sm:h-48 sm:w-48"
      />
      <h1 className="mt-5 text-xl font-semibold">{name}</h1>
      <p className="mt-2 text-sm leading-relaxed text-neutral-600">{bio}</p>
    </header>
  );
}
