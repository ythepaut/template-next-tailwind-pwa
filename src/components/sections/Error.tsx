import React from "react";
import Link from "next/link";
import {useTranslations} from "use-intl";

interface Props {
    title: string;
    description: string;
}

export default function Error(props : Props): JSX.Element {

    const t = useTranslations("error");

    return (
        <section className="bg-gray-200 min-h-screen text-gray-900 grid p-4 lg:p-32">
            <div className="text-center">
                <h1 className="sm:text-6xl text-3xl font-medium title-font text-gray-900 mb-4 pb-6">
                    {props.title}
                </h1>
                <p className="sm:text-lg text-sm">
                    {props.description}
                </p>
                <div className="grid place-content-center">
                    <Link href="/" className="block w-fit h-fit" scroll={false} onClick={() => window.scrollTo(0, 0)} passHref>
                        <button
                            className="mt-24 flex mx-auto lg:mx-0 text-gray-900 sm:text-md md:text-md lg:text-lg border border-gray-800 py-2 px-8 hover:bg-opacity-5 hover:bg-indigo-900 hover:text-indigo-600 hover:border-indigo-600 rounded transition"
                        >
                            {t("back")}
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
