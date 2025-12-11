document.addEventListener('DOMContentLoaded', () => {
    
    // ------------------------------------------
    // 1. Data Glosarium Karbon Pulau Jawa
    // ------------------------------------------

    const cityData = [
        // Format: [Nama Kota, Provinsi, Jejak Karbon (Ton CO2e/kapita/tahun), Rekomendasi Aksi]
        // Banten
        ["Lebak", "Banten", 1.8, "Fokus pada pengelolaan sampah organik (kompos) dan dukung pertanian lokal."],
        ["Pandeglang", "Banten", 1.7, "Manfaatkan energi terbarukan skala rumah tangga dan kurangi penggunaan plastik sekali pakai."],
        ["Serang (Kabupaten)", "Banten", 2.2, "Pertimbangkan menggunakan transportasi publik/sepeda untuk jarak pendek dan tingkatkan efisiensi listrik."],
        ["Tangerang (Kabupaten)", "Banten", 2.5, "Kurangi frekuensi perjalanan pribadi yang panjang dan dukung program penghijauan di wilayah industri."],
        ["Cilegon", "Banten", 2.8, "Lakukan audit energi di rumah, dan kurangi konsumsi produk dari industri padat energi."],
        ["Serang (Kota)", "Banten", 2.4, "Tingkatkan penggunaan kendaraan yang efisien bahan bakar atau beralih ke kendaraan listrik/hybrid."],
        ["Tangerang (Kota)", "Banten", 2.6, "Aktif dalam kampanye pengurangan limbah makanan dan optimalkan penggunaan transportasi massal."],
        ["Tangerang Selatan", "Banten", 2.7, "Cari sumber energi bersih, dan fokus pada gaya hidup minimalis untuk mengurangi emisi konsumsi."],

        // DKI Jakarta
        ["Kepulauan Seribu", "DKI Jakarta", 1.5, "Lindungi ekosistem laut dan mangrove, serta gunakan air dan listrik seefisien mungkin."],
        ["Jakarta Pusat", "DKI Jakarta", 3.2, "Beralih sepenuhnya ke transportasi umum atau sepeda, dan kurangi pemakaian AC."],
        ["Jakarta Utara", "DKI Jakarta", 3.0, "Dukung program konservasi pesisir dan pastikan sampah terpilah untuk didaur ulang."],
        ["Jakarta Barat", "DKI Jakarta", 3.1, "Optimalkan pencahayaan alami di kantor/rumah dan pertimbangkan opsi *carpooling*."],
        ["Jakarta Timur", "DKI Jakarta", 2.9, "Kurangi konsumsi daging merah dan maksimalkan daur ulang limbah rumah tangga."],
        ["Jakarta Selatan", "DKI Jakarta", 3.3, "Dukung inisiatif bangunan hijau dan prioritaskan pembelian produk lokal untuk mengurangi emisi rantai pasok."],

        // Jawa Barat
        ["Bandung (Kabupaten)", "Jawa Barat", 2.1, "Tingkatkan efisiensi pemanas air, dan dukung inisiatif pertanian berkelanjutan."],
        ["Bandung Barat", "Jawa Barat", 2.0, "Fokus pada penanaman pohon di area terbuka dan kurangi penggunaan pupuk kimia."],
        ["Bekasi (Kabupaten)", "Jawa Barat", 2.5, "Tingkatkan *carpooling* atau gunakan layanan *ride-sharing* untuk mengurangi kemacetan dan emisi."],
        ["Bogor (Kabupaten)", "Jawa Barat", 2.3, "Lindungi kawasan hutan dan sumber air, serta gunakan transportasi yang lebih ramah lingkungan."],
        ["Ciamis", "Jawa Barat", 1.7, "Fokus pada sistem irigasi hemat air dan dukung produksi makanan lokal."],
        ["Cianjur", "Jawa Barat", 1.8, "Terapkan praktik pertanian regeneratif dan kelola sisa makanan menjadi kompos."],
        ["Cirebon (Kabupaten)", "Jawa Barat", 2.2, "Optimalkan penggunaan pendingin udara dan pastikan alat elektronik hemat energi."],
        ["Garut", "Jawa Barat", 1.6, "Jaga kelestarian alam dan kurangi jejak karbon dari perjalanan wisata."],
        ["Indramayu", "Jawa Barat", 2.1, "Dukung transisi energi ke sumber yang lebih bersih di tingkat daerah."],
        ["Karawang", "Jawa Barat", 2.4, "Kurangi limbah pabrik/industri dan dorong inovasi hijau di sektor manufaktur."],
        ["Kuningan", "Jawa Barat", 1.6, "Fokus pada pelestarian hutan dan dukung produk hasil bumi lokal."],
        ["Majalengka", "Jawa Barat", 1.9, "Tingkatkan program daur ulang dan kurangi pembelian barang sekali pakai."],
        ["Pangandaran", "Jawa Barat", 1.5, "Perhatikan jejak karbon dari pariwisata; pilih akomodasi ramah lingkungan."],
        ["Purwakarta", "Jawa Barat", 2.0, "Investasikan pada peralatan rumah tangga yang hemat listrik dan air."],
        ["Subang", "Jawa Barat", 1.9, "Dukung upaya penanganan sampah TPA dan kurangi pemakaian kendaraan pribadi."],
        ["Sukabumi (Kabupaten)", "Jawa Barat", 1.8, "Mulai tanam pohon di pekarangan dan lakukan penghematan air secara serius."],
        ["Sumedang", "Jawa Barat", 1.7, "Dukung pembangunan infrastruktur yang rendah emisi."],
        ["Tasikmalaya (Kabupaten)", "Jawa Barat", 1.6, "Fokus pada pembelian produk yang diproduksi secara etis dan berkelanjutan."],
        ["Bandung (Kota)", "Jawa Barat", 2.8, "Maksimalkan penggunaan transportasi umum dan bersepeda untuk mengurangi kemacetan."],
        ["Banjar", "Jawa Barat", 1.7, "Dukung program pemerintah dalam pengelolaan hutan kota."],
        ["Bekasi (Kota)", "Jawa Barat", 2.9, "Kurangi konsumsi listrik dan air, serta tingkatkan *urban farming*."],
        ["Bogor (Kota)", "Jawa Barat", 2.7, "Jaga area hijau kota dan kurangi limbah makanan rumah tangga."],
        ["Cimahi", "Jawa Barat", 2.6, "Terapkan pemilahan sampah ketat dan hindari membeli pakaian *fast fashion*."],
        ["Cirebon (Kota)", "Jawa Barat", 2.5, "Hemat energi AC/pendingin ruangan dan dukung pasar tradisional."],
        ["Depok", "Jawa Barat", 2.7, "Gunakan mode transportasi non-motor dan minimalkan penggunaan generator."],
        ["Sukabumi (Kota)", "Jawa Barat", 2.0, "Fokus pada konservasi energi dan kurangi konsumsi daging."],
        ["Tasikmalaya (Kota)", "Jawa Barat", 2.1, "Dukung energi terbarukan lokal dan tingkatkan kesadaran iklim komunitas."],

        // Jawa Tengah
        ["Cilacap", "Jawa Tengah", 2.3, "Dukung transisi dari energi fosil dan kelola limbah minyak jelantah."],
        ["Banyumas", "Jawa Tengah", 1.9, "Fokus pada transportasi umum dan beralih ke sepeda motor listrik."],
        ["Purbalingga", "Jawa Tengah", 1.8, "Pertahankan tutupan hijau dan dukung produk kerajinan ramah lingkungan."],
        ["Banjarnegara", "Jawa Tengah", 1.7, "Terapkan metode pertanian yang rendah emisi gas rumah kaca."],
        ["Kebumen", "Jawa Tengah", 1.6, "Lindungi lahan gambut dan kawasan pesisir."],
        ["Purworejo", "Jawa Tengah", 1.7, "Optimalkan penggunaan air dan dukung kampanye hemat energi."],
        ["Wonosobo", "Jawa Tengah", 1.5, "Jaga kelestarian kawasan pegunungan dan kurangi limbah plastik."],
        ["Magelang (Kabupaten)", "Jawa Tengah", 1.8, "Tingkatkan efisiensi transportasi umum dan wisata yang bertanggung jawab."],
        ["Boyolali", "Jawa Tengah", 2.0, "Fokus pada pengurangan emisi dari sektor peternakan dan gunakan pupuk organik."],
        ["Klaten", "Jawa Tengah", 1.9, "Dukung industri rumahan yang ramah lingkungan dan hemat energi."],
        ["Sukoharjo", "Jawa Tengah", 2.1, "Minimalkan penggunaan kendaraan pribadi dan dukung program 3R."],
        ["Wonogiri", "Jawa Tengah", 1.6, "Konservasi sumber daya alam dan air secara ketat."],
        ["Karanganyar", "Jawa Tengah", 1.7, "Lakukan penanaman pohon di lahan kritis."],
        ["Sragen", "Jawa Tengah", 1.8, "Dukung produk pertanian organik dan kurangi sisa panen."],
        ["Grobogan", "Jawa Tengah", 1.9, "Manfaatkan biogas untuk energi rumah tangga jika memungkinkan."],
        ["Blora", "Jawa Tengah", 1.7, "Fokus pada rehabilitasi lahan dan konservasi air."],
        ["Rembang", "Jawa Tengah", 2.0, "Dukung nelayan yang menggunakan metode penangkapan ikan berkelanjutan."],
        ["Pati", "Jawa Tengah", 1.9, "Tingkatkan kesadaran masyarakat tentang perubahan iklim."],
        ["Kudus", "Jawa Tengah", 2.2, "Beralih ke lampu LED dan cabut *charger* saat tidak digunakan."],
        ["Jepara", "Jawa Tengah", 2.1, "Dukung industri mebel yang mengelola limbah kayu dengan baik."],
        ["Demak", "Jawa Tengah", 1.8, "Lindungi kawasan pesisir dari abrasi dan naiknya permukaan air laut."],
        ["Semarang (Kabupaten)", "Jawa Tengah", 2.1, "Optimalkan pemilahan sampah dan kurangi limbah domestik."],
        ["Temanggung", "Jawa Tengah", 1.6, "Dukung pertanian kopi dan tembakau yang berkelanjutan."],
        ["Kendal", "Jawa Tengah", 2.0, "Fokus pada gaya hidup minim sampah dan daur ulang."],
        ["Batang", "Jawa Tengah", 2.2, "Dukung pembangunan energi terbarukan skala besar."],
        ["Pekalongan (Kabupaten)", "Jawa Tengah", 1.9, "Dukung industri batik yang menggunakan pewarna alami dan proses bersih."],
        ["Pemalang", "Jawa Tengah", 1.8, "Tingkatkan efisiensi air di rumah tangga dan pertanian."],
        ["Tegal (Kabupaten)", "Jawa Tengah", 1.9, "Kurangi konsumsi produk kemasan dan makanan instan."],
        ["Brebes", "Jawa Tengah", 1.7, "Dukung pertanian bawang merah yang efisien dan minim limbah."],
        ["Magelang (Kota)", "Jawa Tengah", 2.4, "Gunakan transportasi publik dan bersepada untuk aktivitas sehari-hari."],
        ["Surakarta", "Jawa Tengah", 2.6, "Dukung program bus listrik kota dan konservasi energi di bangunan bersejarah."],
        ["Salatiga", "Jawa Tengah", 2.3, "Kota hijau: fokus pada penanaman pohon dan pengurangan sampah organik."],
        ["Semarang (Kota)", "Jawa Tengah", 2.7, "Tingkatkan penggunaan transportasi umum dan kurangi perjalanan darat antar kota."],
        ["Pekalongan (Kota)", "Jawa Tengah", 2.5, "Fokus pada industri tekstil berkelanjutan dan pengurangan emisi transportasi."],
        ["Tegal (Kota)", "Jawa Tengah", 2.4, "Minimalkan limbah dan dukung inisiatif komunitas sadar iklim."],

        // DI Yogyakarta
        ["Sleman", "DI Yogyakarta", 2.5, "Tingkatkan daur ulang sampah dan kurangi penggunaan air tanah."],
        ["Bantul", "DI Yogyakarta", 2.3, "Dukung pertanian organik dan konservasi lahan pertanian."],
        ["Gunungkidul", "DI Yogyakarta", 1.7, "Fokus pada konservasi air dan energi di kawasan kering."],
        ["Kulon Progo", "DI Yogyakarta", 1.8, "Dukung pengembangan bandara dan pariwisata yang rendah emisi."],
        ["Yogyakarta", "DI Yogyakarta", 2.7, "Gunakan transportasi non-motor, dukung gerakan *zero waste*."],

        // Jawa Timur
        ["Pacitan", "Jawa Timur", 1.6, "Jaga kawasan karst dan dukung pariwisata ekologis."],
        ["Ponorogo", "Jawa Timur", 1.7, "Fokus pada pertanian yang ramah lingkungan dan hemat energi."],
        ["Trenggalek", "Jawa Timur", 1.6, "Konservasi hutan dan kurangi emisi dari sektor perikanan."],
        ["Tulungagung", "Jawa Timur", 1.8, "Tingkatkan daur ulang limbah dan kurangi konsumsi plastik."],
        ["Blitar (Kabupaten)", "Jawa Timur", 1.7, "Dukung sektor peternakan yang mengelola limbah dengan baik."],
        ["Kediri (Kabupaten)", "Jawa Timur", 1.9, "Beralih ke energi bersih dan optimalkan transportasi lokal."],
        ["Malang (Kabupaten)", "Jawa Timur", 2.0, "Jaga kawasan pegunungan dan kurangi emisi dari sektor pertanian."],
        ["Lumajang", "Jawa Timur", 1.7, "Lindungi kawasan Bromo-Tengger-Semeru dan dukung konservasi alam."],
        ["Jember", "Jawa Timur", 1.9, "Fokus pada produk perkebunan yang berkelanjutan (misal: kopi)."],
        ["Banyuwangi", "Jawa Timur", 1.8, "Dukung pariwisata hijau dan pengelolaan sampah yang modern."],
        ["Bondowoso", "Jawa Timur", 1.6, "Tingkatkan efisiensi air dan energi di rumah tangga."],
        ["Situbondo", "Jawa Timur", 1.7, "Dukung program konservasi terumbu karang dan ekosistem laut."],
        ["Probolinggo (Kabupaten)", "Jawa Timur", 1.9, "Gunakan transportasi umum atau sepeda untuk mengurangi emisi."],
        ["Pasuruan (Kabupaten)", "Jawa Timur", 2.1, "Dukung industri yang menerapkan teknologi rendah karbon."],
        ["Sidoarjo", "Jawa Timur", 2.3, "Fokus pada pengelolaan limbah lumpur dan pengurangan emisi transportasi."],
        ["Mojokerto (Kabupaten)", "Jawa Timur", 2.0, "Tingkatkan penghijauan kota dan kurangi limbah elektronik."],
        ["Jombang", "Jawa Timur", 1.8, "Dukung penggunaan biogas dari limbah pertanian."],
        ["Nganjuk", "Jawa Timur", 1.7, "Konservasi sumber daya air dan cegah kebakaran lahan."],
        ["Madiun (Kabupaten)", "Jawa Timur", 1.8, "Dukung pertanian organik dan kurangi pestisida."],
        ["Magetan", "Jawa Timur", 1.6, "Jaga kawasan Telaga Sarangan dan fokus pada pariwisata rendah karbon."],
        ["Ngawi", "Jawa Timur", 1.7, "Dukung pembangunan infrastruktur hijau."],
        ["Bojonegoro", "Jawa Timur", 1.9, "Kurangi ketergantungan pada energi fosil."],
        ["Tuban", "Jawa Timur", 2.2, "Dukung industri semen yang menggunakan teknologi rendah emisi."],
        ["Lamongan", "Jawa Timur", 1.8, "Fokus pada efisiensi air dan listrik di rumah tangga."],
        ["Gresik", "Jawa Timur", 2.4, "Terapkan pemilahan sampah dan kurangi limbah industri."],
        ["Bangkalan", "Jawa Timur", 1.8, "Dukung konservasi pantai dan hutan bakau."],
        ["Sampang", "Jawa Timur", 1.7, "Tingkatkan kesadaran akan pentingnya lingkungan."],
        ["Pamekasan", "Jawa Timur", 1.6, "Fokus pada produk lokal dan kurangi emisi transportasi."],
        ["Sumenep", "Jawa Timur", 1.5, "Dukung pariwisata bahari dan lindungi pulau-pulau kecil."],
        ["Kediri (Kota)", "Jawa Timur", 2.4, "Gunakan transportasi umum dan beralih ke sumber energi bersih."],
        ["Blitar (Kota)", "Jawa Timur", 2.2, "Fokus pada pengelolaan sampah organik dan kompos."],
        ["Malang (Kota)", "Jawa Timur", 2.6, "Kurangi penggunaan kendaraan pribadi, manfaatkan angkutan kota."],
        ["Probolinggo (Kota)", "Jawa Timur", 2.3, "Dukung energi terbarukan dan program hijau di sekolah."],
        ["Pasuruan (Kota)", "Jawa Timur", 2.5, "Tingkatkan efisiensi energi di kantor dan rumah."],
        ["Mojokerto (Kota)", "Jawa Timur", 2.3, "Lakukan gerakan penanaman pohon dan daur ulang aktif."],
        ["Madiun (Kota)", "Jawa Timur", 2.4, "Dukung program jalan kaki dan bersepeda."],
        ["Surabaya", "Jawa Timur", 2.8, "Tingkatkan penggunaan transportasi umum dan *urban farming*."],
        ["Batu", "Jawa Timur", 2.0, "Jaga kelestarian alam dan kurangi emisi dari pariwisata."]
    ];

    // ------------------------------------------
    // 2. Logika Glosarium Karbon dengan Indikator 3 Warna
    // ------------------------------------------

    const citySearchInput = document.getElementById('city-search-input');
    const cityResultsDiv = document.getElementById('city-results');
    const datalist = document.getElementById('city-list');

    // Mengisi Datalist untuk Autocomplete
    const fillDatalist = () => {
        cityData.forEach(([city]) => {
            const option = document.createElement('option');
            option.value = city;
            datalist.appendChild(option);
        });
    };

    // Fungsi untuk mendapatkan status warna berdasarkan nilai karbon
    const getCarbonStatus = (carbonFootprint) => {
        if (carbonFootprint < 2.0) {
            return {
                color: '#10b981',
                text: 'Rendah - Aksi Lingkungan yang Kuat',
                class: 'status-low',
                badgeClass: 'badge-low'
            };
        } else if (carbonFootprint < 2.5) {
            return {
                color: '#f59e0b',
                text: 'Sedang - Perlu Peningkatan',
                class: 'status-medium',
                badgeClass: 'badge-medium'
            };
        } else {
            return {
                color: '#ef4444',
                text: 'Tinggi - Prioritas Mitigasi',
                class: 'status-high',
                badgeClass: 'badge-high'
            };
        }
    };

    const searchCity = () => {
        const query = citySearchInput.value.trim().toLowerCase();
        
        // Hanya tampilkan hasil jika query tidak kosong
        if (query === "") {
            cityResultsDiv.innerHTML = '<p class="placeholder-text"><i class="fas fa-hand-point-up"></i> Ketik nama wilayah (misal: Surabaya) untuk melihat profil karbon regional.</p>';
            return;
        }

        const foundCity = cityData.find(([city]) => city.toLowerCase() === query);

        if (foundCity) {
            displayCityResult(foundCity);
        } else {
            // Jika tidak ditemukan, tampilkan pesan error
            cityResultsDiv.innerHTML = `<div class="card city-error-block">
                <h4><i class="fas fa-exclamation-triangle"></i> Data Tidak Ditemukan</h4>
                <p>Kabupaten/Kota <strong>"${query}"</strong> tidak ditemukan dalam Glosarium Pulau Jawa. Pastikan penulisan sudah benar.</p>
                </div>`;
        }
    };

    const displayCityResult = ([city, province, carbonFootprint, recommendation]) => {
        const status = getCarbonStatus(carbonFootprint);

        cityResultsDiv.innerHTML = `
            <div class="card city-result-card">
                <h4 style="color: var(--color-primary);">${city}, ${province}</h4>
                <div class="grid-2" style="gap: 20px;">
                    <div>
                        <p><strong><i class="fas fa-smog"></i> Jejak Karbon Indikatif:</strong></p>
                        <p class="total-display" style="color: ${status.color};">${carbonFootprint.toFixed(1)} Ton CO2e/Kapita/Tahun</p>
                        <div class="carbon-status-indicator ${status.class}" style="margin: 15px 0;">
                            <div>Status Regional:</div>
                            <div style="font-weight: 800; color: ${status.color}">${status.text}</div>
                        </div>
                        <div style="margin-top: 15px;">
                            <span class="status-badge ${status.badgeClass}">
                                <i class="fas fa-chart-line"></i> Level ${carbonFootprint < 2.0 ? 'Rendah' : carbonFootprint < 2.5 ? 'Sedang' : 'Tinggi'}
                            </span>
                        </div>
                    </div>
                    <div>
                        <p><strong><i class="fas fa-lightbulb"></i> Rekomendasi Aksi Lokal:</strong></p>
                        <div class="city-action-block">
                            <p>${recommendation}</p>
                        </div>
                        <div style="margin-top: 20px; padding: 15px; background: linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%); border-radius: 10px;">
                            <p style="font-size: 0.9rem; color: var(--color-text-light); margin: 0;">
                                <i class="fas fa-info-circle"></i> Tips: Aksi individu berkontribusi pada penurunan jejak karbon regional.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    };
    
    // Pemicu pencarian saat tombol diklik
    document.querySelector('.search-box button').addEventListener('click', searchCity);
    
    // Pemicu pencarian saat menekan Enter di input
    citySearchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            searchCity();
        }
    });

    // Pemicu pencarian saat input kehilangan fokus (blur) jika ada data yang dipilih dari datalist
    citySearchInput.addEventListener('change', searchCity);


    // ------------------------------------------
    // 3. Logika Kalkulator Karbon dengan Indikator 3 Warna
    // ------------------------------------------

    const calculatorForm = document.getElementById('carbon-calculator');
    const totalCarbonDisplay = document.getElementById('total-carbon-display');
    const pohonDisplay = document.getElementById('pohon-display');
    const statusIndicator = document.getElementById('carbon-status-indicator');
    const actionRecommendation = document.getElementById('action-recommendation');
    const resultOutput = document.getElementById('result-output');
    const resultStatusBlock = document.querySelector('.result-status-block');

    let carbonChart;

    const CARBON_FACTORS = {
        listrik: 0.6, 
        transportasi: 0.2, 
        daging: 4.05, 
        air: 0.5,
        sampah: 0.4 
    };
    
    const POHON_PER_KG_TAHUN = 1 / (21 * 12); 

    // Fungsi untuk mendapatkan status kalkulator berdasarkan total emisi
    const getCalculatorStatus = (totalEmisi) => {
        if (totalEmisi < 150) {
            return {
                text: 'Rendah - Sangat Baik!',
                class: 'status-low',
                color: '#10b981',
                recommendation: 'Anda adalah warga negara yang sadar iklim. Terus pertahankan gaya hidup rendah karbon Anda!'
            };
        } else if (totalEmisi < 300) {
            return {
                text: 'Sedang - Perlu Peningkatan',
                class: 'status-medium',
                color: '#f59e0b',
                recommendation: 'Emisi Anda moderat. Coba fokus pada 3R (Reduce, Reuse, Recycle) dan kurangi frekuensi makan daging merah.'
            };
        } else {
            return {
                text: 'Tinggi - Segera Lakukan Aksi!',
                class: 'status-high',
                color: '#ef4444',
                recommendation: 'Emisi Anda cukup tinggi. Pertimbangkan menggunakan transportasi umum, kurangi konsumsi daging, dan kelola sampah dengan bijak.'
            };
        }
    };

    const calculateCarbon = (event) => {
        event.preventDefault();

        const listrik = parseFloat(document.getElementById('listrik').value) || 0;
        const transportasi = parseFloat(document.getElementById('transportasi').value) || 0;
        const daging = parseFloat(document.getElementById('daging').value) || 0;
        const air = parseFloat(document.getElementById('air').value) || 0; 
        const sampah = parseFloat(document.getElementById('sampah').value) || 0; 

        const emisiListrik = listrik * CARBON_FACTORS.listrik;
        const emisiTransportasi = transportasi * CARBON_FACTORS.transportasi;
        const emisiDaging = daging * CARBON_FACTORS.daging;
        const emisiAir = air * CARBON_FACTORS.air; 
        const emisiSampah = sampah * CARBON_FACTORS.sampah; 

        const totalEmisi = emisiListrik + emisiTransportasi + emisiDaging + emisiAir + emisiSampah;

        totalCarbonDisplay.innerHTML = `<i class="fas fa-smog"></i> Total Emisi Anda Bulan Ini: <strong>${totalEmisi.toFixed(2)} Kg CO2e</strong>`;
        
        const treesNeeded = (totalEmisi * 12 * POHON_PER_KG_TAHUN).toFixed(1);
        pohonDisplay.textContent = `Ini setara dengan emisi ${treesNeeded} pohon dewasa per tahun.`;
        
        // Dapatkan status berdasarkan total emisi
        const status = getCalculatorStatus(totalEmisi);

        // Update indikator status dengan 3 warna
        statusIndicator.className = `carbon-status-indicator ${status.class}`;
        statusIndicator.innerHTML = `
            <div>Status Jejak Karbon Anda:</div>
            <div style="font-weight: 800; color: ${status.color}">${status.text}</div>
        `;

        actionRecommendation.innerHTML = `
            <p><strong><i class="fas fa-lightbulb"></i> Saran Aksi:</strong></p>
            <p>${status.recommendation}</p>
            <div style="margin-top: 15px; padding: 10px; background: linear-gradient(135deg, ${status.color}10 0%, ${status.color}20 100%); border-radius: 8px;">
                <p style="font-size: 0.9rem; margin: 0; color: ${status.color};">
                    <i class="fas fa-tips"></i> <strong>Tips Cepat:</strong> ${getQuickTip(status.class)}
                </p>
            </div>
        `;
        
        resultOutput.style.display = 'none';
        resultStatusBlock.style.display = 'block';

        updateChart(emisiListrik, emisiTransportasi, emisiDaging, emisiAir, emisiSampah);
    };

    // Fungsi untuk mendapatkan tips cepat berdasarkan status
    const getQuickTip = (statusClass) => {
        switch(statusClass) {
            case 'status-low':
                return 'Pertahankan! Coba tambahkan tanaman indoor untuk kualitas udara lebih baik.';
            case 'status-medium':
                return 'Coba naikkan suhu AC 1-2°C dan gunakan transportasi umum 2x seminggu.';
            case 'status-high':
                return 'Mulai dengan mengurangi konsumsi daging merah menjadi 1-2x seminggu.';
            default:
                return 'Mulai dengan mematikan lampu dan peralatan listrik saat tidak digunakan.';
        }
    };

    const updateChart = (emisiListrik, emisiTransportasi, emisiDaging, emisiAir, emisiSampah) => {
        const data = {
            labels: ['Listrik', 'Transportasi', 'Daging Merah', 'Air', 'Sampah'],
            datasets: [{
                data: [emisiListrik, emisiTransportasi, emisiDaging, emisiAir, emisiSampah],
                backgroundColor: [
                    '#3498db', 
                    '#f39c12', 
                    '#e74c3c', 
                    '#2980b9', 
                    '#7f8c8d'  
                ],
                hoverOffset: 4
            }]
        };

        if (carbonChart) {
            carbonChart.data = data;
            
            const textColor = getComputedStyle(document.body).getPropertyValue('--color-text');
            carbonChart.options.plugins.legend.labels.color = textColor;
            carbonChart.options.plugins.title.color = textColor;

            carbonChart.update();
        } else {
            const ctx = document.getElementById('carbonChart').getContext('2d');
            const textColor = getComputedStyle(document.body).getPropertyValue('--color-text');

            carbonChart = new Chart(ctx, {
                type: 'doughnut',
                data: data,
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                            labels: {
                                color: textColor
                            }
                        },
                        title: {
                            display: true,
                            text: 'Porsi Emisi Anda',
                            color: textColor
                        }
                    }
                }
            });
        }
    };

    calculatorForm.addEventListener('submit', calculateCarbon);


    // ------------------------------------------
    // 4. Logika Quiz Hunter
    // ------------------------------------------

    const quizQuestions = [
        {
            question: "Apa singkatan dari gas rumah kaca yang paling banyak dihasilkan dari pembakaran bahan bakar fosil?",
            options: ["CH4", "N2O", "CO2", "H2O"],
            answer: "CO2"
        },
        {
            question: "Berapa banyak pohon dewasa yang dibutuhkan rata-rata untuk menyerap 1 ton CO2 per tahun?",
            options: ["±25 Pohon", "±50 Pohon", "±10 Pohon", "±5 Pohon"],
            answer: "±50 Pohon"
        },
        {
            question: "Sektor apa yang menjadi penyumbang emisi karbon terbesar kedua di Indonesia setelah energi?",
            options: ["Transportasi", "Pertanian", "LULUCF (Penggunaan Lahan & Kehutanan)", "Industri"],
            answer: "LULUCF (Penggunaan Lahan & Kehutanan)"
        },
        {
            question: "Apa metode pengurangan jejak karbon yang paling efektif dalam kategori makanan?",
            options: ["Makan lebih banyak buah impor", "Mengurangi konsumsi daging merah", "Membeli makanan kemasan", "Memasak dengan gas"],
            answer: "Mengurangi konsumsi daging merah"
        },
        {
            question: "Koefisien emisi 0.6 Kg CO2e/kWh biasanya diasosiasikan dengan apa dalam kalkulator jejak karbon?",
            options: ["Jarak tempuh mobil", "Konsumsi air PDAM", "Konsumsi listrik PLN", "Pembuangan sampah"],
            answer: "Konsumsi listrik PLN"
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;
    let quizActive = false;
    
    const startScreen = document.getElementById('quiz-start-screen');
    const questionScreen = document.getElementById('quiz-question-screen');
    const resultScreen = document.getElementById('quiz-result-screen');
    const startBtn = document.getElementById('start-quiz-btn');
    const restartBtn = document.getElementById('restart-quiz-btn');
    const questionText = document.getElementById('question-text');
    const questionNumber = document.getElementById('question-number');
    const answerOptionsDiv = document.getElementById('answer-options');
    const feedbackText = document.getElementById('feedback-text');
    const totalScoreDisplay = document.querySelector('.total-score-display');
    const resultMessage = document.getElementById('result-message');


    const displayQuestion = () => {
        if (currentQuestionIndex < quizQuestions.length) {
            const q = quizQuestions[currentQuestionIndex];
            
            questionNumber.textContent = `Soal ${currentQuestionIndex + 1} dari ${quizQuestions.length}`;
            questionText.textContent = q.question;
            answerOptionsDiv.innerHTML = '';
            feedbackText.textContent = '';
            
            q.options.forEach(option => {
                const btn = document.createElement('button');
                btn.textContent = option;
                btn.classList.add('answer-btn');
                btn.addEventListener('click', () => checkAnswer(option, q.answer, btn));
                answerOptionsDiv.appendChild(btn);
            });
        } else {
            showResults();
        }
    };

    const checkAnswer = (selectedOption, correctAnswer, clickedButton) => {
        if (!quizActive) return; 

        quizActive = false; 
        Array.from(answerOptionsDiv.children).forEach(btn => btn.disabled = true);
        
        if (selectedOption === correctAnswer) {
            score++;
            clickedButton.classList.add('correct');
            feedbackText.textContent = "Jawaban Benar! Anda mendapatkan 1 poin.";
            feedbackText.style.color = '#10b981';
        } else {
            clickedButton.classList.add('wrong');
            const correctBtn = Array.from(answerOptionsDiv.children).find(btn => btn.textContent === correctAnswer);
            if(correctBtn) {
                 correctBtn.classList.add('correct');
            }
            feedbackText.textContent = `Jawaban Salah. Jawaban yang benar adalah: ${correctAnswer}.`;
            feedbackText.style.color = '#ef4444';
        }

        setTimeout(() => {
            currentQuestionIndex++;
            quizActive = true; 
            displayQuestion();
        }, 1500); 
    };
    
    const showResults = () => {
        questionScreen.style.display = 'none';
        resultScreen.style.display = 'block';
        
        totalScoreDisplay.textContent = `Skor Akhir Anda: ${score} / ${quizQuestions.length}`;

        // Tentukan warna hasil berdasarkan skor
        let resultColor;
        if (score === quizQuestions.length) {
            resultMessage.textContent = 'SEMPURNA! Anda adalah Hunter Karbon sejati!';
            resultColor = '#10b981';
        } else if (score >= quizQuestions.length / 2) {
            resultMessage.textContent = 'Bagus! Pengetahuan Anda di atas rata-rata. Terus belajar dan beraksi!';
            resultColor = '#f59e0b';
        } else {
            resultMessage.textContent = 'Perlu ditingkatkan. Mari tonton video edukasi di atas dan coba lagi!';
            resultColor = '#ef4444';
        }
        
        resultMessage.style.color = resultColor;
        resultMessage.style.fontWeight = '700';
    };

    const startQuiz = () => {
        currentQuestionIndex = 0;
        score = 0;
        quizActive = true;
        startScreen.style.display = 'none';
        resultScreen.style.display = 'none';
        questionScreen.style.display = 'block';
        displayQuestion();
    };

    startBtn.addEventListener('click', startQuiz);
    restartBtn.addEventListener('click', startQuiz);

    // Inisialisasi tampilan awal Quiz
    startScreen.style.display = 'block';
    questionScreen.style.display = 'none';
    resultScreen.style.display = 'none';


    // ------------------------------------------
    // 5. Logika Dark Mode dan Menu Mobile
    // ------------------------------------------
    const modeToggle = document.getElementById('mode-toggle');
    const icon = modeToggle.querySelector('i');

    const loadTheme = () => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        document.body.classList.toggle('dark-mode', isDarkMode);
        icon.classList.toggle('fa-sun', isDarkMode);
        icon.classList.toggle('fa-moon', !isDarkMode);
        
        if (carbonChart) {
            const textColor = getComputedStyle(document.body).getPropertyValue('--color-text');
            carbonChart.options.plugins.legend.labels.color = textColor;
            carbonChart.options.plugins.title.color = textColor;
            carbonChart.update();
        }
    };

    const toggleTheme = () => {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
        icon.classList.toggle('fa-sun', isDarkMode);
        icon.classList.toggle('fa-moon', !isDarkMode);

        if (carbonChart) {
            const textColor = getComputedStyle(document.body).getPropertyValue('--color-text');
            carbonChart.options.plugins.legend.labels.color = textColor;
            carbonChart.options.plugins.title.color = textColor;
            carbonChart.update();
        }
    };

    modeToggle.addEventListener('click', toggleTheme);

    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });

    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                mainNav.classList.remove('active');
            }
        });
    });

    // Fungsi untuk scroll halus ke section
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Inisialisasi Akhir ---
    loadTheme();
    fillDatalist();
    
    console.log('GloKarbon v9.0 telah dimuat dengan sukses!');
});
