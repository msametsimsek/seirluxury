import React from "react";
import { Link } from "react-router-dom";
import Policy from "../Policy/Policy";
import "./Footer.css";

const Footer = () => {
  return (
    <React.Fragment>
      <Policy />
      <footer className="footer">
        <div className="subscribe-row">
          <div className="container">
            <div className="footer-row-wrapper">
              <div className="footer-subscribe-wrapper">
                <div className="footer-subscribe">
                  <div className="footer-subscribe-top">
                    <h3 className="subscribe-title">
                      Yeni gelenler, özel teklifler ve diğer indirim bilgileri
                      hakkında bilgi almak için E-Seir Bültenine kayıt olun !
                    </h3>
                    <p className="subscribe-desc">
                      Söz veriyoruz spam göndermeyeceğiz.
                    </p>
                  </div>
                  <div className="footer-subscribe-bottom">
                    <form>
                      <input
                        type="text"
                        placeholder="Email adresinizi girin."
                      />
                      <button className="btn">Abone Ol</button>
                    </form>
                    <p className="privacy-text">
                      Abone olarak politikalarımızı kabul etmiş olursunuz.{" "}
                      <a href="#">
                        Şartlar & Koşullar ve Gizlilik & Çerez Politikası.
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="footer-contact-wrapper">
                <div className="footer-contact-top">
                  <h3 className="contact-title">
                    İletişim Numaramız <br />
                    (+90) 536 549 7347
                  </h3>
                  <p className="contact-desc">
                    Saat 08:00 - 20:00 aralığında açığız.
                  </p>
                </div>
                <div className="footer-contact-bottom">
                  {/* <div className="download-app">
                    <a href="#">
                      <img src="/img/footer/app-store.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="/img/footer/google-play.png" alt="" />
                    </a>
                  </div> */}
                  <p className="privacy-text">
                    <strong>Ödeme Sistemi:</strong> Ödeme sistemi entegrasyonu
                    eklenene kadar siparişleriniz WhatsApp üzerinden
                    gerçekleştirilecektir. Anlayışınız için teşekkür ederiz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="widgets-row">
          <div className="container">
            <div className="footer-widgets">
              <div className="brand-info">
                <div className="footer-logo">
                  <Link to="/" className="logo">
                    <img
                      src="/seir_logo.png"
                      alt="SEIR Logo"
                      className="logo-img"
                    />
                  </Link>
                </div>
                <div className="footer-desc">
                  <p>
                    SEIR Parfüm olarak, size en kaliteli ve benzersiz parfüm
                    deneyimini sunmayı amaçlıyoruz. Ürünlerimiz ve hizmetlerimiz
                    hakkında daha fazla bilgi almak için bizimle iletişime
                    geçin. Sosyal medya hesaplarımızı takip ederek en yeni
                    ürünlerimiz ve özel kampanyalarımız hakkında bilgi sahibi
                    olabilirsiniz.
                  </p>
                </div>
                <div className="footer-contact">
                  <p>
                    <a href="tel:555 555 55 55">(+90) 536 549 7347</a> –{" "}
                    <a href="mailto:info@sseir.com">info@sseir.com</a>
                  </p>
                </div>
              </div>
              <div className="widget-nav-menu">
                <h4>Bilgilendirme</h4>
                <ul className="menu-list">
                  <li>
                    <a href="#">Hakkımızda</a>
                  </li>
                  <li>
                    <a href="#">Ödeme</a>
                  </li>
                  <li>
                    <a href="#">İletişim</a>
                  </li>
                  <li>
                    <a href="#">Gizlilik Politikaları</a>
                  </li>
                  <li>
                    <a href="#">Kullanım Şartları</a>
                  </li>
                </ul>
              </div>
              <div className="widget-nav-menu">
                <h4>Alışveriş</h4>
                <ul className="menu-list">
                  <li>
                    <a href="#">Profil</a>
                  </li>
                  <li>
                    <a href="#">Sepetim</a>
                  </li>
                  <li>
                    <a href="#">Beğendiklerim</a>
                  </li>
                  <li>
                    <a href="#">Kupon</a>
                  </li>
                  <li>
                    <a href="#">Kargolama</a>
                  </li>
                </ul>
              </div>
              <div className="widget-nav-menu">
                <h4>Sosyal Medya</h4>
                <ul className="menu-list">
                  <li>
                    <a href="#">Instagram</a>
                  </li>
                  <li>
                    <a href="#">X (Twitter)</a>
                  </li>
                  <li>
                    <a href="#">YouTube</a>
                  </li>
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                  <li>
                    <a href="#">WhatsApp</a>
                  </li>
                </ul>
              </div>
              <div className="widget-nav-menu">
                <h4>Kategoriler</h4>
                <ul className="menu-list">
                  <li>
                    <a href="#">Kadın</a>
                  </li>
                  <li>
                    <a href="#">Erkek</a>
                  </li>
                  <li>
                    <a href="#">Unisex</a>
                  </li>
                  <li>
                    <a href="#">Premier</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-row">
          <div className="container">
            <div className="footer-copyright">
              <div className="site-copyright">
                <p>
                  Copyright 2024 © E-Commerce Theme. All right reserved. Powered
                  by Logintech.
                </p>
              </div>
              <a href="#">
                <img src="/img/footer/cards.png" alt="" />
              </a>
              <div className="footer-menu">
                <ul className="footer-menu-list">
                  <li className="list-item">
                    <a href="#">Şart Politikaları</a>
                  </li>
                  <li className="list-item">
                    <a href="#">Koşullar ve Gizlilik</a>
                  </li>
                  <li className="list-item">
                    <a href="#">Çerez Politikaları</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
