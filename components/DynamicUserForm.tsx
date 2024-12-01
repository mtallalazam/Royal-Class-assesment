"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import DynamicFormField from "./DynamicFormField";
import { FormFieldType } from "@/lib/types/types";
import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";

const formSchema = z.object({
    name_8066610423: z.string(),
    age_12345: z.coerce.number(),
    terms_001: z.boolean(),
});

const DynamicUserForm = ({ formFields }: { formFields: FormFieldType[] }) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
			name_8066610423: "some string",
			age_12345: 23,
			terms_001: true,
		},
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log({values});
    }

    return (
        <>
            <Form {...form}>
                <form
                    className="flex flex-col"
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    {formFields.map((formField) => {
                        return (
                            <FormField
                                key={formField.rowIndex}
                                control={form.control}
                                name={formField.name}
                                render={({ field }) => (
                                    <DynamicFormField
										{...field}
                                        formField={formField}
                                    />
                                )}
                            />
                        );
                    })}

                    <Button type="submit" className="w-fit">Submit</Button>
                </form>
            </Form>
        </>
    );
};

export default DynamicUserForm;
