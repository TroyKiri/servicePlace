class Api {
    constructor(baseUrl, token){
      this.baseUrl = baseUrl;
      this.token = token;
    }
    getUserInfo(name, about, avatar) {
      fetch(`${this.baseUrl}/users/me`, {
        headers: {
          authorization: this.token
        }
      })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then((info) => {
          name.textContent = info.name;
          about.textContent = info.about;
          avatar.style.backgroundImage =`url(${info.avatar})`;
        })
        .catch((err) => {console.log(err);})
    }
    getCards() {
      return (fetch(`${this.baseUrl}/cards`, {
        headers: {
          authorization: this.token
        }
      })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        }))
        .catch((err) => {console.log(err);})
    }
    editProfile(name, about) {
      return (fetch(`${this.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: {
          authorization: this.token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name.value,
          about: about.value
        })
      })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        }))
    }
    sendCard(name, link){
      return (fetch(`${this.baseUrl}/cards`, {
        method: 'POST',
        headers: {
          authorization: this.token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name.value,
          link: link.value
        })
      })
        .then(res => {
            if (res.ok) {
              return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`);          
        }))
    }
    deleteCard(cardId){
      fetch(`${this.baseUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: {
          authorization: this.token,
        }
      })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .catch((err) => {console.log(err);})
    }
  }
