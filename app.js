
function loadData(){
    fetch("practice-1.json")
    .then(res => res.json())
    .then(data => displayData(data.result))
}
const displayData = (cards) => {
  const cardContainer = document.getElementById('card-container')
  cards.forEach(cardDetail => {
    console.log(cardDetail.address.street)
    const div = document.createElement('div');
    div.innerHTML =` 
    <div class="card border-success mb-3 shadow-lg p-2">
          <h6 class="card-header bg-transparent border-success">Name: ${cardDetail.name.fullName[0]} ${cardDetail.name.fullName[1]}</h6>
          <div class="card-body text-success">
            <h5 class="card-title">age: ${cardDetail.age}</h5>
            <p class="card-text">Street: ${cardDetail.address.street}, ${cardDetail.address.house}</p>
        </div>
    </div>
    `
    cardContainer.appendChild(div)
  });
}
loadData()