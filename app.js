/**
 * Guinée Tourisme - Interactive Portal Engine
 */

// 1. DESTINATIONS DATABASE
const destinations = [
  {
    id: 1,
    title: "Chutes de Kinkon",
    region: "moyenne",
    regionLabel: "Fouta Djallon",
    location: "Pita, Moyenne Guinée",
    tagline: "Un canyon vertigineux creusé par la rivière Konkouré",
    image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=800&auto=format&fit=crop",
    type: "waterfall",
    duration: "weekend",
    rating: "4.9",
    description: "Les chutes de Kinkon sont sans doute l'une des attractions les plus impressionnantes de toute la Guinée. Elles se précipitent dans des gorges rocheuses profondes de plus de 80 mètres avec un rugissement assourdissant. Le site abrite également une centrale hydroélectrique historique inaugurée dans les années 1960. Les panoramas depuis les falaises sont à couper le souffle.",
    access: "Piste praticable en 4x4 depuis Pita (12 km)",
    bestSeason: "Fin de saison des pluies (Octobre à Décembre)",
    activities: "Randonnée, Photographie panoramique, Baignade en amont"
  },
  {
    id: 2,
    title: "La Dame de Mali (Mont Loura)",
    region: "moyenne",
    regionLabel: "Fouta Djallon",
    location: "Mali Yembéring, Moyenne Guinée",
    tagline: "Le profil légendaire sculpté par le vent à 1500 m d'altitude",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
    type: "culture",
    duration: "week",
    rating: "5.0",
    description: "Perchée au sommet du Mont Loura (1515 m), la Dame de Mali est une merveille géologique naturelle. L'érosion du vent et de la pluie a sculpté dans la roche granitique le profil parfait d'une femme d'une élégance souveraine, vêtue d'une coiffe traditionnelle peule. De là-haut, la vue s'étend à l'infini sur les plaines du Sénégal et du Mali voisins.",
    access: "Route Conakry-Labé puis piste vers Mali (4x4 conseillé)",
    bestSeason: "Novembre à Mars (visibilité exceptionnelle)",
    activities: "Trek de montagne, Coucher de soleil, Légendes orales"
  },
  {
    id: 3,
    title: "Les Îles de Loos",
    region: "basse",
    regionLabel: "Basse Guinée",
    location: "Au large de Conakry, Guinée Maritime",
    tagline: "Archipel paradisiaque aux plages de sable doré et eaux tièdes",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
    type: "beach",
    duration: "weekend",
    rating: "4.8",
    description: "À seulement 20 minutes en bateau de la capitale Conakry, l'archipel des Îles de Loos (Tamara, Kassa, Room) offre un havre de paix insoupçonné. On y vient pour ses plages idylliques ombragées de cocotiers, ses bungalows écotouristiques, ses poissons grillés ultra-frais et son histoire captivante liée au commerce maritime et aux marins écossais.",
    access: "Traversée en pirogue à moteur depuis le port de Boulbinet (Conakry)",
    bestSeason: "Toute l'année (idéal de Novembre à Mai)",
    activities: "Farniente, Baignade, Plongée libre, Visite de vestiges coloniaux"
  },
  {
    id: 4,
    title: "Réserve Intégrale du Mont Nimba",
    region: "foret",
    regionLabel: "Guinée Forestière",
    location: "Lola, Guinée Forestière",
    tagline: "Sanctuaire de biodiversité unique classé au Patrimoine Mondial de l'UNESCO",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop",
    type: "wildlife",
    duration: "expedition",
    rating: "5.0",
    description: "Le Mont Nimba culmine à 1 752 mètres et forme le toit de l'Afrique de l'Ouest. Ce joyau écologique abrite des prairies d'altitude spectaculaires et une faune endémique d'une rareté absolue : crapaud vivipare du Nimba, micropotamogale et plantes uniques. Une aventure réservée aux amoureux de nature authentique et de treks engagés.",
    access: "Par vol intérieur vers N'Zérékoré puis route vers Lola (guide assermenté obligatoire)",
    bestSeason: "Décembre à Février",
    activities: "Ascension sommitale, Écotourisme encadré, Botanique rare"
  },
  {
    id: 5,
    title: "Chutes de la Voile de la Mariée",
    region: "basse",
    regionLabel: "Basse Guinée",
    location: "Kindia (Tabouna), Basse Guinée",
    tagline: "Deux cascades majestueuses entourées de bambous géants",
    image: "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?q=80&w=800&auto=format&fit=crop",
    type: "waterfall",
    duration: "weekend",
    rating: "4.7",
    description: "Situées à 13 km de la charmante ville de Kindia, ces deux cascades plongent d'une falaise de 80 mètres. Leur voile d'écume blanche évoque la traîne d'une robe de mariée. Le site est niché dans un écrin de forêt luxuriante peuplée d'impressionnantes forêts de bambous géants créant une fraîcheur bienvenue.",
    access: "Route goudronnée Conakry-Kindia (2h30 de trajet), accès aisé",
    bestSeason: "Juillet à Novembre (débit impressionnant)",
    activities: "Pique-nique, Détente, Achat de fruits frais de Kindia"
  },
  {
    id: 6,
    title: "Chimpanzés de Bossou",
    region: "foret",
    regionLabel: "Guinée Forestière",
    location: "Lola, Guinée Forestière",
    tagline: "Les chimpanzés célèbres mondialement pour leur usage d'outils",
    image: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?q=80&w=800&auto=format&fit=crop",
    type: "wildlife",
    duration: "expedition",
    rating: "4.9",
    description: "La communauté de chimpanzés sauvages de Bossou est mondialement étudiée par les primatologues de l'Institut de recherche de Kyoto. Ces primates fascinants ont développé des savoir-faire culturels uniques : ils fabriquent des outils en pierre pour casser les noix de palme dures et communiquent avec une grande subtilité.",
    access: "Depuis N'Zérékoré en 4x4 (environ 2 heures). Visite avec éco-gardes",
    bestSeason: "Novembre à Mai",
    activities: "Observation éthologique respectueuse, Randonnée en forêt sacrée"
  },
  {
    id: 7,
    title: "Chutes de Kambadaga",
    region: "moyenne",
    regionLabel: "Fouta Djallon",
    location: "Pita, Moyenne Guinée",
    tagline: "Un complexe féerique de trois cascades et son pont de lianes",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop",
    type: "waterfall",
    duration: "week",
    rating: "4.9",
    description: "Kambadaga est un des paysages les plus magiques d'Afrique. Le fleuve Kakrima s'y divise en plusieurs bras avant de se jeter en escalier en plusieurs paliers successifs. Un pont de lianes végétales tissé par les villageois permet de traverser le cours d'eau pour des sensations d'aventurier garanties.",
    access: "Piste depuis Pita (1h30), accompagnement par un guide local recommandé",
    bestSeason: "Octobre à Janvier",
    activities: "Traversée de pont de lianes, Baignade naturelle, Bivouac sous les étoiles"
  },
  {
    id: 8,
    title: "Dalaba & la Forêt de Pins",
    region: "moyenne",
    regionLabel: "Fouta Djallon",
    location: "Dalaba, Moyenne Guinée",
    tagline: "La Petite Suisse guinéenne réputée pour sa fraîcheur et son calme",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=800&auto=format&fit=crop",
    type: "culture",
    duration: "weekend",
    rating: "4.8",
    description: "Perchée à plus de 1 200 mètres d'altitude, Dalaba jouit d'un microclimat tempéré qui lui a valu le surnom de 'Petite Suisse'. Ses allées bordées d'immenses forêts de pins de Sibérie (plantées par le botaniste Chevalier), la célèbre Case à palabres de Mirabeau et le Pont de Dieu en font une escale reposante incontournable.",
    access: "Route goudronnée Conakry-Mamou-Dalaba",
    bestSeason: "Toute l'année (nuits fraîches en Décembre-Janvier)",
    activities: "Promenade en forêt de pins, Fraisiers de Dalaba, Visite historique"
  },
  {
    id: 9,
    title: "Parc National du Haut-Niger",
    region: "haute",
    regionLabel: "Haute Guinée",
    location: "Faranah & Kouroussa, Haute Guinée",
    tagline: "Sanctuaire de savane boisée traversé par le fleuve Djoliba",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop",
    type: "wildlife",
    duration: "expedition",
    rating: "4.6",
    description: "S'étendant sur plus de 1 200 km², ce parc national préserve la forêt classée de Mafou. C'est l'un des derniers refuges de grands mammifères en Haute Guinée : céphalophes, phacochères, singes patas, buffles et plus de 300 espèces d'oiseaux migrateurs. Le fleuve Niger y coule paisiblement au milieu de paysages de savane dorée.",
    access: "Accessible depuis Faranah en véhicule tout-terrain",
    bestSeason: "Janvier à Mai (animaux faciles à observer près des points d'eau)",
    activities: "Safari d'observation, Pirogue sur le Niger, Pêche sportive"
  },
  {
    id: 10,
    title: "Le Chien Qui Fume & Monts de Dubréka",
    region: "basse",
    regionLabel: "Basse Guinée",
    location: "Dubréka, Basse Guinée",
    tagline: "Une falaise rocheuse sculptée ressemblant à un profil canin",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
    type: "culture",
    duration: "weekend",
    rating: "4.5",
    description: "À seulement 50 km de Conakry, les monts de Dubréka offrent un relief abrupt remarquable. Le 'Chien qui fume' doit son nom à un éperon rocheux évoquant une tête de chien qui semble fumer lorsque les brumes matinales s'élèvent de la mangrove avoisinante. Randonnée agréable avec vue panoramique sur les méandres de la rivière Soumba.",
    access: "Route goudronnée Conakry-Dubréka (1h30 de trajet)",
    bestSeason: "Novembre à Juin",
    activities: "Randonnée pédestre, Balade en pirogue dans les mangroves, Dégustation de crevettes"
  },
  {
    id: 11,
    title: "Plages Sauvages de Bel-Air",
    region: "basse",
    regionLabel: "Basse Guinée",
    location: "Boffa, Basse Guinée",
    tagline: "Des kilomètres de sable fin bordés de cocotiers sur l'Atlantique",
    image: "https://images.unsplash.com/photo-1510414842564-598c451152ad?q=80&w=800&auto=format&fit=crop",
    type: "beach",
    duration: "weekend",
    rating: "4.7",
    description: "Considérée comme l'une des plus belles plages naturelles du littoral ouest-africain, la baie de Bel-Air déroule plusieurs kilomètres de sable doux et doré bordé de palmiers. L'eau y est calme et chaude, parfaite pour une villégiature loin de l'effervescence de la ville. Les couchers de soleil y sont féeriques.",
    access: "Route de Boffa puis piste côtière (environ 3h depuis Conakry)",
    bestSeason: "Novembre à Mai",
    activities: "Baignade en mer, Dégustation de poissons braisés, Repos absolu"
  },
  {
    id: 12,
    title: "Chutes de Saala",
    region: "moyenne",
    regionLabel: "Fouta Djallon",
    location: "Labé, Moyenne Guinée",
    tagline: "Une chute impressionnante de 100 mètres entourée de forêts denses",
    image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=800&auto=format&fit=crop",
    type: "waterfall",
    duration: "week",
    rating: "4.8",
    description: "Près de Labé, capitale économique du Fouta Djallon, la chute de Saala plonge avec une vigueur spectaculaire du haut d'une falaise verticale de 100 mètres dans une vasque naturelle. Le microclimat généré par les embruns favorise une végétation sempervirente et fraîche toute l'année.",
    access: "Piste depuis Labé (environ 30 km, 4x4 nécessaire)",
    bestSeason: "Septembre à Décembre",
    activities: "Descente vers le bassin inférieur, Pique-nique ombragé, Trekking"
  }
];

