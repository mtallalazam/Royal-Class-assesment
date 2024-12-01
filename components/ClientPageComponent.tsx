"use client";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import DynamicUserForm from "@/components/DynamicUserForm";
import { FormField } from "@/lib/types/types";

const ClientPageComponent = () => {
    // const queryClient = useQueryClient();

    const fetchFormFields = async (): Promise<Array<FormField>> => {
        const response = await fetch("/api/forms/user-form");
        const data = await response.json();
        return data;
    };

    const { isLoading, data, isError } = useQuery({
        queryKey: ["formFields"],
        queryFn: () => fetchFormFields(),
    });

	if (isError) {
		return(
			<p>An Error Occured!</p>
		)
	}

    return (
        <div>
            {isLoading ? (
                <p>Is Loading...</p>
            ) : (
                <DynamicUserForm formFields={data!} />
            )}
        </div>
    );
};

export default ClientPageComponent;
