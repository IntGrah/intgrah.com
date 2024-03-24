import About from "@/components/about";
import ArticlesPage from "@/app/articles/page";
import Image from "next/image";
import ArtOfFugue from "@/public/art-of-fugue.jpg";
import TabulaMusica from "@/public/tabula-musica.jpg";

export default function HomePage() {
    return (
        <main>
            <figure className="h-80 sm:h-96 md:h-[28rem]">
                <Image
                    className="size-full object-cover opacity-20"
                    src={ArtOfFugue}
                    alt="Manuscript of The Art of Fugue"
                />
            </figure>
            <hgroup className="md:px-16">
                <Image
                    className="m-auto w-full max-w-4xl"
                    src={TabulaMusica}
                    alt=""
                />
            </hgroup>
            <div id="about" className="h-72"></div>
            <About />
            <div className="h-72"></div>
            <ArticlesPage />
            <div className="h-96"></div>
        </main>
    );
}
//