// 2. STATE MANAGEMENT
let carnet = JSON.parse(localStorage.getItem('guinee_carnet')) || [];
let activeCategory = 'all';

// 3. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  renderDestinations(destinations);
  updateCarnetUI();
  setupFilterTabs();
  setupHeroFilters();
  setupCalculator();
  setupFAQ();
  setupContactForm();
  setupMobileMenu();
  setupModals();
  lucide.createIcons();
});

// 4. DESTINATIONS RENDERING
function renderDestinations(items) {
  const container = document.getElementById('destinations-grid');
  const countAll = document.getElementById('count-all');
  if (countAll) countAll.textContent = destinations.length;

  if (items.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center text-slate-500">
        <i data-lucide="map-pin-off" class="w-12 h-12 mx-auto stroke-1 mb-3 text-slate-400"></i>
        <h4 class="text-lg font-bold text-slate-800">Aucune destination trouvée</h4>
        <p class="text-sm mt-1">Essayez d'autres critères de recherche ou réinitialisez les filtres.</p>
        <button onclick="resetFilters()" class="mt-4 px-4 py-2 bg-brand-green text-white text-xs font-bold rounded-xl">
          Afficher tous les sites
        </button>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  container.innerHTML = items.map(dest => {
    const isSaved = carnet.some(item => item.id === dest.id);
    return `
      <div class="destination-card bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm flex flex-col justify-between group">
        
        <!-- Image Container -->
        <div class="relative h-64 overflow-hidden cursor-pointer" onclick="openModal(${dest.id})">
          <img src="${dest.image}" alt="${dest.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          
          <!-- Badges -->
          <span class="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-brand-green font-bold text-xs px-3 py-1 rounded-full shadow-sm">
            ${dest.regionLabel}
          </span>
          <span class="absolute top-4 right-4 bg-slate-950/70 backdrop-blur-md text-brand-yellow font-bold text-xs px-2.5 py-1 rounded-full flex items-center gap-1">
            ★ ${dest.rating}
          </span>

          <div class="absolute bottom-4 left-4 right-4 text-white">
            <span class="text-xs font-medium text-slate-300 flex items-center gap-1 mb-1">
              <i data-lucide="map-pin" class="w-3.5 h-3.5 text-brand-yellow"></i> ${dest.location}
            </span>
            <h3 class="font-serif text-2xl font-bold leading-tight group-hover:text-emerald-300 transition-colors">${dest.title}</h3>
          </div>
        </div>

        <!-- Body -->
        <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
          <p class="text-slate-600 text-sm line-clamp-3 leading-relaxed">
            ${dest.description}
          </p>

          <div class="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
            <button onclick="openModal(${dest.id})" class="text-xs font-bold text-brand-green hover:text-emerald-700 flex items-center gap-1 group/link">
              <span>En savoir plus</span>
              <i data-lucide="arrow-right" class="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform"></i>
            </button>

            <button onclick="toggleCarnetItem(${dest.id})" class="carnet-btn-item px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              isSaved ? 'bg-red-50 text-brand-red border border-red-200' : 'bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-brand-green border border-slate-200'
            }">
              <i data-lucide="${isSaved ? 'bookmark-check' : 'bookmark-plus'}" class="w-4 h-4"></i>
              <span>${isSaved ? 'Enregistré' : 'Ajouter'}</span>
            </button>
          </div>
        </div>

      </div>
    `;
  }).join('');

  lucide.createIcons();
}

// 5. FILTER TABS
function setupFilterTabs() {
  const tabs = document.querySelectorAll('.filter-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory = tab.dataset.category;
      applyFilters();
    });
  });
}

