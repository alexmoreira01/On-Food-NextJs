import Styles from "./footer.module.css"; // import como styles e dentro dele esta o footer
export function Footer() {
    return (
        <footer>
            <div className={Styles.footer}>
                <p>@ 2022 - Imersão FrontExpert</p>

            </div>
        </footer>
    );
}