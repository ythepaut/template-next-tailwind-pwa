export const useRouter = jest.spyOn(require("next/router"), "useRouter");
useRouter.mockImplementation(() => ({
    query: { locale: "fr" }
}));