function filterByRegion(region) {
  activeCategory = region;
  const tabs = document.querySelectorAll('.filter-tab-btn');
  tabs.forEach(t => {
    if (t.dataset.category === region) {
      t.classList.add('active');
    } else {
      t.classList.remove('active');
    }
  });

  // Scroll to destinations section
  const target = document.getElementById('destinations');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }

  applyFilters();
}

function applyFilters() {
  let filtered = destinations;
  if (activeCategory !== 'all') {
    filtered = filtered.filter(d => d.region === activeCategory);
  }
  renderDestinations(filtered);
}

function resetFilters() {
  activeCategory = 'all';
  setupFilterTabs();
  const tabs = document.querySelectorAll('.filter-tab-btn');
  tabs.forEach(t => {
    if (t.dataset.category === 'all') t.classList.add('active');
    else t.classList.remove('active');
  });
  renderDestinations(destinations);
}

// 6. HERO SEARCH BAR FILTERS
function setupHeroFilters() {
  const searchBtn = document.getElementById('hero-search-btn');
  if (!searchBtn) return;

  searchBtn.addEventListener('click', () => {
    const regionVal = document.getElementById('hero-region-filter').value;
    const typeVal = document.getElementById('hero-type-filter').value;
    const durationVal = document.getElementById('hero-duration-filter').value;

    let filtered = destinations;

    if (regionVal !== 'all') {
      filtered = filtered.filter(d => d.region === regionVal);
    }
    if (typeVal !== 'all') {
      filtered = filtered.filter(d => d.type === typeVal);
    }
    if (durationVal !== 'all') {
      filtered = filtered.filter(d => d.duration === durationVal);
    }

    // Scroll to destinations
    document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' });
    renderDestinations(filtered);
    showToast(`${filtered.length} destination(s) trouvée(s) pour votre recherche.`);
  });
}

