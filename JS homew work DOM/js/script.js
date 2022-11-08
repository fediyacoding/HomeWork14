let bod = document.querySelector('body')
bod.style.background = '#F2EAE2'

const divBig = document.createElement('div')
divBig.style.cssText = `
    width: 600px;
    height: 450px;
    margin: 0 auto;
    display: flex;
    overflow: hidden;
    margin-top: 120px;
    border-radius: 12px;
`

const divSmall = document.createElement('div')
divSmall.style.cssText = `  
    width: 300px;
    height: 450px;
`

const divSmall2 = document.createElement('div')
divSmall2.style.cssText = `
    width: 300px;
    height: 450px;
    background: #FFFFFF;
    padding: 32px;
`
const img = document.createElement('img');
img.src = 'img/background.png';
let headerH1 = document.createElement('h1')
headerH1.style.cssText = `
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 5px;
    color: #6C7289;
    margin-bottom: 20px;
    font-family: 'Montserrat';
`
headerH1.innerText = 'PERFUME'


let pTeXt = document.createElement('p')
pTeXt.innerHTML = 'Gabrielle Essence Eau <br> De  Parfum'
pTeXt.style.cssText = `
    font-weight: 700;
    font-size: 32px;
    line-height: 32px;
    color: #1C232B;
    margin-bottom: 24px;
    font-family: 'Fraunces';
`

let pTeXtBig = document.createElement('p')
pTeXtBig.innerHTML = 'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.'
pTeXtBig.style.cssText = `
    font-weight: 500;
    font-size: 14px;
    line-height: 23px;
    color: #6C7289;
    margin-bottom: 29px;
    font-family: 'Montserrat';
`


let divMoney = document.createElement('div')
divMoney.style.cssText = `
    width: 80%;
    display: flex;
   justify-content: space-between;
   font-weight: 700;
   font-size: 32px;
   line-height: 32px;
   color: #3D8168;
   margin-bottom: 30px;
   cursor: pointer;
   font-family: 'Fraunces';

`
divMoney.innerHTML = '$149.99 <span style="font-weight: 500;font-size: 13px;line-height: 32px; font-family: "Montserrat";">$169.99</span>'

let addBtn = document.createElement('button')
addBtn.innerText = 'Add to Cart'
addBtn.style.cssText = `
    width: 236px;
    height: 48px;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
    background: #3D8168;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-family: 'Montserrat';
    display: flex;
    justify-content: center;
    align-items: center;
 `
let png = document.createElement('img')
png.src = 'img/check.png'
addBtn.prepend(png)
png.style.marginRight = '20px'




document.body.prepend(divBig)
divBig.append(divSmall)
divBig.append(divSmall2);
divSmall.prepend(img);
divSmall2.append(headerH1)
divSmall2.append(pTeXt)
divSmall2.append(pTeXtBig)
divSmall2.append(divMoney)
divSmall2.append(addBtn)
