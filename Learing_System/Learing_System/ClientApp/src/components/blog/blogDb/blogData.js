const img01 = import('../../../styles/blog01.png')
const blogData = [
    {
        id: 1,
        title: "Visual Studio срещу Visual Studio Code - Каква е разликата между тези редактори на код на IDE?",
        imageSrc: img01,
        content: 'Visual Studio" и "Visual Studio Code" не са едно и също нещо. Visual Studio е интегрирана среда за разработка (IDE), а Visual Studio Code е богат текстов редактор като Sublime Text и Atom.',
        totalInformation:
        {
            firstTitle: 'Какво е Visual Studio?',
            firstParagraph: `Visual Studio е пуснато за първи път през 1997 г. от Microsoft. Това е интегрирана среда за разработка (IDE) за разработване, редактиране и отстраняване на грешки в уебсайтове, уеб и мобилни приложения, както и в облачни услуги.

            Тъй като това е IDE, в нея са включени помощни програмистки инструменти като дебъгер, компилатор, intellisence и др.
            
            Visual Studio се предлага с вградена поддръжка за C# и .NET. Поддържа и други езици за програмиране като C, C++, Python, F#, уеб езици (HTML, CSS, JavaScript) и много други. Поддръжката на Java беше премахната още във Visual Studio 2017.
            
            Visual Studio работи под Windows и Mac. То има 3 издания - community, professional и enterprise. Версията community е безплатна, докато версиите professional и enterprise не са.
            
            Инсталацията е доста по-стабилна в Windows, отколкото в Mac. Така че при Windows може да се наложи да изтеглите повече от 42 GB в зависимост от това какво искате да направите.`,

            secondTitle: 'Какво е Visual Studio Code?',
            secondParagraph: `Visual Studio Code (наричано още VS Code) е мини версия на Visual Studio. Това е лек текстов редактор с отворен код, достъпен за Windows, Mac и Linux. Съществува и уеб версия, достъпна на адрес https://vscode.dev/.

            VS Code се предлага с вградена поддръжка за JavaScript, TypeScript и Node JS, но можете да го използвате, за да програмирате на всеки език, който искате. Всичко, което трябва да направите, е да изтеглите съответните разширения.
            
            Някои от разширенията са направени от Microsoft, но много други са разширения на трети страни.
            
            За разлика от Visual Studio, не ви е необходимо много място, за да изтеглите VS Code. Възможно е да не се нуждаете от повече от 200 MB дисково пространство, за да го изтеглите.
            
            Тъй като по подразбиране поддържа JavaScript, TypeScript и Node JS, получавате и дебъгер и интелигиенция. Но за да получите intellisence, компилатор и дебъгъри за други езици, трябва да изтеглите съответните разширения.
            
            Вече знаете, че Visual Studio е IDE, а Visual Studio Code е текстов редактор. Затова нека обобщим основните им разлики по-нататък.`,

            thirdTitle: 'Каква е разликата между "Visual Studio" и "Visual Studio Code"?',
            thirdParagraph: `Отдавна се води дебат за това кое е по-добро и кое да се избере между Visual Studio и Visual Studio Code. Е, това зависи от това какво правите.

            Ако разработвате изключително с език, поддържан от Visual Studio, като C#, C, C++, Python и други, Visual Studio или други подходящи IDE вероятно са най-добрият вариант за вас.
            
            Но дори ако разработвате на тези езици, но ви е необходим фронтенд React, Vue или Angular, VS code може да е най-добрият вариант за вас.
            
            Ако работите в екип, може да ви предоставят корпоративната версия на Visual Studio или някоя друга IDE, която кореспондира с езика, с който работите. Например PyCharm за Python и IntelliJ Idea за Java.
            
            Ако използвате Linux, трябва да изберете Visual Studio Code или някоя друга IDE, освен Visual Studio. Това е така, защото Visual Studio не работи под Linux.
            
            Ако сте от хората, които обичат да настройват редактора си по свой вкус, просто изберете VS Code, защото е силно персонализиран. Също така вероятно трябва да изберете VS Code, ако смесвате технологии.`,


            conclusionTitle: `Заключение`,
            conclusionParagrapth: `В тази статия бяха показани разликите между Visual Studio и VS Code, както и какво представляват двете програми поотделно.

            Дебатът никога не трябва да бъде кой е по-добър от другия, а кой е най-добър за това, което искате да направите, или от което се нуждаете. Ето защо разгледахме някои сценарии, които могат да ви подтикнат да изберете единия вместо другия.
            
            Благодарим ви, че прочетохте.`
        },
        date: `10 Jul, ${new Date().getFullYear()}`,
        author: "User",

    },
    {
        id: 2,
        title: "Another Blog Post",
        imageSrc: "https://www.bootdey.com/image/480x480/00FFFF/000000",
        content: "Exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
        date: `10 Jul, ${new Date().getFullYear()}`,
        author: "User",
    },
    {
        id: 3,
        title: "Yet Another Blog Post",
        imageSrc: "https://www.bootdey.com/image/480x480/00FFFF/000000",
        content: "Exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
        date: `10 Jul, ${new Date().getFullYear()}`,
        author: "User",
    },
    {
        id: 4,
        title: "One More Blog Post",
        imageSrc: "https://www.bootdey.com/image/480x480/00FFFF/000000",
        content: "Exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
        date: `10 Jul, ${new Date().getFullYear()}`,
        author: "User",
    },
    {
        id: 5,
        title: "A Fifth Blog Post",
        imageSrc: "https://www.bootdey.com/image/480x480/00FFFF/000000",
        content: "Exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
        date: `10 Jul, ${new Date().getFullYear()}`,
        author: "User",
    },
    {
        id: 6,
        title: "Sixth Blog Post",
        imageSrc: "https://www.bootdey.com/image/480x480/00FFFF/000000",
        content: "Exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
        date: `10 Jul, ${new Date().getFullYear()}`,
        author: "User",
    },
    {
        id: 7,
        title: "Seventh Blog Post",
        imageSrc: "https://www.bootdey.com/image/480x480/00FFFF/000000",
        content: "Exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
        date: `10 Jul, ${new Date().getFullYear()}`,
        author: "User",
    },
    {
        id: 8,
        title: "Eighth Blog Post",
        imageSrc: "https://www.bootdey.com/image/480x480/00FFFF/000000",
        content: "Exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
        date: `10 Jul, ${new Date().getFullYear()}`,
        author: "User",
    },
    // Add more blog data objects for other blog posts
];

export default blogData;
