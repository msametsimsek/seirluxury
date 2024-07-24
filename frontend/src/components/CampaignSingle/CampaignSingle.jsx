import "./CampaignSingle.css"

const CampaignSingle = () => {
  return (
    <section className="campaign-single">
    <div className="container">
      <div className="campaign-wrapper">
        <h2>Yeni Sezon, Yeni Fırsatlar!</h2>
        <strong>Kaçırılmayacak Sezon İndirimleri!</strong>
        <span></span>
        <a href="/shop" className="btn btn-lg">
          Hemen Al
          <i className="bi bi-arrow-right"></i>
        </a>
      </div>
    </div>
  </section>
  )
}

export default CampaignSingle