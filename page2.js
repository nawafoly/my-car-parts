document.addEventListener('DOMContentLoaded', function() {
    // بيانات الموديلات (يمكن استبدالها ببيانات حقيقية من قاعدة بيانات)
    const modelsData = {
        'land-rover': ['Range Rover', 'Discovery', 'Defender', 'Evoque'],
        'nissan': ['Sunny', 'Patrol', 'X-Trail', 'Qashqai'],
        'toyota': ['Model A', 'Model B', 'Model C']
    };

    // عناصر DOM
    const brandSelect = document.getElementById('brand-select');
    const modelSelect = document.getElementById('model-select');
    const brandCards = document.querySelectorAll('.brand-card');
    const searchBtn = document.getElementById('search-btn');

    // تحديث قائمة الموديلات عند اختيار الماركة
    brandSelect.addEventListener('change', function() {
        const selectedBrand = this.value;
        modelSelect.innerHTML = '<option value="">MODEL</option>';
        
        if (selectedBrand && modelsData[selectedBrand]) {
            modelsData[selectedBrand].forEach(model => {
                const option = document.createElement('option');
                option.value = model.toLowerCase().replace(' ', '-');
                option.textContent = model;
                modelSelect.appendChild(option);
            });
        }
    });

    // عند النقر على بطاقة الماركة
    brandCards.forEach(card => {
        card.addEventListener('click', function() {
            const brand = this.getAttribute('data-brand');
            window.location.href = `models.html?brand=${brand}`;
        });
    });

    // عند النقر على زر البحث
    searchBtn.addEventListener('click', function() {
        const year = document.getElementById('year-select').value;
        const brand = brandSelect.value;
        const model = modelSelect.value;
        
        if (brand && model) {
            window.location.href = `parts.html?brand=${brand}&model=${model}&year=${year}`;
        } else {
            alert('Please select both brand and model');
        }
    });
});