// 7. CARNET DE VOYAGE (WISHLIST)
function toggleCarnetItem(id) {
  const dest = destinations.find(d => d.id === id);
  if (!dest) return;

  const index = carnet.findIndex(i => i.id === id);
  if (index >= 0) {
    carnet.splice(index, 1);
    showToast(`"${dest.title}" a été retiré de votre carnet.`);
  } else {
    carnet.push(dest);
    showToast(`"${dest.title}" ajouté à votre carnet de voyage !`);
  }

  localStorage.setItem('guinee_carnet', JSON.stringify(carnet));
  updateCarnetUI();
  applyFilters(); // Re-render to reflect bookmark icon state
}

function updateCarnetUI() {
  const count = carnet.length;
  const badge = document.getElementById('carnet-badge');
  const mobileBadge = document.getElementById('mobile-carnet-badge');
  const carnetCount = document.getElementById('carnet-count');
  const carnetItems = document.getElementById('carnet-items');

  if (badge) badge.textContent = count;
  if (mobileBadge) mobileBadge.textContent = count;
  if (carnetCount) carnetCount.textContent = count;

  if (!carnetItems) return;

  if (count === 0) {
    carnetItems.innerHTML = `
      <div id="carnet-empty" class="text-center py-16 text-slate-400">
        <i data-lucide="map-pin-off" class="w-12 h-12 mx-auto stroke-1 mb-3 text-slate-300"></i>
        <p class="text-sm font-medium">Votre carnet est vide pour le moment.</p>
        <p class="text-xs text-slate-400 mt-1">Explorez les merveilles et cliquez sur « Ajouter » pour préparer votre circuit !</p>
      </div>
    `;
  } else {
    carnetItems.innerHTML = carnet.map(item => `
      <div class="flex items-center gap-3 p-3 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white transition-colors">
        <img src="${item.image}" alt="${item.title}" class="w-16 h-16 rounded-xl object-cover flex-shrink-0">
        <div class="flex-1 min-w-0">
          <h4 class="font-bold text-sm text-slate-900 truncate">${item.title}</h4>
          <span class="text-xs text-brand-green font-semibold">${item.regionLabel}</span>
          <p class="text-[11px] text-slate-500 truncate">${item.location}</p>
        </div>
        <button onclick="toggleCarnetItem(${item.id})" class="p-2 text-slate-400 hover:text-brand-red rounded-lg transition-colors" title="Supprimer">
          <i data-lucide="trash-2" class="w-4 h-4"></i>
        </button>
      </div>
    `).join('');
  }

  lucide.createIcons();
}

