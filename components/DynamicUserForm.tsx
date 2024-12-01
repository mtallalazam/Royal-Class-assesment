"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import DynamicFormField from "./DynamicFormField";
import { FormField } from "@/lib/types/types";

const formSchema = z.object({
	name_8066610423: z.string(),
	age_12345: z.number(),
	terms_001: z.boolean(),
});


const DynamicUserForm = ({ formFields }: { formFields: FormField[] }) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {},
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }

    return (
        <>
            <div className="mb-6">{JSON.stringify(formFields)}</div>

            <form className="mx-auto max-w-screen-md flex flex-col">
                {formFields.map((formField) => {
                    return (
                        <DynamicFormField
                            key={formField.rowIndex}
                            formField={formField}
                        />
                    );
                })}
            </form>
        </>
    );
};

export default DynamicUserForm;
