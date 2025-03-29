document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('medication-search');
    const medicationInfo = document.getElementById('medication-info');
    const medName = document.getElementById('med-name');
    const medNotif = document.getElementById('med-notif');
    const medLocation = document.getElementById('med-location');
    const medDesc = document.getElementById('med-desc');
    const medImg = document.getElementById('med-img');

    // Base de données de médicaments
    const medications = {
        'doliprane': {
            name: 'Doliprane 1000mg',
            notif: 'Médicament en vente libre',
            location: 'Disponible dans toutes les pharmacies et parapharmacies',
            desc: 'Paracétamol, antalgique et antipyrétique. Indiqué dans le traitement des douleurs et/ou de la fièvre.',
            img: 'image/doliprane.jpg'
        },
        'ibuprofene': {
            name: 'Ibuprofène 400mg',
            notif: 'Médicament sur ordonnance recommandée',
            location: 'Disponible en pharmacie sur présentation d\'une ordonnance',
            desc: 'Anti-inflammatoire non stéroïdien (AINS). Indiqué dans le traitement des douleurs, de la fièvre et des inflammations.',
            img: 'image/ibuprofene.jpg'
        },
        'amoxicilline': {
            name: 'Amoxicilline 500mg',
            notif: 'Médicament sur ordonnance obligatoire',
            location: 'Disponible en pharmacie sur présentation d\'une ordonnance médicale',
            desc: 'Antibiotique de la famille des pénicillines. Indiqué dans le traitement des infections bactériennes.',
            img: 'https://via.placeholder.com/300x200?text=Amoxicilline'
        },
        'smecta': {
            name: 'Smecta',
            notif: 'Médicament en vente libre',
            location: 'Disponible dans toutes les pharmacies et parapharmacies',
            desc: 'Antidiarrhéique. Indiqué dans le traitement symptomatique des diarrhées aiguës.',
            img: 'image/smecta.jpg'
        }
    };

    // Fonction de recherche
    searchBtn.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        
        if (searchTerm === '') {
            alert('Veuillez entrer un nom de médicament');
            return;
        }

        // Recherche dans la base de donnees
        let found = false;
        for (const med in medications) {
            if (med.includes(searchTerm) || medications[med].name.toLowerCase().includes(searchTerm)) {
                displayMedication(medications[med]);
                found = true;
                break;
            }
        }

        if (!found) {
            alert('Médicament non trouvé. Veuillez essayer un autre nom.');
            medicationInfo.classList.add('hidden');
        }
    });

    // Fonction pour afficher les informations du medicament
    function affMed(med) {
        medName.textContent = med.name;
        medNotif.textContent = med.notif;
        medLocation.textContent = med.location;
        medDesc.textContent = med.desc;
        medImg.src = med.img;
        medImg.alt = med.name;
        
        medicationInfo.classList.remove('hidden');
    }

    // Permettre la recherche avec la touche Entree
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });
});