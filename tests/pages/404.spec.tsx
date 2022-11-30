import {getStaticProps} from "../../src/pages/404";
import {expect} from "@jest/globals";

describe("404 Error Page", () => {
    it("should fetch i18n messages", async () => {
        const response = await getStaticProps({locale: "en"}) as any;
        expect(response.props.messages).toBeTruthy();
    });
});
