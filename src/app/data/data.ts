export const calculatorData = [
    
    {
        category: "number",
        value: 7
    },
    {
        category: "number",
        value: 8
    },
    {
        category: "number",
        value: 9
    },
    
    {
        category: "number",
        value: 4
    },
    {
        category: "number",
        value: 5
    },
    {
        category: "number",
        value: 6
    },
    {
        category: "number",
        value: 1
    },
    {
        category: "number",
        value: 2
    },
    {
        category: "number",
        value: 3
    },
    {
        category: "decimal",
        value: "."
    },
    {
        category: "number",
        value: 0
    },
    {
        category: "function",
        value: "DEL"
    }
    
];

export const additionalCalc = [
    {
        category: "operator",
        value: "+"
    },
    {
        category: "operator",
        value: "-"
    },
    {
        category: "operator",
        value: "/"
    },
    {
        category: "operator",
        value: "*"
    },
    {
        category: "result",
        value: "="  
    },
]

export interface ButtonProperties {
    category: string;
    value: string | number;
}