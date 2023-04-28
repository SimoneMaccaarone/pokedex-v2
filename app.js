console.log('ciao')

let actualPageIndex;

function getNextPage() {
    if (actualPageIndex === undefined) { // Rilascia pag 0 (pag iniziale)
        actualPageIndex = 0;
    } else {
        actualPageIndex++; // Vai alla prossima pagina
    }
    PokeService.getPage(actualPageIndex).then(page => {
        console.log(page);
    })
}

function getPreviousPage() {
    actualPageIndex--;
    PokeService.getPage(actualPageIndex).then(page => {
        console.log(page);
    })
}