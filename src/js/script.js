// script.js に追加
document.addEventListener('DOMContentLoaded', () => {
  // 料金プランのボタンにイベントリスナーを設定
  const planButtons = document.querySelectorAll('.price-card .btn');
  const planSelect = document.querySelector('#plan-select');
  
  planButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        // プランの値を英語表記に変換
        const planCard = button.closest('.price-card');
        const planTitle = planCard.querySelector('h3').textContent;
        let planValue = '';
        
        switch(planTitle) {
            case 'ビギナープラン':
                planValue = 'beginner';
                break;
            case 'スタンダードプラン':
                planValue = 'standard';
                break;
            case 'プレミアムプラン':
                planValue = 'premium';
                break;
        }
        
        if (planSelect) {
            planSelect.value = planValue;
        }
          
        // コンタクトセクションまでスムーズスクロール
        const contactSection = document.querySelector('#contact');
        const headerHeight = 70; // ヘッダーの高さ
        const elementPosition = contactSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
      });
  });
});