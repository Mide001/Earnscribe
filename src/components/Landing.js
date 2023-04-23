import styles from "./styles/Landing.module.css";
import Write from "../assets/write-to-earn.png";

function Landing() {
    return (
    <div className={`col-sm`}>
        <h2 className={`text-center ${styles.header}`}>
            What Is Earnscribe
        </h2>

        <div className="container">
            <div className="row">
                <div className="col-sm-6 mt-4">
                    <p className={`p1 ${styles.earnscribeContent}`}>EarnScribe is a groundbreaking decentralized platform that empowers writers to earn income through their passion for writing. This innovative platform is built on the blockchain, providing a secure, transparent, and trustless ecosystem that enables writers to showcase their skills and get paid for their work.</p>
                    <p className={`mt-4 p2 ${styles.earnscribeContent}`}>What sets EarnScribe apart from traditional writing platforms is its ability to leverage blockchain technology to create an immutable ledger of all transactions. This ensures that writers and clients can trust the payment and work agreement process. In addition, EarnScribe allows writers to receive payment in cryptocurrency or fiat, giving them more options and flexibility for their earnings.</p>
                    <p className={`mt-4 p3 ${styles.earnscribeContent}`}>EarnScribe's platform also features a unique ratings and review system, which helps clients to evaluate the quality of work delivered by writers. This system provides accountability and transparency, enabling clients to make informed decisions when selecting writers for their projects.</p>
                </div>
                <div className="col-sm-6">
                    <img src={Write} alt="Write to earn" className={`img-fluid`}></img>
                </div>
            </div>
        </div>


    </div>
    )
}

export default Landing;
