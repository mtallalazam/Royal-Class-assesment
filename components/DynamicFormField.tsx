import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";

import { FormField } from "@/lib/types/types";

const DynamicFormField = ({ formField } : { formField: FormField }) => {
    if (formField.variant == "Checkbox") {
        return (
            <div className="items-top flex space-x-2 mb-5">
                <Checkbox id={formField.name} />
                <div className="grid gap-1.5 leading-none">
                    <label
                        htmlFor={formField.name}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        {formField.label}
                    </label>
					{
						formField.description && (
							<p className="text-sm text-muted-foreground">
								{formField.description}
							</p>
						)
					}
                </div>
            </div>
        );
    }

    if (formField.variant == "Input") {
        return (
            <div className="flex flex-col mb-5">
                {formField.label && <Label className="mb-3">{formField.label}</Label>}
                <Input
                    type={formField.type}
                    placeholder={formField.placeholder}
                />
            </div>
        );
    }
};

export default DynamicFormField;
