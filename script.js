const imgSlider = (imagem, cor, logo) => {
    document.querySelector('.main--img').src = imagem
    document.querySelector('.nav__logo').src = logo

    const circle = document.querySelector('.container__circle')
    const title = document.querySelector('.title--color')
    const btn = document.querySelector('.btn')
    circle.style.background = cor
    title.style.color = cor
    btn.style.background = cor
}

document.querySelector('.main--img').addEventListener('click', imgSlider)
document.querySelector('.container__circle').addEventListener('click', imgSlider)
document.querySelector('.title--color').addEventListener('click', imgSlider)
document.querySelector('.btn').addEventListener('click', imgSlider)