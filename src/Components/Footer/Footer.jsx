import './Footer.css'
import { SiQatarairways } from "react-icons/si";


const Footer = () => {
    return (
        <div>
            <div className='flex justify-between flex-wrap shadow-inner shadow-2xl'>

            <div className="md:flex flex-wrap gap-5">
                {/* list 1 */}
                <ul>
                    <li><h2>Product</h2></li>
                    <li>CGO009</li>
                    <li>AGO T</li>
                    <li>AGO X</li>
                    <li>CGO600 Pro</li>
                    <li>CGO800S</li>
                </ul>
                {/* list 2 */}
                <ul>
                    <li><h2>Community</h2></li>
                    <li>Blog</li>
                    <li>Reviews</li>
                    <li>Loyalty Program</li>
                    <li>Student Program</li>
                    <li>Affiliate Program</li>
                </ul>
                {/* list 3 */}
                <ul>
                    <li><h2>Service</h2></li>
                    <li>Insurance</li>
                    <li>Leasing</li>
                    <li>Customer Support</li>
                    <li>Service Center</li>
                    <li>Find A Store</li>
                </ul>
                {/* list 4 */}
                <ul>
                    <li><h2>Company</h2></li>
                    <li>About TENWAYS</li>
                    <li>Our Story</li>
                    <li>Sustainability</li>
                    <li>Impressum</li>
                    <li>TENWAYS For Business</li>
                </ul>


            </div>

            <div className='foooterLogo font-bold text-[10rem] p-5 duration-700'>
            <SiQatarairways />

            </div>
            </div>
        </div>
    );
};

export default Footer;