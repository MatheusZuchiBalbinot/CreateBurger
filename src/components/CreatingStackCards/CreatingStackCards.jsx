export default function CreatingStackCards({oneStack}) {

    console.log(oneStack);

    const creatingCards = () => {
        oneStack.map((acessingstack) => {
            console.log(acessingstack);
        });
    };

    return creatingCards();
}