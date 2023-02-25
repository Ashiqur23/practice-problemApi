function loadData(){
    fetch('https://github.com/Ashiqur23/practice-problemApi/blob/main/app.js')
    .then(res => console.log(res))
    .then(data => console.log(data))
    .catch(err => {
        console.log(err)
    })
}
loadData()