function openCarnet() {
  const drawer = document.getElementById('carnet-drawer');
  drawer.classList.remove('translate-x-full');
}

function closeCarnet() {
  const drawer = document.getElementById('carnet-drawer');
  drawer.classList.add('translate-x-full');
}

// 8. MODAL DÉTAILS DESTINATION
let currentModalDestId = null;

function openModal(id) {
  const dest = destinations.find(d => d.id === id);
  if (!dest) return;
  currentModalDestId = id;

  document.getElementById('modal-img').src = dest.image;
  document.getElementById('modal-img').alt = dest.title;
  document.getElementById('modal-title').textContent = dest.title;
  document.getElementById('modal-region').textContent = dest.regionLabel;
  document.getElementById('modal-tagline').innerHTML = `<i data-lucide="sparkles" class="w-4 h-4"></i> ${dest.tagline}`;
  document.getElementById('modal-desc').textContent = dest.description;
  document.getElementById('modal-access').textContent = dest.access;
  document.getElementById('modal-season').textContent = dest.bestSeason;
  document.getElementById('modal-activities').textContent = dest.activities;

  const addBtn = document.getElementById('modal-add-carnet');
  const isSaved = carnet.some(i => i.id === id);
  addBtn.innerHTML = `
    <i data-lucide="${isSaved ? 'bookmark-check' : 'bookmark-plus'}" class="w-4 h-4"></i>
    <span>${isSaved ? 'Retirer de mon Carnet' : 'Ajouter à mon Carnet'}</span>
  `;

  document.getElementById('destination-modal').classList.remove('hidden');
  document.getElementById('destination-modal').classList.add('flex');
  lucide.createIcons();
}

