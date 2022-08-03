export function menu() {
    const contentDiv = document.querySelector(`#content`)
    contentDiv.classList.add(`newDiv`)
    const menuDiv = document.createElement(`div`)
    menuDiv.classList.add(`menu-div`)
    contentDiv.replaceChildren();
    const heading = document.createElement(`h1`)
    heading.textContent = `Menu`
    heading.classList.add(`menu`)
    // contentDiv.appendChild(heading)
    menuDiv.appendChild(heading)

    const burger = document.createElement(`img`)
    burger.src = `../dist/20eed5f4b736bac43c16.png`
    burger.alt = `burger`
    burger.classList.add(`burger1`)
    // contentDiv.appendChild(burger)
    menuDiv.appendChild(burger)
    // name
    const burgerName = document.createElement(`h3`)
    burgerName.classList.add(`name`)
    burgerName.textContent = `Large Burger`
    // contentDiv.appendChild(burgerName)
    menuDiv.appendChild(burgerName)
    // burger price
    const burgerPrice = document.createElement(`p`)
    burgerPrice.classList.add(`price`)
    burgerPrice.textContent = `Price: 2.5$`
    // contentDiv.appendChild(burgerPrice)
    menuDiv.appendChild(burgerPrice)
    // burger info
    const burgerInfo = document.createElement(`p`)
    burgerInfo.classList.add(`info`)
    burgerInfo.textContent = `Info: A hamburger is a food consisting of fillings —usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll`

    // contentDiv.appendChild(burgerInfo)
    menuDiv.appendChild(burgerInfo)


    const occasionLabel = document.createElement(`label`)
    occasionLabel.textContent = `50% off`
    occasionLabel.classList.add(`label`)
    // contentDiv.appendChild(occasionLabel)
    menuDiv.appendChild(occasionLabel)
    
    const newLine = document.createElement(`hr`)
    // contentDiv.appendChild(newLine)
    menuDiv.appendChild(newLine)
    contentDiv.appendChild(menuDiv)

    const burger2 = document.createElement(`img`)
    burger2.src = `../dist/20eed5f4b736bac43c16.png`
    burger2.alt = `burger`
    burger2.classList.add(`burger1`)
    // contentDiv.appendChild(burger2)
    menuDiv.appendChild(burger2)

    // name
    const burgerName1 = document.createElement(`h3`)
    burgerName1.classList.add(`name`)
    burgerName1.textContent = `Medium Burger`
    // contentDiv.appendChild(burgerName1)
    menuDiv.appendChild(burgerName1)

    // burger price
    const burgerPrice1 = document.createElement(`p`)
    burgerPrice1.classList.add(`price`)
    burgerPrice1.textContent = `Price: 1.5$`
    // contentDiv.appendChild(burgerPrice1)
    menuDiv.appendChild(burgerPrice1)
    // burger info
    const burgerInfo1 = document.createElement(`p`)
    burgerInfo1.classList.add(`info`)
    burgerInfo1.textContent = `Info: A hamburger is a food consisting of fillings —usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll`
    // contentDiv.appendChild(burgerInfo1)
    menuDiv.appendChild(burgerInfo1)

    const newLine1 = document.createElement(`hr`)
    // contentDiv.appendChild(newLine1)
    menuDiv.appendChild(newLine1)

    const burger3 = document.createElement(`img`)
    burger3.src = `../dist/20eed5f4b736bac43c16.png`
    burger3.alt = `burger`
    burger3.classList.add(`burger1`)
    // contentDiv.appendChild(burger3)
    menuDiv.appendChild(burger3)

    // name
    const burgerName3 = document.createElement(`h3`)
    burgerName3.classList.add(`name`)
    burgerName3.textContent = `Small Burger`
    // contentDiv.appendChild(burgerName3)
    menuDiv.appendChild(burgerName3)

    // burger price
    const burgerPrice3 = document.createElement(`p`)
    burgerPrice3.classList.add(`price`)
    burgerPrice3.textContent = `Price: 1$`
    // contentDiv.appendChild(burgerPrice3)
    menuDiv.appendChild(burgerPrice3)
    // burger info
    const burgerInfo3 = document.createElement(`p`)
    burgerInfo3.classList.add(`info`)
    burgerInfo3.textContent = `Info: A hamburger is a food consisting of fillings —usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll`
    // contentDiv.appendChild(burgerInfo3)
    menuDiv.appendChild(burgerInfo3)
    contentDiv.appendChild(menuDiv);
}
