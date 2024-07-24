import CampaignItem from "./CampaignItem";
import "./Campaigns.css";

const Campaigns = () => {
  return (
    <section className="campaigns">
      <div className="container">
        <div className="campaigns-wrapper">
          <CampaignItem
            title="Erkek Parfümler"
            description="Gücünü ve zarafetini hisset."
            imageUrl="../../img/campaigns/man.png"
          />
          <CampaignItem
            title="Kadın Parfümler"
            description="Efsanevi bir güzellik sırrı."
            imageUrl="../../img/campaigns/woman.png"
          />
        </div>
        <div className="campaigns-wrapper">
          <CampaignItem
            title="Unisex Parfümler"
            description="Cinsiyetten bağımsız bir başyapıt."
            imageUrl="../../img/campaigns/banner2.png"
            flexSize={5}
          />
          <CampaignItem
            title="Premier Parfümler"
            description="Eşsiz kalite ve sofistike zarafet"
            imageUrl="../../img/campaigns/banner1.png"
            flexSize={3}
          />
        </div>
      </div>
    </section>
  );
};

export default Campaigns;
