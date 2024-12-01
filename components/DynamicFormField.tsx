import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";

import { FormFieldType } from "@/lib/types/types";
import {
    FormControl,
    FormDescription,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

const DynamicFormField = (props: { formField: FormFieldType }) => {
    const formField = props.formField;

    if (formField.variant == "Checkbox") {
        return (
            <FormItem className="flex space-x-2 items-center mb-5">
                <FormControl>
                    <Checkbox id={formField.name} checked={props.value} onCheckedChange={props.onChange} />
                </FormControl>
                <FormLabel className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {formField.label}
                </FormLabel>
                <FormMessage />
            </FormItem>
        );
    }

    if (formField.variant == "Input") {
        return (
            <FormItem className="mb-5 space-y-2">
                <FormLabel>{formField.label}</FormLabel>
                <FormControl>
                    <Input
                        placeholder={formField.placeholder}
                        value={props.value}
                        onChange={props.onChange}
                        type={formField.type}
                    />
                </FormControl>
                <FormDescription>{formField.description}</FormDescription>
                <FormMessage />
            </FormItem>
        );
    }
};

export default DynamicFormField;
