document.addEventListener('DOMContentLoaded', function() {
    // الحصول على الماركة من URL
    const urlParams = new URLSearchParams(window.location.search);
    const brand = urlParams.get('brand');
    
    // بيانات الموديلات (يمكن استبدالها ببيانات حقيقية من قاعدة بيانات)
    const modelsData = {
        'and-rover': ['Range Rover', 'Discovery', 'Defender', 'Evoque'],
        'nissan': ['Sunny', 'Patrol', 'X-Trail', 'Qashqai'],
        'toyota': ['Model A', 'Model B', 'Model C']
    };
    
    // عناصر DOM
    const brandTitle = document.getElementById('brand-title');
    const modelsContainer = document.getElementById('models-container');
    
    // عرض الموديلات
    if (brand && modelsData[brand]) {
        // تعيين عنوان الصفحة
        brandTitle.textContent = `موديلات ${brand.toUpperCase().replace('-', ' ')}`;
        
        // إنشاء بطاقات الموديلات
        modelsData[brand].forEach(model => {
            const modelCard = document.createElement('div');
            modelCard.className = 'model-card';
            modelCard.innerHTML = `
                <img src="models/${brand}/${model.toLowerCase().replace(' ', '-')}.jpg" alt="${model}">
                <h3>${model}</h3>
                <a href="parts.html?brand=${brand}&model=${model.toLowerCase().replace(' ', '-')}" class="btn">View Parts</a>
            `;
            modelsContainer.appendChild(modelCard);
        });
    } else {
        brandTitle.textContent = 'Brand not found';
    }
});