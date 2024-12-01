import { NextResponse } from "next/server";

const data = [
    {
        checked: true,
        description: "This is your public display name.",
        disabled: false,
        label: "Username",
        name: "name_8066610423",
        placeholder: "shadcn",
        required: true,
        rowIndex: 0,
        type: "text",
        value: "",
        variant: "Input",
    },
    {
        label: "Age",
        name: "age_12345",
        placeholder: "Enter your age",
        required: true,
        rowIndex: 1,
        type: "number",
        value: "",
        variant: "Input",
    },
    {
        label: "Agree to terms",
        name: "terms_001",
        checked: false,
        required: true,
        rowIndex: 2,
        type: "checkbox",
        variant: "Checkbox",
    },
];

export async function GET() {
	const response = await new Promise((resolve, reject) => {
		return setTimeout(() => {
			resolve(data);
		}, 1200);
	});
	
    return NextResponse.json(response);
}
