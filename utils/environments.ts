const runtimeConfig = useRuntimeConfig()
export const environment = {
    API_BASE_URL: runtimeConfig.public.BASE_URL,
};
