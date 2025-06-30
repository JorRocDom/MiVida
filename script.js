const envelope = document.querySelector('.envelope-wrapper');
const letter = document.querySelector('.letter');


document.addEventListener('click', (e) => {
    if (
        e.target.matches(".envelope") || 
        e.target.matches(".tap-right") || 
        e.target.matches(".tap-left") || 
        e.target.matches(".heart")
    ) {
        envelope.classList.toggle('flap');
    } else if (e.target.matches(".envelope *")) {
        if (!letter.classList.contains('opened')) {
            letter.classList.add("letter-opening");

            setTimeout(() => {
                letter.classList.remove('letter-opening');
                letter.classList.add('opened');
            }, 500);
            envelope.classList.add("disable-envelope")
        } else {
            letter.classList.add('closing-letter')
            envelope.classList.remove("disable-envelope")
            letter.classList.remove('opened')
            setTimeout(() => {
                letter.classList.remove('closing-letter');
                letter.classList.remove('opened');
            }, 500);
        }
    }
});


let currentStep = 1;

function nextCard() {
  const currentCard = document.getElementById(`card-${currentStep}`);
  const nextCard = document.getElementById(`card-${currentStep + 1}`);
  const nextCard2 = document.getElementById(`card-${currentStep + 2}`);
  const previousCard = document.getElementById(`card-${currentStep - 1}`);
  const dots = document.querySelectorAll('.dot');

  currentStep++;

  dots.forEach(dot => dot.classList.remove('active-dot'));

  if (currentCard) {
    currentCard.classList.remove('principal');
    currentCard.classList.add('anterior');
  }

  if (nextCard) {
    const nextCardDots = nextCard.querySelectorAll('.dot');
    if (nextCardDots.length > currentStep - 1) {
      nextCardDots[currentStep - 1].classList.add('active-dot');
    }
    nextCard.classList.remove('siguiente');
    nextCard.classList.add('principal');
  }

  if (nextCard2) {
    nextCard2.classList.remove('siguiente2');
    nextCard2.classList.add('siguiente');
  }

  if (previousCard) {
    previousCard.classList.remove('anterior');
    previousCard.classList.add('anterior2');
    document.getElementById('div-transparent-next')?.classList.add('ocultar');
  }
  document.getElementById('div-transparent-previous')?.classList.remove('ocultar');
}

function previousCard() {
  const currentCard = document.getElementById(`card-${currentStep}`);
  const nextCard = document.getElementById(`card-${currentStep + 1}`);
  const previousCard = document.getElementById(`card-${currentStep - 1}`);
  const previousCard2 = document.getElementById(`card-${currentStep - 2}`);
  const dots = document.querySelectorAll('.dot');

  currentStep--;

  dots.forEach(dot => dot.classList.remove('active-dot'));

  if (currentCard) {
    currentCard.classList.remove('principal');
    currentCard.classList.add('siguiente');
  }

  if (previousCard) {
    const previousCardDots = previousCard.querySelectorAll('.dot');
    if (previousCardDots.length > currentStep - 1) {
      previousCardDots[currentStep - 1].classList.add('active-dot');
    }
    previousCard.classList.remove('anterior');
    previousCard.classList.add('principal');
  }

  if (previousCard2) {
    previousCard2.classList.remove('anterior2');
    previousCard2.classList.add('anterior');
  }

  if (nextCard) {
    nextCard.classList.remove('siguiente');
    nextCard.classList.add('siguiente2');
    document.getElementById('div-transparent-previous')?.classList.add('ocultar');
  }
  document.getElementById('div-transparent-next')?.classList.remove('ocultar');
}

//funcionalidad de arrastrar card para movil:

let touchStartX = 0;

function onTouchStart(event) {
  touchStartX = event.changedTouches[0].clientX;
}

function onTouchEnd(event) {
  const touchEndX = event.changedTouches[0].clientX;
  const deltaX = touchStartX - touchEndX;
  const nextCardElement = document.getElementById(`card-${currentStep + 1}`);
  const previousCardElement = document.getElementById(`card-${currentStep - 1}`);

  if (deltaX > 50 && nextCardElement) {
    nextCard();  
  } else if (deltaX < -50 && previousCardElement) {
    previousCard();  
  }
}

var svg = document.getElementById('svg');

var animation0 = document.getElementById('animate0'); 
svg.addEventListener('mouseenter', function(){ animation0.beginElement(); });
var animation1 = document.getElementById('animate1'); 
svg.addEventListener('mouseenter', function(){ animation1.beginElement(); });
var animation2 = document.getElementById('animate2'); 
svg.addEventListener('mouseenter', function(){ animation2.beginElement(); });
var animation3 = document.getElementById('animate3'); 
svg.addEventListener('mouseenter', function(){ animation3.beginElement(); });
var animation4 = document.getElementById('animate4'); 
svg.addEventListener('mouseenter', function(){ animation4.beginElement(); });
var animation5 = document.getElementById('animate5'); 
svg.addEventListener('mouseenter', function(){ animation5.beginElement(); });
var animation6 = document.getElementById('animate6'); 
svg.addEventListener('mouseenter', function(){ animation6.beginElement(); });
var animation7 = document.getElementById('animate7'); 
svg.addEventListener('mouseenter', function(){ animation7.beginElement(); });
var animation8 = document.getElementById('animate8'); 
svg.addEventListener('mouseenter', function(){ animation8.beginElement(); });
var animation9 = document.getElementById('animate9'); 
svg.addEventListener('mouseenter', function(){ animation9.beginElement(); });
var animation10 = document.getElementById('animate10'); 
svg.addEventListener('mouseenter', function(){ animation10.beginElement(); });
var animation11 = document.getElementById('animate11'); 
svg.addEventListener('mouseenter', function(){ animation11.beginElement(); });
var animation12 = document.getElementById('animate12'); 
svg.addEventListener('mouseenter', function(){ animation12.beginElement(); });
var animation13 = document.getElementById('animate13'); 
svg.addEventListener('mouseenter', function(){ animation13.beginElement(); });
var animation14 = document.getElementById('animate14'); 
svg.addEventListener('mouseenter', function(){ animation14.beginElement(); });
