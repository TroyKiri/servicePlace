class Card {
    constructor(name, link, likes, ownerId, id, container, api) {
      this.name = name;
      this.link = link;
      this.likes = likes;
      this.ownerId = ownerId;
      this.id = id;
      this.container = container;
      this.api = api;
    }
    like(event) {
      event.target.classList.toggle('place-card__like-icon_liked');
    }
    remove(event) {
      if(window.confirm('Вы действительно хотите удалить карточку?')) {
        const id = (event.target.closest('.place-card')).id;
        this.api.deleteCard(id);
        this.container.removeChild(event.target.closest('.place-card'));
      }
    }
    create() {
        const html = `<div class="place-card">
                        <div class="place-card__image">
                          ${(this.ownerId === myId) ? '<button class="place-card__delete-icon"></button>': ''}
                        </div>
                        <div class="place-card__description">
                          <h3 class="place-card__name"></h3>
                          <div class = 'place-card__like-group'>
                            <button class="place-card__like-icon"></button>
                            <p class ="place-card__like-count">${this.likes.length}</p>
                          </div>
                        </div>
                    </div>`;
      this.container.insertAdjacentHTML('beforeend', html);
      const placeCard = placesList.lastElementChild;
      placeCard.querySelector(".place-card__name").textContent = this.name;
      placeCard.querySelector(".place-card__image").style.backgroundImage = `url(${this.link})`;
      placeCard.id = this.id;

      this.cardElement = placeCard;
      this.cardElement.querySelector('.place-card__like-icon').addEventListener('click', this.like);
      if (this.ownerId === myId) {
        this.cardElement.querySelector('.place-card__delete-icon').addEventListener('click', this.remove.bind(this));
      }
      return placeCard;
    }
  }
