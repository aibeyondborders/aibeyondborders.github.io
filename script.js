// Minimal JavaScript for AI Beyond Borders landing page
// Flag rotator for multicultural message using flagcdn.com

const flagList = [
  { code: 'ch', name: 'Switzerland' },
  { code: 'br', name: 'Brazil' },
  { code: 'in', name: 'India' },
  { code: 'cn', name: 'China' },
  { code: 'us', name: 'USA' },
  { code: 'ng', name: 'Nigeria' },
  { code: 'fr', name: 'France' },
  { code: 'jp', name: 'Japan' },
  { code: 'eg', name: 'Egypt' },
  { code: 'au', name: 'Australia' },
  { code: 'mx', name: 'Mexico' },
  { code: 'za', name: 'South Africa' },
  { code: 'sa', name: 'Saudi Arabia' },
  { code: 'gb', name: 'UK' },
  { code: 'tr', name: 'Turkey' },
  { code: 'kr', name: 'South Korea' },
  { code: 'ca', name: 'Canada' },
  { code: 'es', name: 'Spain' },
  { code: 'it', name: 'Italy' },
  { code: 'ru', name: 'Russia' },
  { code: 'sg', name: 'Singapore' },
  { code: 'ar', name: 'Argentina' },
  { code: 'id', name: 'Indonesia' },
  { code: 'se', name: 'Sweden' },
  { code: 'pl', name: 'Poland' },
  { code: 'vn', name: 'Vietnam' },
  { code: 'ua', name: 'Ukraine' },
  { code: 'my', name: 'Malaysia' },
  { code: 'ph', name: 'Philippines' },
  { code: 'th', name: 'Thailand' },
  { code: 'cl', name: 'Chile' },
  { code: 'nl', name: 'Netherlands' },
  { code: 'pt', name: 'Portugal' },
  { code: 'gr', name: 'Greece' },
  { code: 'il', name: 'Israel' },
  { code: 'ae', name: 'UAE' },
];

// Try to detect user's country using a free IP geolocation API
function setUserFlag() {
  fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
      let countryCode = (data.country || '').toLowerCase();
      if (!countryCode) countryCode = 'ch'; // fallback
      const userFlag = document.getElementById('flag-user');
      if (userFlag) {
        userFlag.src = `https://flagcdn.com/48x36/${countryCode}.png`;
        userFlag.alt = (data.country_name || 'User') + ' flag';
      }
    })
    .catch(() => {/* fallback already set */});
}

setUserFlag();

let flagIndex = 0;
let flagInterval = setInterval(rotateFlag, 1500);
let rotating = true;
let clickMode = false;

function rotateFlag() {
  flagIndex = (flagIndex + 1) % flagList.length;
  setFlag(flagIndex);
}

function rotateFlagBack() {
  flagIndex = (flagIndex - 1 + flagList.length) % flagList.length;
  setFlag(flagIndex);
}

function setFlag(idx) {
  const flagEl = document.getElementById('flag-rotator');
  if (flagEl) {
    flagEl.src = `https://flagcdn.com/48x36/${flagList[idx].code}.png`;
    flagEl.alt = flagList[idx].name + ' flag';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Tabbed card interface
  const tabs = document.querySelectorAll('.tab');
  const cards = document.querySelectorAll('.card');
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const cardClass = tab.getAttribute('data-card');
      cards.forEach(card => {
        if (card.classList.contains(cardClass)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
  // Set first tab as active
  if (tabs.length) tabs[0].classList.add('active');
  const flagEl = document.getElementById('flag-rotator');
  if (flagEl) {
    flagEl.addEventListener('click', function(e) {
      if (rotating) {
        clearInterval(flagInterval);
        rotating = false;
        clickMode = true;
      } else if (clickMode) {
        rotateFlag();
      }
    });
    flagEl.addEventListener('contextmenu', function(e) {
      if (clickMode) {
        e.preventDefault();
        rotateFlagBack();
      }
    });
  }
});
