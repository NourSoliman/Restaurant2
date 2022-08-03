export function contact() {
    const contentDiv2 = document.querySelector(`#content`)
    contentDiv2.classList.add(`map-div`)
    contentDiv2.replaceChildren();


    const phoneNumber = document.createElement(`p`)
    phoneNumber.textContent = `TelePhone :📞 505 605 705`
    phoneNumber.classList.add(`phone`)
    contentDiv2.appendChild(phoneNumber)

    const adress = document.createElement(`p`)
    adress.classList.add(`adress`)
    adress.textContent = ` Adress :Almhamoudiyah, b7era`
    contentDiv2.appendChild(adress)

    const adressImage = document.createElement(`img`)
    adressImage.src = `../src/assets/map.PNG`
    adressImage.alt = `Map`
    adressImage.classList.add(`map`)
    contentDiv2.appendChild(adressImage)
}