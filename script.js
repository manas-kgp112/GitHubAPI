let form = document.getElementById('myForm');



form.addEventListener('submit', (e) => {
    e.preventDefault();
    let search = document.getElementById('search').value;

    let searchName = search.split(' ').join('')

    // alert(searchName);


    fetch('https://api.github.com/users/' + searchName)
    .then((result) => result.json())
    .then((data) => {
        console.log(data);

        document.getElementById('result').innerHTML = `
            <a href = 'https://www.github.com/${searchName}' target = '_blank'><img src="${data.avatar_url}"/></a>
        `

        document.getElementById('resultName').innerHTML = `
        <a href = 'https://www.github.com/${searchName}' target = '_blank'>${data.name}</a>
        `
    });
});