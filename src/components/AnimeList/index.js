import Image from "next/image";
import Link from "next/link";

export default function AnimeList({title, images, id}) {
    return (
        <Link href={`/${id}`} className="cursor-pointer">
            <Image src={images} alt="..." width={350} height={350} 
            className="w-full max-h-64 cover object-cover"/>
            <h3 className="font-bold md:text-xl text-md p-4">{title}</h3>
        </Link>
    )
}