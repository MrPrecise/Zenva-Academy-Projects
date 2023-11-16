async function loadCards() {
  try {
    const response = await fetch(
      "http://127.0.0.1:5500/Humble-Intro-To-Coding-2023/Build-a-Dynamic-Data-Table/data.json"
    );
    let cardsJson = await response.json();
    let cardTable = document.getElementById("myCards");

    var cards = cardsJson.map(function (card) {
      var cardsToShow = {
        id: card.id,
        name: card.name,
        price: card.price,
        isRare: card.isRare,
      };
      return cardsToShow;
    });

    cardTable.innerHTML =
      "<tr><td>ID</td><td>Name</td><td>Price</td><td>Is Rare</td>";
    for (var i = 0; i < cards.length; i++) {
      cardTable.innerHTML +=
        "<tr><td>" +
        cards[i].id +
        "</td><td>" +
        cards[i].name +
        "</td><td>" +
        cards[i].price +
        "</td><td>" +
        cards[i].isRare +
        "</td></tr>";
    }
  } catch (err) {
    alert(err);
  }
}
