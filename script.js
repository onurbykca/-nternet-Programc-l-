// script.js
let selectedMatches = {};
let matchCount = 1;

function calculateBet(matchNumber, outcome, odds) {
  const betKey = `${matchNumber}_${outcome}`;

  if (selectedMatches[betKey]) {
    alert("Bu maça zaten bahis yaptınız!");
    return;
  }

  // Eğer bu maç için daha önce başka bir bahis yapılmışsa, eski bahisleri sil
  for (const key in selectedMatches) {
    if (key.startsWith(matchNumber)) {
      delete selectedMatches[key];
    }
  }

  selectedMatches[betKey] = { odds, matchNumber, outcome };
  updateBetSlip();
}

function removeBet(betKey) {
  delete selectedMatches[betKey];
  updateBetSlip();
}

function updateBetSlip() {
  const oyna =document.getElementById('oyna');
  const betSlip = document.getElementById('betSlip');
  const totalOddsElement = document.getElementById('totalOdds');
  let totalOdds = 1.0;

  betSlip.innerHTML = "";

  for (const betKey in selectedMatches) {
    const { odds, matchNumber, outcome } = selectedMatches[betKey];
    totalOdds *= odds;

    const listItem = document.createElement('li');
    listItem.textContent = `Maç ${matchNumber}: ${outcome} - Oran: ${odds}`;
    
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Kaldır';
    removeButton.addEventListener('click', () => removeBet(betKey));
    
    listItem.appendChild(removeButton);
    betSlip.appendChild(listItem);
    if(totalOdds.toFixed(2) != 1.00){
      oyna.textContent='Bahsi Oyna';
   } else if(totalOdds.toFixed(2) == 1.00) {
      oyna.textContent='nklnlnlknlnlnlnnlnlnlln';
    
    }
    
  }

  totalOddsElement.textContent = `Toplam Oran: ${totalOdds.toFixed(2)}`;
}


// Oranları butonlara ve bahis seçeneklerine ekleyin
document.querySelectorAll('.event').forEach(event => {
  const buttons = event.querySelectorAll('button');
  const oddsText = event.querySelector('p:nth-child(2)').textContent.split(': ')[1].split(', ');
  const matchNumber = event.querySelector('p:nth-child(1)').textContent.split(': ')[1];

  buttons.forEach((button, index) => {
    const outcome = button.textContent.trim();
    const odds = parseFloat(oddsText[index]);

    button.addEventListener('click', () => calculateBet(matchNumber, outcome, odds));
    button.textContent = `${outcome} (${odds})`;
  });

  // Her maç için bahis seçenekleri ekleniyor
  const betOptions = ['Ev Sahibi','Beraberlik','Deplasman','0.5 Üst', '1.5 Üst', '2.5 Üst', '0.5 Alt', '1.5 Alt', '2.5 Alt', 'KG Var', 'KG Yok'];

  betOptions.forEach(option => {
    const optionOdds = parseFloat((Math.random() * (3 - 1) + 1).toFixed(2)); // Rastgele bir örnek oran
    const optionButton = document.createElement('button');
    optionButton.textContent = `${option} (${optionOdds})`;
    optionButton.addEventListener('click', () => calculateBet(matchNumber, option, optionOdds));
    event.appendChild(optionButton);
  });
});
// script.js

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Kullanıcı adı ve şifre kontrolü yapılabilir
  // Örnek olarak, basit bir kontrol
  if (username === 'demo' && password === 'demo') {
    alert('Giriş Başarılı!');
    // Giriş başarılı ise, istediğiniz sayfaya yönlendirebilirsiniz
  } else {
    alert('Kullanıcı adı veya şifre hatalı!');
  }
}
// script.js
// Diğer kodlar burada...

// Basketbol maçları için bahis fonksiyonları
function calculateBasketballBet(matchNumber, outcome, odds) {
  const betKey = `Basketball_${matchNumber}_${outcome}`;

  if (selectedMatches[betKey]) {
    alert("Bu maça zaten bahis yaptınız!");
    return;
  }

  // Eğer bu maç için daha önce başka bir bahis yapılmışsa, eski bahisleri sil
  for (const key in selectedMatches) {
    if (key.startsWith(`Basketball_${matchNumber}`)) {
      delete selectedMatches[key];
    }
  }

  selectedMatches[betKey] = { odds, matchNumber, outcome };
  updateBetSlip();
}

// Basketbol bahislerini kaldırma fonksiyonu
function removeBasketballBet(betKey) {
  delete selectedMatches[betKey];
  updateBetSlip();
}

// Basketbol bahislerini güncelleme fonksiyonu
function updateBasketballBetSlip() {
  // İsteğe bağlı olarak basketbol bahis kuponunu güncelleyen kodlar ekleyebilirsiniz
}

// Basketbol maçlarının butonlarına ve bahis seçeneklerine ekleyin
document.querySelectorAll('.event').forEach(event => {
  const buttons = event.querySelectorAll('button');
  const oddsText = event.querySelector('h2').textContent; // Basketbol maçları için tek bir oran

  buttons.forEach(button => {
    const outcome = button.textContent.trim();
    const odds = parseFloat(oddsText.split(' ')[1].replace(')', ''));

    button.addEventListener('click', () => calculateBasketballBet(matchNumber, outcome, odds));
    button.textContent = `${outcome} (${odds})`;
  });
});