function closeModal() {
  document.getElementById('destination-modal').classList.add('hidden');
  document.getElementById('destination-modal').classList.remove('flex');
}

function setupModals() {
  const modalClose = document.getElementById('modal-close');
  if (modalClose) modalClose.addEventListener('click', closeModal);

  const modal = document.getElementById('destination-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  const modalAddCarnet = document.getElementById('modal-add-carnet');
  if (modalAddCarnet) {
    modalAddCarnet.addEventListener('click', () => {
      if (currentModalDestId) {
        toggleCarnetItem(currentModalDestId);
        openModal(currentModalDestId); // Refresh modal button text
      }
    });
  }

  // Carnet Drawer openers
  document.getElementById('open-carnet-btn')?.addEventListener('click', openCarnet);
  document.getElementById('mobile-carnet-btn')?.addEventListener('click', openCarnet);
  document.getElementById('close-carnet-btn')?.addEventListener('click', closeCarnet);

  document.getElementById('clear-carnet')?.addEventListener('click', () => {
    carnet = [];
    localStorage.removeItem('guinee_carnet');
    updateCarnetUI();
    applyFilters();
    showToast('Votre carnet a été vidé.');
  });
}

// 9. CALCULATEUR DE BUDGET INTELLIGENT
function setupCalculator() {
  const daysSlider = document.getElementById('calc-days');
  const peopleSlider = document.getElementById('calc-people');
  const daysDisplay = document.getElementById('calc-days-display');
  const peopleDisplay = document.getElementById('calc-people-display');
  const guideCheckbox = document.getElementById('calc-guide');
  const carCheckbox = document.getElementById('calc-car');
  const styleBtns = document.querySelectorAll('.calc-style-btn');

  let currentMultiplier = 1;

  function recalculate() {
    const days = parseInt(daysSlider.value);
    const people = parseInt(peopleSlider.value);
    daysDisplay.textContent = `${days} jour${days > 1 ? 's' : ''}`;
    peopleDisplay.textContent = `${people} personne${people > 1 ? 's' : ''}`;

    // Base cost per day per person: 500,000 GNF for lodge & food
    const baseDailyCostPerPerson = 500000 * currentMultiplier;
    let accommodationTotal = baseDailyCostPerPerson * days * people;

    // Optional Guide: 350,000 GNF per day (shared)
    let guideTotal = guideCheckbox.checked ? (350000 * days) : 0;

    // Optional 4x4 car: 600,000 GNF per day (shared)
    let carTotal = carCheckbox.checked ? (600000 * days) : 0;

    const totalGNF = accommodationTotal + guideTotal + carTotal;
    const totalEUR = Math.round(totalGNF / 9400);
    const perPersonEUR = Math.round(totalEUR / people);

    document.getElementById('calc-total-gnf').textContent = `${formatNumber(totalGNF)} GNF`;
    document.getElementById('calc-total-eur').textContent = `soit environ ${formatNumber(totalEUR)} € pour le séjour`;
    document.getElementById('calc-per-person').textContent = `~${formatNumber(perPersonEUR)} € par personne`;

    // Details update
    document.getElementById('detail-transport').textContent = carCheckbox.checked ? '4x4 privé inclus' : 'Transports locaux non inclus';
  }

  daysSlider?.addEventListener('input', recalculate);
  peopleSlider?.addEventListener('input', recalculate);
  guideCheckbox?.addEventListener('change', recalculate);
  carCheckbox?.addEventListener('change', recalculate);

  styleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      styleBtns.forEach(b => {
        b.classList.remove('active', 'border-emerald-500', 'bg-emerald-900/40');
        b.classList.add('border-slate-700', 'bg-slate-800/60');
      });
      btn.classList.add('active', 'border-emerald-500', 'bg-emerald-900/40');
      btn.classList.remove('border-slate-700', 'bg-slate-800/60');
      currentMultiplier = parseFloat(btn.dataset.multiplier);
      recalculate();
    });
  });

  recalculate();
}

