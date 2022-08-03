export function initialPageLoad () {
    let contentDiv = document.querySelector(`#content`)
    contentDiv.replaceChildren();
    let image = document.createElement(`img`)
    image.classList.add(`image`)
    image.src = `../dist/7557ce94cf53e39e774b.png`
    contentDiv.appendChild(image)

    let header = document.createElement(`h1`)
    header.textContent = `Nour-Restaurant`
    header.classList.add(`head`)
    contentDiv.appendChild(header)

    let para = document.createElement(`p`)
    para.classList.add(`para`)
    para.textContent = ` The definition of a diner is a person who is eating in a restaurant, a casual roadside restaurant with booths and a counter that traditionally resembles the dining car on a train.`
    contentDiv.appendChild(para)
}