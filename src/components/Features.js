import styles from "../components/styles/Features.module.css";

function Features() {
    return (
        <div className={`col-sm`}>
            <h2 className={`text-center ${styles.header}`}>
                Features
            </h2>

            <div className={`container`}>
    <div className={`row`}>
        <div className={`col mt-4 ${styles.features}`} style={{borderBottom: "1px solid #d3d3d3", borderTop: "1px solid #d3d3d3"}}>
            <h4 className={`mt-3`}>Decentralization</h4>
            <p>Earnscribe is able to provide a more secure, transparent, and accessible platform for writers and hiring managers via blockchain</p>
        </div>
    </div>
</div>
<div className={`container`}>
    <div className={`row`}>
        <div className={`col mt-4 ${styles.features}`} style={{borderBottom: "1px solid #d3d3d3"}}>
            <h4>Smart Contract Payments</h4>
            <p>Earnscribe uses smart contracts to facilitate payments between writers and hiring managers, providing a secure and automated payment process.</p>
        </div>
    </div>
</div>
<div className={`container`}>
    <div className={`row`}>
        <div className={`col mt-4 ${styles.features}`}>
            <h4>Community Support</h4>
            <p>Earnscribe has a strong community of writers and hiring managers who can provide support, advice, and feedback to help writers improve their skills and succeed on the platform.</p>
        </div>
    </div>
</div>

        </div>
    );
}

export default Features;