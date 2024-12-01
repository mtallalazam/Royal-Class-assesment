"use client";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";

import DynamicUserForm from "@/components/DynamicUserForm";

import { formOptions } from "@/lib/formQueryOptions";

const ClientPageComponent = () => {
	const { data, isError, isLoading } = useSuspenseQuery(formOptions)


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
