import styles from "./styles/ComingSoon.module.css";
import Frame3 from "../assets/Frame3.png";



function ComingSoon() {
    return (
        <div className={`container text-right`}>
            <div className={`row`}>
                <div className={`col px-3`}>
                    <h2 className={styles.header}>
                        Get Paid To Write On Our Decentralized Platform
                    </h2>
                    <p className={styles.description}>
                    At Earnscribe, we believe that everyone has a story to tell and unique knowledge to share. That's why we've created a platform where writers from all backgrounds and skill levels can get paid to write and publish content on a decentralized network.
                    </p>
                    <form className={styles.form}>
                        <labels className={styles.labels}>
                            Join the waitlist to get notified when we launch
                        </labels>
                        <input type="email" name="email" placeholder="Enter Your Email" className={`py-2 ${styles.input} `} /><br></br>
                        <input type="button" value="Join" className={styles.button} />
                    </form>
                </div>
                <div className={`col-md-6 col-lg-6 mt-4 px-3 text-center`}>
                    <img src={Frame3} alt="design" style={{maxWidth: "100%"}} />
                </div>
            </div>
        </div>
    )
}

export default ComingSoon;