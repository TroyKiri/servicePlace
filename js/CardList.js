class CardList {
    constructor(container, startCards) {
      this.container = container;
      this.places = startCards;
    }
    addCard(cardElement) {
      this.places.push(cardElement);
      this.container.appendChild(cardElement);
    }
    render() {
      this.places.forEach(function(card) {
        card.create();
      })
    }
  }