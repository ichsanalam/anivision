import Link from "next/link";

export default function() {
    return (
        <header>
            <div className="bg-indigo-500">
                <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
                     <Link href='/' className="font-bold text-white text-2xl">Anvision</Link>
                     <input placeholder="cari anime..." className=""/>
                </div>
            </div>
        </header>
    )
}