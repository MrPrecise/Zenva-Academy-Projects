async function loadCards() {
  try {
    const response = await fetch(
      "http://127.0.0.1:5500/Humble-Intro-To-Coding-2023/Build-a-Dynamic-Data-Table/data.json"
    );
    let cardsJson = await response.json();
    let cardTable = document.getElementById("myCards");
    let onlyRares = document.getElementById("raresOnly");

    var cards = cardsJson.map(function (card) {
      var cardsToShow = {
        id: card.id,
        name: card.name,
        price: card.price,
        isRare: card.isRare,
      };
      return cardsToShow;
    });

    let rareCards = cards
      .filter((obj) => obj.isRare == true)
      .map((obj) => ({
        id: obj.id,
        name: obj.name,
        priceUSD: obj.priceUSD,
        isRare: obj.isRare,
      }));

    if (onlyRares.checked) {
      for (var i = 0; i < rareCards.length; i++) {
        cardTable.innerHTML +=
          "" +
          rareCards[i].id +
          "" +
          rareCards[i].name +
          "" +
          rareCards[i].price +
          "" +
          rareCards[i].isRare +
          "";
      }
    } else {
      for (var i = 0; i < cards.length; i++) {
        cardTable.innerHTML +=
          "" +
          cards[i].id +
          "" +
          cards[i].name +
          "" +
          cards[i].price +
          "" +
          cards[i].isRare +
          "";
      }
    }

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
