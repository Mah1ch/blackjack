//  VAAAAAAAAAAAAAAAARSSS
let cards= []
let cardnum = 0
let dcardnum = 2
let sum = 0
let blackJack = false
let isAlive = false
let messages = ""
let dcardsum = 0
let depForGame = document.getElementById("depForGame")
let regBtn = document.getElementById("regBtn")
let secret = document.getElementById("secretNumEl")
let hello = document.getElementById("hello")
let mesEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards")
let dcardsEl = document.getElementById("dcards")
let sumEl = document.querySelector("#sum")
let dsumEl = document.querySelector("#dsum")
let secretCard = document.getElementById("dimg0")
let namez = document.getElementById("player-name")
let startBtn = document.getElementById('start')
let newCardBtn = document.getElementById('newCard')
let holdBtn = document.getElementById('hold')
let depEl = document.getElementById("dep")
let depDiv = document.getElementById("eblan")
let depDiv2 = document.getElementById("eblan2")
let newGame = document.getElementById("newGame")
newGame.style.display = "none"
let depUser = "0"
let depp = false
newCardBtn.style.display = "none"
holdBtn.style.display = "none"
let player = {
    username: "",
    candies: 0,
    title: ""
}
let username = document.getElementById("inputUser").value
let terms = document.getElementById("terms")

//REGISTRATION
var today = new Date()
var time = today.getHours()

function hold(){
    showSecretCard()
    newCardBtn.disabled = "true"
    if (sum > dcardsum) {
        let dcard1 = Math.floor(getRandomCard())
        dcardsEl.textContent += dcard1 + " "
        console.log(dcard1)
        dcardsum += dcard1
        dsumEl.textContent = dcardsum 
        dimg(dcard1,Math.floor(Math.random() * 4))
        if (sum > dcardsum) {
            let dcard2 = Math.floor(getRandomCard())
            dcardsEl.textContent += dcard2 + " "
            dcardsum += dcard2
            dsumEl.textContent = dcardsum
            dimg(dcard2,Math.floor(Math.random() * 4))
            if (sum > dcardsum) {
                let dcard3 = Math.floor(getRandomCard())
                dcardsEl.textContent += dcard3 + " "
                dcardsum += dcard3
                dsumEl.textContent = dcardsum
                dimg(dcard3,Math.floor(Math.random() * 4))
            }
        }
    }
    if (dcardsum > 21) {
        player.candies += depUser * 2
        depEl.textContent = player.candies
        messages = "YOU WINN"
        newGame.style.display = "inline"
        mesEl.textContent = messages
        newCardBtn.style.display = "none"
        holdBtn.style.display = "none"
        depDiv.style.display= "block"
        depDiv2.style.display = "initial"                
    }else if (dcardsum === sum) {
        player.candies += depUser
        
        depEl.textContent = player.candies
        messages = "DRAW"
        newGame.style.display = "inline"
        mesEl.textContent = messages
        newCardBtn.style.display = "none"
        depDiv.style.display= "block"
        depDiv2.style.display = "initial"            
        holdBtn.style.display = "none"
    }else{
        messages = "WTF MEN PLS DELETE ETU XUYNYU"
        newGame.style.display = "inline"
        mesEl.textContent = messages
        newCardBtn.style.display = "none"
        depDiv.style.display= "block"
        depDiv2.style.display = "initial"
        holdBtn.style.display = "none"
    }
    holdBtn.disabled = "true"

}
function newGamee(){
    sum = 0
    console.log(sum)
    dcardsum = 0
    console.log(dcardsum)
    while (cards.length > 0) {
        cards.pop()
    }
    console.log(cards)
    for (let i = 0; i < 6; i++) {
        document.getElementById("img"+i).src = ""
    }
    for (let i = 0; i < 2; i++) {
        document.getElementById("dimg"+i).src = ""
    }
    for (let i = 2; i < 6; i++) {
        document.getElementById("ddimg"+i).src = ""
    }

    cardsEl.textContent = ""
    sumEl.textContent = ""
    dsumEl.textContent = ""
    dcardsEl.textContent = "Cards: "
    newGame.style.display = "none"
    startGame()
}
function reg() {
    player.username = document.getElementById("inputUser").value
    player.candies = document.getElementById("inputCandies").value
    if (player.username === null || player.username === "" || terms.checked === false) {
        console.log("did naxuy");
    } else {
        
        console.log(player.username);
        namez.textContent += " " + player.username
        var divReg = document.getElementById("divReg")
        var divGame = document.getElementById("divGame")
        divReg.classList.toggle("hidden")
        divGame.classList.toggle("unhidden")
        regBtn.disabled = true

    }
    depEl.textContent += player.candies
    if (time > 5 && time < 12) {
        mesEl.textContent = "Good Morning " + player.username + ". Do you wanna play?" 
    }else if (time > 12 && time < 17) {
        mesEl.textContent = "Good Afternoon " + player.username + ". Do you wanna play?"
    }else if (time > 17 && time < 21) {
        mesEl.textContent = "Good Evening " + player.username + ". Do you wanna play?"
    }else{
        mesEl.textContent = "Good Night " + player.username + ". Do you wanna play?"
    }
}
function depCheck(){
    depUser = document.getElementById("depchik").value
    if (depUser <= player.candies) {
        
        depDiv.style.display= "none"
        depDiv2.style.display= "none"
        player.candies -= depUser
        depEl.textContent = player.candies
        depForGame.textContent = depUser
    } else {
        console.log("idi naxzuy suka");
    }
}
function getRandomCard() {
    let x = Math.floor( Math.random() * 13 )+ 1
    
    if (x > 10) {
        return 10
    }else if (x === 1) {
        return 11
    }else{
        return x
    }
}

