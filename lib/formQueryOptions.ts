import { queryOptions } from '@tanstack/react-query';

import { FormField } from './types/types';

const fetchFormFields = async (): Promise<FormField[]> => {
	const response = await fetch("/api/forms/user-form");
	const data = await response.json();
	return data;
};

export const formOptions = queryOptions({
	queryKey: ["formFields"],
	queryFn: fetchFormFields,
});