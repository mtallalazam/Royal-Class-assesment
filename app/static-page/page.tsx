import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

import ClientPageComponent from "@/components/ClientPageComponent";

import { getQueryClient } from "@/lib/query_client";

import { formOptions } from "@/lib/formQueryOptions";

const StaticPage = () => {
    const queryClient = getQueryClient();

    void queryClient.prefetchQuery(formOptions);

    return (
        <div>
            <h2>Static Page Data Fetching</h2>
            <HydrationBoundary state={dehydrate(queryClient)}>
                <ClientPageComponent />
            </HydrationBoundary>
        </div>
    );
};

export default StaticPage;
