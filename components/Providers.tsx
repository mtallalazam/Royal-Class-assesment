"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactNode } from "react";

import { getQueryClient } from "@/lib/query_client";

const Providers = ({ children }: { children: ReactNode }) => {
    const queryClient = getQueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            {children}
			<ReactQueryDevtools />
        </QueryClientProvider>
    );
};

export default Providers;
