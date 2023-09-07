// csharpExercises.js

const csharpExercises = [
    {
        id: 1,
        question: "Write a C# program to print 'Hello, World!'",
        answers: [
            "using System; class Program { static void Main() { Console.WriteLine('Hello, World!'); } }",
            "class HelloWorld { public static void Main() { Console.WriteLine('Hello, World!'); } }",
            "public class Hello { public static void Main() { Console.WriteLine('Hello, World!'); } }",
            "class Print { public static void Main() { Console.WriteLine('Hi, there!'); } }",
        ],
        correctOption: 0, // Index of the correct option in the 'options' array
    },
    {
        id: 2,
        question: "What is a namespace in C#?",
        answers: [
            "A namespace is a way to organize code into logical groups.",
            "A namespace is a type in C#.",
            "A namespace is used to define classes.",
            "A namespace is used for mathematical calculations.",
        ],
        correctOption: 0, // Index of the correct option in the 'options' array
    },
    // Add more C# exercises with 4 options here
];

export default csharpExercises;
