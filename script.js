const body = document.querySelector('body');
const divContainer = document.createElement('div');
divContainer.setAttribute('id', 'container');

for (let i = 0; i < 4; i++)
{
    let row = document.createElement('div');
    row.setAttribute('class', 'row');

    for (let i = 0; i < 4; i++)
    {
        let content = document.createElement('div');
        content.setAttribute('class', 'content');
        row.appendChild(content);
    }
    divContainer.appendChild(row);
}
body.appendChild(divContainer);

//hover
const contentAll = document.querySelectorAll('.content');
contentAll.forEach(contentAll => {
    contentAll.addEventListener('mouseover', (e) => {
        contentAll.setAttribute('style', 'background-color: blue');
    });
});


