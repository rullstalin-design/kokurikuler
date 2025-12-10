// script.js
document.addEventListener('DOMContentLoaded', () => {

    let chartInstance = null;

    // --- 0. DATA KABUPATEN/KOTA JAWA TIMUR (Lengkap 38 Daerah) ---
    // Jejak Karbon (CO2) Indikatif dalam Ton CO2e/kapita
    // Status: Rendah (<1.5), Sedang (1.5 - 2.8), Tinggi (>2.8)
    const cityData = {
        // KABUPATEN BARU DITAMBAHKAN
        "bangkalan": { "co2": 1.2, "populasi": 1000000, "status": "Rendah", "warna": "green", "action": "Fokus pada pengelolaan sampah pasar dan pelabuhan, serta lindungi mangrove pesisir." },
        "bojonegoro": { "co2": 1.9, "populasi": 1300000, "status": "Sedang", "warna": "yellow", "action": "Dorong pemanfaatan gas suar (flaring gas) di sektor minyak dan gas. Konservasi hutan jati." },
        "bondowoso": { "co2": 1.0, "populasi": 800000, "status": "Rendah", "warna": "green", "action": "Promosikan kopi organik dan ekowisata Ijen yang minim emisi. Konservasi air." },
        "jombang": { "co2": 1.4, "populasi": 1400000, "status": "Rendah", "warna": "green", "action": "Optimalkan irigasi sawah dan dorong penggunaan energi biomassa dari limbah tebu." },
        "lamongan": { "co2": 1.7, "populasi": 1200000, "status": "Sedang", "warna": "yellow", "action": "Kembangkan tambak ramah lingkungan dan terapkan teknologi penangkapan metana (CH4) dari peternakan." },
        "lumajang": { "co2": 1.1, "populasi": 1100000, "status": "Rendah", "warna": "green", "action": "Lindungi kawasan Semeru dari deforestasi dan kembangkan pertanian berkelanjutan." },
        "madiun kabupaten": { "co2": 1.0, "populasi": 760000, "status": "Rendah", "warna": "green", "action": "Fokus pada pelestarian sawah dan dorong penggunaan pupuk organik untuk pertanian." },
        "magetan": { "co2": 0.9, "populasi": 670000, "status": "Rendah", "warna": "green", "action": "Lindungi kawasan Sarangan dan kembangkan program reboisasi di lereng Lawu." },
        "nganjuk": { "co2": 1.3, "populasi": 1100000, "status": "Rendah", "warna": "green", "action": "Optimalkan irigasi dari Bendungan Semantok dan dorong efisiensi penggunaan air." },
        "ngawi": { "co2": 1.0, "populasi": 900000, "status": "Rendah", "warna": "green", "action": "Pertahankan lahan sawah sebagai penyerap karbon dan minimalisir penggunaan pupuk kimia." },
        "pamekasan": { "co2": 1.1, "populasi": 850000, "status": "Rendah", "warna": "green", "action": "Fokus pada konservasi lahan garam dan pengembangan energi terbarukan di sektor perikanan." },
        "sampang": { "co2": 1.2, "populasi": 980000, "status": "Rendah", "warna": "green", "action": "Kendalikan abrasi pantai dan dorong penggunaan kompor hemat energi di rumah tangga." },
        "situbondo": { "co2": 1.1, "populasi": 670000, "status": "Rendah", "warna": "green", "action": "Lindungi Taman Nasional Baluran dan dorong pariwisata berbasis alam yang bertanggung jawab." },
        "sumenep": { "co2": 1.0, "populasi": 1100000, "status": "Rendah", "warna": "green", "action": "Prioritaskan energi surya untuk pulau-pulau terpencil dan kelola limbah laut secara efektif." },
        // KOTA BARU DITAMBAHKAN
        "kota madiun": { "co2": 1.3, "populasi": 200000, "status": "Rendah", "warna": "green", "action": "Revitalisasi ruang terbuka hijau kota dan dorong penggunaan energi surya atap rumah." },
        
        // DATA LAMA YANG SUDAH ADA
        "banyuwangi": { "co2": 1.4, "populasi": 1700000, "status": "Rendah", "warna": "green", "action": "Kembangkan energi terbarukan di sektor perikanan dan pariwisata. Lindungi habitat Ijen." },
        "batu": { "co2": 1.0, "populasi": 210000, "status": "Rendah", "warna": "green", "action": "Terapkan sistem tiket online untuk mengurangi kertas dan kelola sampah wisatawan secara terpusat." },
        "blitar": { "co2": 1.1, "populasi": 140000, "status": "Rendah", "warna": "green", "action": "Kembangkan pertanian organik dan program reboisasi di lereng gunung Kelud." },
        "blitar kabupaten": { "co2": 1.0, "populasi": 1200000, "status": "Rendah", "warna": "green", "action": "Fokus pada pengelolaan ternak yang lebih ramah lingkungan untuk mengurangi emisi metana." },
        "gresik": { "co2": 3.3, "populasi": 1400000, "status": "Tinggi", "warna": "red", "action": "Kontrol emisi industri semen dan petrokimia. Dorong adopsi energi terbarukan di kawasan industri." },
        "jember": { "co2": 1.6, "populasi": 2500000, "status": "Sedang", "warna": "yellow", "action": "Fokus pada manajemen limbah kopi dan tembakau. Dorong penggunaan transportasi umum perkotaan." },
        "kediri": { "co2": 1.1, "populasi": 290000, "status": "Rendah", "warna": "green", "action": "Fokus pada konservasi air dan dorong konsumsi hasil pangan lokal untuk mengurangi jejak transportasi makanan." },
        "kediri kabupaten": { "co2": 0.9, "populasi": 1600000, "status": "Rendah", "warna": "green", "action": "Pertahankan lahan pertanian subur dan dorong irigasi hemat air." },
        // "madiun": (Diganti menjadi "kota madiun")
        "malang": { "co2": 1.2, "populasi": 850000, "status": "Rendah", "warna": "green", "action": "Lindungi area pertanian dan perkebunan dari ekspansi perumahan, serta tingkatkan program daur ulang." },
        "malang kabupaten": { "co2": 1.0, "populasi": 2500000, "status": "Rendah", "warna": "green", "action": "Fokus pada konservasi lahan pertanian, konservasi air, dan pengembangan ekowisata di kawasan pegunungan." },
        "mojokerto": { "co2": 1.8, "populasi": 140000, "status": "Sedang", "warna": "yellow", "action": "Perbaiki manajemen sampah kota dan dorong bersepeda sebagai moda transportasi utama." },
        "mojokerto kabupaten": { "co2": 1.6, "populasi": 1100000, "status": "Sedang", "warna": "yellow", "action": "Konservasi situs Trowulan dan lestarikan area sawah sebagai penyerap karbon." },
        "pacitan": { "co2": 1.0, "populasi": 580000, "status": "Rendah", "warna": "green", "action": "Prioritas pengembangan geotermal dan perlindungan kawasan karst dari eksploitasi." },
        "pasuruan": { "co2": 2.7, "populasi": 200000, "status": "Sedang", "warna": "yellow", "action": "Tingkatkan pengawasan emisi pabrik di PIER (Pasuruan Industrial Estate Renggali)." },
        "pasuruan kabupaten": { "co2": 2.5, "populasi": 1600000, "status": "Sedang", "warna": "yellow", "action": "Kendalikan polusi dari kawasan industri dan lindungi daerah pertanian." },
        "ponorogo": { "co2": 1.1, "populasi": 950000, "status": "Rendah", "warna": "green", "action": "Dorong penggunaan sepeda dan kendaraan non-motorized, serta konservasi waduk Ngebel." },
        "probolinggo": { "co2": 1.5, "populasi": 230000, "status": "Sedang", "warna": "yellow", "action": "Kendalikan abrasi pantai dan optimalkan pariwisata berbasis alam yang minim emisi (Bromo)." },
        "probolinggo kabupaten": { "co2": 1.3, "populasi": 1100000, "status": "Rendah", "warna": "green", "action": "Konservasi kawasan Bromo Tengger Semeru dan lindungi hutan dari kebakaran." },
        "sidoarjo": { "co2": 2.9, "populasi": 2000000, "status": "Tinggi", "warna": "red", "action": "Kendalikan emisi kendaraan berat dan optimalkan pengelolaan limbah pabrik. Fokus mitigasi lumpur." },
        "surabaya": { "co2": 3.5, "populasi": 2890000, "status": "Tinggi", "warna": "red", "action": "Modernisasi industri menuju energi bersih dan edukasi manajemen limbah rumah tangga." },
        "trenggalek": { "co2": 0.9, "populasi": 750000, "status": "Rendah", "warna": "green", "action": "Lindungi kawasan pesisir dan terapkan sistem pertanian terasering untuk mencegah erosi." },
        "tuban": { "co2": 3.1, "populasi": 1200000, "status": "Tinggi", "warna": "red", "action": "Terapkan filter ketat pada pabrik semen dan pastikan reklamasi lahan pasca-tambang." },
        "tulungagung": { "co2": 1.2, "populasi": 1000000, "status": "Rendah", "warna": "green", "action": "Fokus pada konservasi lahan basah Rawa Pening dan dorong efisiensi energi di UMKM." }
    };

    populateDatalist();

    function populateDatalist() {
        const dataList = document.getElementById('city-list');
        dataList.innerHTML = ''; 
        
        const sortedKeys = Object.keys(cityData).sort();
        
        sortedKeys.forEach(key => {
            const option = document.createElement('option');
            // Kapitalisasi setiap kata untuk tampilan
            const displayName = key.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            option.value = displayName;
            dataList.appendChild(option);
        });
    }

    // --- 1. Fungsionalitas Pencarian Glosarium ---
    const resultsContainer = document.getElementById('city-results');
    const searchInput = document.getElementById('city-search-input');
    const formatNumber = (num) => {
        if (num === undefined) return 'N/A';
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    window.searchCity = function() {
        const rawQuery = searchInput.value.toLowerCase().trim();
        // Normalisasi spasi dan menghapus awalan 'kota ' jika ada (untuk mencari 'kota kediri' dengan 'kediri')
        let query = rawQuery.replace(/\s+/g, ' '); 
        if (query.startsWith('kota ')) {
            query = query.substring(5).trim();
        }

        let cityKey = Object.keys(cityData).find(key => key === query);
        
        // Jika tidak ditemukan, coba cari yang memiliki awalan 'kota ' atau 'kabupaten'
        if (!cityKey) {
            cityKey = Object.keys(cityData).find(key => key.includes(query));
        }

        resultsContainer.innerHTML = '';
        
        if (cityKey) {
            const data = cityData[cityKey];
            const rootStyle = getComputedStyle(document.documentElement);
            const primaryColor = rootStyle.getPropertyValue(`--color-${data.warna}`).trim();
            const displayName = cityKey.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

            resultsContainer.innerHTML = `
                <div class="city-card" style="border-left-color: ${primaryColor};">
                    <h4><i class="fas fa-map-pin"></i> Data ${displayName}</h4>
                    
                    <div class="city-data-grid">
                        <div class="data-item">
                            <p><i class="fas fa-smog"></i> Jejak Karbon Indikatif</p>
                            <strong>${data.co2} Ton CO2e/kapita</strong>
                        </div>
                        <div class="data-item">
                            <p><i class="fas fa-chart-line"></i> Status Emisi Regional</p>
                            <strong style="color: ${primaryColor};"><span class="status-indicator ${data.warna}">${data.status.toUpperCase()}</span></strong>
                        </div>
                        <div class="data-item">
                            <p><i class="fas fa-users"></i> Populasi Indikatif</p>
                            <strong>${formatNumber(data.populasi)} Jiwa</strong>
                        </div>
                    </div>

                    <div class="city-action-block">
                        <i class="fas fa-hands-helping"></i> **Rekomendasi Aksi Nyata:** ${data.action}
                    </div>
                </div>
            `;
        } else {
            resultsContainer.innerHTML = `
                <p class="placeholder-text" style="color: var(--color-red);">
                    <i class="fas fa-exclamation-triangle"></i> Data wilayah **"${searchInput.value}"** tidak ditemukan. Cek ejaan dan pastikan nama kota/kabupaten berada di Jawa Timur.
                </p>
            `;
        }
    };

    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchCity();
        }
    });

    // --- 2. Fungsionalitas Kalkulator Jejak Karbon & Diagram ---
    const form = document.getElementById('carbon-calculator');
    const chartCtx = document.getElementById('carbonChart').getContext('2d');
    const totalCarbonDisplay = document.getElementById('total-carbon-display');
    const pohonDisplay = document.getElementById('pohon-display');
    const statusDisplay = document.getElementById('status-display');
    const statusBlock = document.querySelector('.result-status-block');
    const initialPrompt = document.getElementById('result-output'); 
    const actionRecommendationDiv = document.getElementById('action-recommendation');

    // Koefisien Emisi (indikatif)
    const COEF_LISTRIK = 0.6;       // kg CO2e per kWh 
    const COEF_TRANSPORTASI = 0.2; // kg CO2e per km 
    const COEF_DAGING = 4.05;      // kg CO2e per porsi daging merah (estimasi)
    
    // Konstanta untuk perhitungan pohon 
    const CO2_ABSORPTION_PER_POHON_TAHUN = 240; // 20 kg/bulan * 12 bulan

    // Fungsi untuk memberikan rekomendasi aksi nyata
    const getRecommendation = (carbonListrik, carbonTransportasi, carbonDaging) => {
        const categories = [
            { name: 'Listrik', value: carbonListrik, action: 'Matikan lampu saat tidak digunakan, ganti ke lampu LED hemat energi, dan cabut charger setelah dipakai.' },
            { name: 'Transportasi', value: carbonTransportasi, action: 'Prioritaskan berjalan kaki, bersepeda, atau gunakan transportasi umum. Jika harus berkendara, pertimbangkan *carpooling*.' },
            { name: 'Daging', value: carbonDaging, action: 'Coba kurangi konsumsi daging merah minimal 1-2 kali seminggu, ganti dengan ayam, ikan, atau protein nabati (tahu/tempe).' }
        ];

        categories.sort((a, b) => b.value - a.value);
        
        let generalAdvice = '';
        if (categories[0].value > 50) { 
            generalAdvice = `**Area Prioritas Anda:** ${categories[0].name}. ${categories[0].action}`;
        } else {
            generalAdvice = 'Jejak Anda sudah cukup baik. Pertahankan! Fokus pada daur ulang sampah dan menanam pohon di lingkungan sekitar.';
        }

        return `<i class="fas fa-lightbulb"></i> **Aksi Prioritas:** ${generalAdvice}`;
    };


    const updateChart = (listrik, transportasi, daging) => {
        const data = [listrik, transportasi, daging];
        const labels = ['Energi Rumah (Listrik)', 'Transportasi Pribadi', 'Konsumsi Daging'];
        
        if (chartInstance) {
            chartInstance.destroy();
        }

        const rootStyle = getComputedStyle(document.documentElement);
        const primaryColor = rootStyle.getPropertyValue('--color-primary').trim();
        const secondaryColor = rootStyle.getPropertyValue('--color-secondary').trim();
        const accentColor = rootStyle.getPropertyValue('--color-accent').trim();
        const textColor = getComputedStyle(document.body).getPropertyValue('--color-text');
        
        chartInstance = new Chart(chartCtx, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: [primaryColor, secondaryColor, accentColor],
                    hoverOffset: 15,
                    spacing: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: textColor,
                            font: { size: 14 }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.label || '';
                                if (label) { label += ': '; }
                                if (context.parsed !== null) { label += context.parsed.toFixed(2) + ' Kg CO2e'; }
                                return label;
                            }
                        }
                    }
                }
            }
        });
    };

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const listrik = parseFloat(document.getElementById('listrik').value) || 0;
        const transportasi = parseFloat(document.getElementById('transportasi').value) || 0;
        const daging = parseFloat(document.getElementById('daging').value) || 0;

        const carbonListrik = listrik * COEF_LISTRIK;
        const carbonTransportasi = transportasi * COEF_TRANSPORTASI; 
        const carbonDaging = daging * COEF_DAGING; 
        
        const totalCarbonKg = carbonListrik + carbonTransportasi + carbonDaging;
        const totalCarbonTon = totalCarbonKg / 1000; 
        
        // Perhitungan jumlah pohon (Emisi tahunan / Daya serap pohon per tahun)
        const annualEmissionKg = totalCarbonKg * 12;
        const requiredPohon = Math.ceil(annualEmissionKg / CO2_ABSORPTION_PER_POHON_TAHUN);
        
        updateChart(carbonListrik, carbonTransportasi, carbonDaging);

        // Tampilkan hasil dan sembunyikan prompt awal
        initialPrompt.style.display = 'none';
        statusBlock.style.display = 'block';

        totalCarbonDisplay.innerHTML = `<i class="fas fa-smog"></i> Total Jejak Bulanan: **${totalCarbonTon.toFixed(3)} Ton CO2e**`;
        
        pohonDisplay.innerHTML = `<i class="fas fa-leaf"></i> Untuk menetralkan emisi tahunan, Anda perlu menanam sekitar **${requiredPohon} pohon** (estimasi).`;
        
        let statusText = "";
        let color = "";
        
        if (totalCarbonTon > 0.40) { 
            statusText = "Sangat Tinggi. Tindakan drastis diperlukan di semua sektor!";
            color = getComputedStyle(document.documentElement).getPropertyValue('--color-red');
        } else if (totalCarbonTon > 0.15) { 
            statusText = "Sedang. Fokus pada sektor dengan emisi terbesar (lihat diagram).";
            color = getComputedStyle(document.documentElement).getPropertyValue('--color-yellow');
        } else {
            statusText = "Rendah. Jejak Anda sangat baik, pertahankan!";
            color = getComputedStyle(document.documentElement).getPropertyValue('--color-green');
        }
        
        statusDisplay.innerHTML = `Status: ${statusText}`;
        statusDisplay.style.color = color;
        
        // Tampilkan rekomendasi
        actionRecommendationDiv.innerHTML = getRecommendation(carbonListrik, carbonTransportasi, carbonDaging);
    });


    // --- 3. Fungsi Toggle Mode Gelap ---
    const modeToggle = document.getElementById('mode-toggle');
    const body = document.body;
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
    
    if (isDarkMode) {
        body.classList.add('dark-mode');
        modeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        modeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }

    modeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            modeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            modeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
        
        // Update chart colors on theme change
        if (chartInstance) {
            const listrik = parseFloat(document.getElementById('listrik').value) || 0;
            const transportasi = parseFloat(document.getElementById('transportasi').value) || 0;
            const daging = parseFloat(document.getElementById('daging').value) || 0;
            
            const carbonListrik = listrik * COEF_LISTRIK;
            const carbonTransportasi = transportasi * COEF_TRANSPORTASI; 
            const carbonDaging = daging * COEF_DAGING; 

            updateChart(carbonListrik, carbonTransportasi, carbonDaging);
        }
    });

    // --- 4. Fungsi Toggle Menu Mobile ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });

    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                mainNav.classList.remove('active');
            }
        });
    });
});
