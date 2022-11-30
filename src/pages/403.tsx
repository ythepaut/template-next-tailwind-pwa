import React from "react";
import {GetStaticProps} from "next";
import {useTranslations} from "use-intl";
import Error from "../components/sections/Error";

export default function ForbiddenPage(): JSX.Element {

    const t = useTranslations("error.404");

    return (
            <Error title={t("title")} description={t("description")}/>
    );
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
    return {
        props: {
            messages: require(`../lang/${locale}.json`)
        }
    };
};
