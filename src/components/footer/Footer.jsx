import styles from "./footer.module.scss";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.brand}>
                    <h2>MissSomali</h2>
                    <p>Celebrating Somali elegance, talent, and heritage. A platform for the youth to showcase their brilliance.</p>
                </div>

                <div className={styles.links}>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">About the Pageant</a></li>
                        <li><a href="#">How to Vote</a></li>
                        <li><a href="#">FAQ & Support</a></li>
                    </ul>
                </div>

                <div className={styles.social}>
                    <h3>Connect With Us</h3>
                    <div className={styles.icons}>
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaTwitter /></a>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <p>&copy; {new Date().getFullYear()} KarimSabir. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