function showSecretCard() {
    let secretNum = Math.floor(getRandomCard())
    dcardsEl.textContent += secretNum + " "
    dcardsum += secretNum
    dsumEl.textContent = dcardsum
    let color = Math.floor(Math.random() * 4)
    let colorr = "clubs"
    if (color === 0) {
        colorr = "clubs"
    }else if (color === 1) {
        colorr = "diamonds"
    }else if (color === 2) {
        colorr = "hearts"
    }else if (color === 3) {
        colorr = "spades"
    }
    if (secretNum === 1) {
        secretCard.src = "img/" + colorr +"/a.png"
    }else if(secretNum === 11){
        secretCard.src = "img/" + colorr + "/j.png"
    }
    else if(secretNum === 12){
        secretCard.src = "img/" + colorr + "/q.png"
    }
    else if(secretNum === 13){
        secretCard.src = "img/" + colorr + "/k.png"
    }else{
        secretCard.src = "img/" + colorr + "/" + secretNum +".png"
    }
}
function renderGame(){
    isAlive = true
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20){
        messages = "Do u want to draw new card?"
    }else if (sum === 21){
        messages = "BLAAAAAAAACKJACK"
        player.candies += depUser * 2
        depEl.textContent = player.candies
        blackJack = true 
        newCardBtn.style.display = "none"
        holdBtn.style.display = "none"
        showSecretCard()
        depDiv.style.display= "block"
        depDiv2.style.display = "initial"
        newGame.style.display = "inline"
    }else {
        messages = "WTF PLS DELETE THE GAME"
        isAlive = false
        startBtn.disabled = true;
        newCardBtn.style.display = "none"
        holdBtn.style.display = "none"
        showSecretCard()
        depDiv.style.display= "block"
        depDiv2.style.display = "initial"
        newGame.style.display = "inline"
    }
    mesEl.textContent = messages
    console.log(messages)
}
function startGame() {
    depDiv.style.display = "none"
    depDiv.style.display = "none"
    startBtn.style.display = "none"
    newCardBtn.style.display = "inline"
    holdBtn.style.display = "inline"
    newCardBtn.disabled = false;
    holdBtn.disabled = false;
    isAlive = true
    let num1 = Math.floor(getRandomCard())
    cards.push(num1)
    let num2 = Math.floor(getRandomCard())
    cards.push(num2)
    sum = num1 + num2
    img(num1,Math.floor(Math.random() * 4),"img")
    img(num2,Math.floor(Math.random() * 4),"img")
    secretCard.src = "/2step/img/obratka.png"
    let dnum = Math.floor(getRandomCard())
    dcardsum += dnum
    dsumEl.textContent = dcardsum
    dcardsEl.textContent += dnum + " "
    img(dnum,Math.floor(Math.random() * 4),"dimg")

    renderGame()
}
function newCard() {
    let num3 = Math.floor(getRandomCard())
    cards.push(num3)
    sum += num3
    img(num3,Math.floor(Math.random() * 4),"img")
    renderGame()
}
function img(cardz,color,imgg) {
    if (imgg === "dimg") {
        cardnum = 1
    }if (imgg === "ddimg") {
        cardnum = 2
    }
    let colorr = "clubs"
    if (color === 0) {
        colorr = "clubs"
    }else if (color === 1) {
        colorr = "diamonds"
    }else if (color === 2) {
        colorr = "hearts"
    }else if (color === 3) {
        colorr = "spades"
    }
    if (cardz === 1) {
        document.getElementById(imgg+cardnum).src = "img/" + colorr +"/a.png"
    }else if(cardz === 11){
        document.getElementById(imgg+cardnum).src = "img/" + colorr + "/j.png"
    }
    else if(cardz === 12){
        document.getElementById(imgg+cardnum).src = "img/" + colorr + "/q.png"
    }
    else if(cardz === 13){
        document.getElementById(imgg+cardnum).src = "img/" + colorr + "/k.png"
    }else{
        document.getElementById(imgg+cardnum).src = "img/" + colorr + "/" + cardz +".png"
    }
    cardnum++
}
function dimg(cardz,color) {
    let colorr = "clubs"
    if (color === 0) {
        colorr = "clubs"
    }else if (color === 1) {
        colorr = "diamonds"
    }else if (color === 2) {
        colorr = "hearts"
    }else if (color === 3) {
        colorr = "spades"
    }
    if (cardz === 1) {
        document.getElementById("ddimg"+dcardnum).src = "img/" + colorr +"/a.png"
    }else if(cardz === 11){
        document.getElementById("ddimg"+dcardnum).src = "img/" + colorr + "/j.png"
    }
    else if(cardz === 12){
        document.getElementById("ddimg"+dcardnum).src = "img/" + colorr + "/q.png"
    }
    else if(cardz === 13){
        document.getElementById("ddimg"+dcardnum).src = "img/" + colorr + "/k.png"
    }else{
        document.getElementById("ddimg"+dcardnum).src = "img/" + colorr + "/" + cardz +".png"
    }
    dcardnum++
}