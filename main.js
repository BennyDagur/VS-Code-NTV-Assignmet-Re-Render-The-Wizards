const Harry = {
    firstName: "Harry",
    lastName: "Potter",
    hairColor: "Black",
}
const Hermoine = {
    firstName: "Hermoine",
    lastName: "Granger",
    hairColor: "Brown",
}
const Ron = {
    firstName: "Ron",
    lastName: "Weasly",
    hairColor: "Red",
}

const HarryHTML = document.getElementById("Harry")
const HermoineHTML = document.getElementById("Hermoine")
const RonHTML = document.getElementById("Ron")


const deconstructWizards = (wiz1, wiz2, wiz3) => {
    const { firstName: Hy, lastName: Pr } = wiz1
    const { firstName: He, lastName: Gr } = wiz2
    const { firstName: Rn, lastName: Wy } = wiz3

    const harryFullName = (Hy+" "+Pr)
    const hermoineFullName = (He+" "+Gr)
    const ronFullName = (Rn+" "+Wy)

    return({
        harryFullName: harryFullName,
        hermoineFullName: hermoineFullName,
        ronFullName: ronFullName
    })
}



function renderTheWizards () {
    var i = 0
    const color = [Harry.hairColor, Hermoine.hairColor, Ron.hairColor]
    const renderWizards = deconstructWizards(Harry, Hermoine, Ron)
    const wizards = [renderWizards]
    console.log(renderWizards)
wizards.forEach(() => {
    for(const prop in renderWizards){
    const newList = document.createElement("li")
    newList.textContent = (renderWizards[prop])
    newList.style.cssText = `color: ${color[i]}`
    document.body.appendChild(newList)
    i++
}
})}

renderTheWizards()