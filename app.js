const person = {
  found: 2,
  message: "Found 2 persons",
  result: [
    {
      name: {
        common: "John",
        fullName: ["John", "Doe"],
      },
      age: 32,
      isMale: false,
      address: {
        street: "13/A St Joseph",
        house: 10,
      },
    },
    {
      name: {
        common: "Humayoun",
        fullName: ["Humayoun", "Kabir"],
      },
      age: 33,
      isMale: false,
      address: {
        street: "13/A St Lucia",
        house: 11,
      },
    },
  ],
};
function loadData(person){
    console.log(person.result[0].address.street)
    const cardContainer = document.getElementById('card-container')
    const cardName = document.getElementById('name')
    const cardName2 = document.getElementById('name2')
    const age = document.getElementById('age');
    const age2 = document.getElementById('age2');
    const location = document.getElementById('location');
    const location2 = document.getElementById('location2');
    cardName.innerText =`Person Name: ${person.result[0].name.common}`
    age.innerText = `age ${person.result[0].age}`
    location.innerText = `Street: ${person.result[0].address.street}, House : ${person.result[0].address.house}`

    // card 2
    cardName2.innerText =`Person Name: ${person.result[1].name.common}`
    age2.innerText = `age ${person.result[1].age}`
    location2.innerText = `Street: ${person.result[1].address.street}, House : ${person.result[1].address.house}`

}
loadData(person)