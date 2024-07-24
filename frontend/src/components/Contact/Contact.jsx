import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-top">
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.706652105105!2d34.96717668595888!3d40.5480696791151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40872bffb3d5f725%3A0x27428ccfb35a252e!2sLoginTech!5e0!3m2!1str!2str!4v1717935659956!5m2!1str!2str"
            width="100%"
            height="500"
            style={{
              border: "0",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="contact-bottom">
        <div className="container">
          <div className="contact-titles">
            <h4>Bizimle iletişime geçin</h4>
            <h2>İletişim</h2>
            <p>
              SEIR Parfüm olarak, müşteri memnuniyetine büyük önem veriyoruz.
              Ürünlerimiz hakkında merak ettiğiniz her türlü bilgi,
              siparişlerinizle ilgili sorular ya da geri bildirimleriniz için
              bizimle iletişime geçmekten çekinmeyin. Size en kısa sürede geri
              dönüş yapmaktan mutluluk duyacağız.
            </p>
          </div>
          <div className="contact-elements">
            <form className="contact-form">
              <div className="">
                <label>
                  İsminiz
                  <span>*</span>
                </label>
                <input type="text" required />
              </div>
              <div className="">
                <label>
                  Email Adresiniz
                  <span>*</span>
                </label>
                <input type="text" required />
              </div>
              <div className="">
                <label>
                  Konu
                  <span>*</span>
                </label>
                <input type="text" required />
              </div>
              <div className="">
                <label>
                  Mesajınız
                  <span>*</span>
                </label>
                <textarea
                  id="author"
                  name="author"
                  type="text"
                  defaultValue=""
                  size="30"
                  required=""
                ></textarea>
              </div>
              <button className="btn btn-sm form-button">Mesaj Gönder</button>
            </form>
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-texts">
                  <strong> Adres</strong>
                  <p className="contact-street">
                    Bahçelievler, Şenyurt 2. Sk. 25/A, 19100 Çorum Merkez/Çorum
                  </p>
                  <a href="tel:Phone: +1 1234 567 88">Telefon: +90 532 661 7524</a>
                  <a href="mailto:Email: contact@example.com">
                    Email: info@sseir.com
                  </a>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-texts">
                  <strong> Çalışma Saatleri</strong>
                  <p className="contact-date">Hafta içi : 08:00 - 20:00</p>
                  <p>Hafta sonu: Kapalı</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