function selectCircuit(name, basePrice) {
  const formMsg = document.getElementById('form-message');
  if (formMsg) {
    formMsg.value = `Bonjour, je suis très intéressé(e) par le circuit : "${name}" (estimation indicative : ${formatNumber(basePrice)} GNF). Pouvez-vous me transmettre les dates de départ et les détails complets ?`;
  }
  document.getElementById('planifier').scrollIntoView({ behavior: 'smooth' });
  showToast(`Circuit "${name}" sélectionné ! Vous pouvez ajuster votre demande ci-dessous.`);
}

// 10. FAQ ACCORDION
function setupFAQ() {
  const toggles = document.querySelectorAll('.faq-toggle');
  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const content = toggle.nextElementSibling;
      const icon = toggle.querySelector('i');
      const isHidden = content.classList.contains('hidden');

      // Close all
      document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
      document.querySelectorAll('.faq-toggle i').forEach(i => i.classList.remove('rotate-180'));

      if (isHidden) {
        content.classList.remove('hidden');
        if (icon) icon.classList.add('rotate-180');
      }
    });
  });
}

// 11. CONTACT & DEVIS FORM
function setupContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('form-name').value;
    const email = document.getElementById('form-email').value;
    const region = document.getElementById('form-region').value;

    status.classList.remove('hidden', 'bg-red-100', 'text-red-800');
    status.classList.add('bg-emerald-100', 'text-brand-green');
    status.innerHTML = `
      <div class="flex items-center gap-2">
        <i data-lucide="check-circle" class="w-5 h-5"></i>
        <span>Merci <strong>${name}</strong> ! Votre demande d'itinéraire pour la région <strong>${region}</strong> a été enregistrée avec succès. Un conseiller voyage local vous contactera sous 24h à l'adresse <strong>${email}</strong>.</span>
      </div>
    `;
    lucide.createIcons();
    form.reset();
  });
}

// 12. MOBILE NAVIGATION
function setupMobileMenu() {
  const toggle = document.getElementById('mobile-toggle');
  const menu = document.getElementById('mobile-menu');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });

    links.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.add('hidden');
      });
    });
  }
}

// 13. UTILITIES
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.remove('translate-y-24', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-24', 'opacity-0');
  }, 3200);
}
