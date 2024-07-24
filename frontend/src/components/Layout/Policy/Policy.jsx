import "./Policy.css";

const Policy = () => {
  return (
    <section className="policy">
      <div className="container">
        <ul className="policy-list">
          <li className="policy-item">
            <i className="bi bi-truck"></i>
            <div className="policy-texts">
              <strong>ÜCRETSİZ TESLİMAT</strong>
              <span>1000₺ ve üzeri alışverişlerde</span>
            </div>
          </li>
          <li className="policy-item">
            <i className="bi bi-headset"></i>
            <div className="policy-texts">
              <strong>KESİNTİSİZ DESTEK </strong>
              <span>Dilediğiniz zaman bizimle iletişime geçebilirsiniz</span>
            </div>
          </li>
          <li className="policy-item">
            <i className="bi bi-arrow-clockwise"></i>
            <div className="policy-texts">
              <strong> GÜVENLİ PAKETLEME</strong>
              <span>Siparilerinizi özenle paketliyoruz</span>
            </div>
          </li>
          <li className="policy-item">
            <i className="bi bi-credit-card"></i>
            <div className="policy-texts">
              <strong> GÜVENLİ ÖDEME</strong>
              <span>Ödemeleriniz güvencemiz altındadır</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Policy;