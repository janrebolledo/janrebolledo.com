import Instagram from "../public/Social-Icons/Instagram.png"
import Twitter from "../public/Social-Icons/Twitter.png"
import Twitch from "../public/Social-Icons/Twitch.png"
import Link from "next/link";

export default function Footer() {
    return(
        <>
        <footer>
            <div className="footer-list">
                <a href="https://instagram.com/janconcepts" className="footer-social-link"><img alt="Social Media Logo" className="footer-social-logo" src={Instagram.src} /></a>
                <a href="https://twitter.com/janconcepts" className="footer-social-link"><img alt="Social Media Logo" className="footer-social-logo" src={Twitter.src} /></a>
                <a href="https://twitch.tv/janrebolledo" className="footer-social-link"><img alt="Social Media Logo" className="footer-social-logo" src={Twitch.src} /></a>
            </div>
            <div className="footer-list">
                <Link href="/"><a className="footer-social-link underline">Home</a></Link>
                <Link href="/projects" ><a className="footer-social-link underline">Projects</a></Link>
                <Link href="/contact"><a className="footer-social-link underline">Contact</a></Link>
            </div>
            <p>Copyright © 2021 <Link href="/"><a className="underline link">Jan Rebolledo</a></Link>. Digital Experience by <Link href="/"><a className="underline link">Jan Rebolledo</a></Link>.</p>
        </footer>
        </>
    );
}