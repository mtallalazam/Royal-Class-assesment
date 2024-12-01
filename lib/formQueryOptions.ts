import { queryOptions } from '@tanstack/react-query';

import { FormFieldType } from './types/types';

const fetchFormFields = async (): Promise<FormFieldType[]> => {
	const response = await fetch("/api/forms/user-form");
	const data = await response.json();
	return data;
};

export const formOptions = queryOptions({
	queryKey: ["formFields"],
	queryFn: fetchFormFields,
});