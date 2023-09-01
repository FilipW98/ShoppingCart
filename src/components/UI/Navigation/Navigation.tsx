import style from './Navigation.module.scss';
import hangerImage from '../../../assets/img/clothes-hanger.png';
import { FaShoppingBag } from 'react-icons/fa';
import { FaScrewdriverWrench } from 'react-icons/fa6';
import { FaBars } from 'react-icons/fa6';
import { Items } from '../../../App';
import { ErrorInfo } from "../../../App";

interface NavigationProps {
	cartHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
	itemsInCart: Items[];
	setMobileNav: (isMobileNav: boolean) => void;
	setError: (errorText: ErrorInfo) => void;
	setPopup: (isPopup: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ cartHandler, itemsInCart, setMobileNav, setError, setPopup }) => {
	return (
		<div className={style.navbar__container}>
			<FaBars
				onClick={() => {
					setMobileNav(true);
				}}
				className={style.burgerBtn}
				size={35}
			/>
			<div className={style.navbar__categories}>
				<button
					onClick={() => {
						setPopup(true);
						setError({
							text: "This feature is unavaliable."
						})
					}}>
					Clothes
				</button>
				<button className={style.active}>Shoes</button>
				<button
					onClick={() => {
						setPopup(true);
						setError({
							text: "This feature is unavaliable."
						})
					}}>
					Accessories
				</button>
			</div>
			<div className={style['logo-box']}>
				<img className={style.logo} src={hangerImage} alt='hanger' />
				<h2>FashionStore</h2>
			</div>

			<div className={style['icons-box']}>
				<button className={style['shopping-cart-btn']} onClick={cartHandler}>
					<FaShoppingBag className={style.icon} size={25} />
					<div className={style.counter}>
						<p>{itemsInCart.length}</p>
					</div>
				</button>
				<button
					className={style['shopping-cart-btn']}
					onClick={() => {
						setPopup(true);
						setError({
							text: "This feature is unavaliable."
						})
					}}>
					<FaScrewdriverWrench className={style.icon} size={25} />
				</button>
			</div>
		</div>
	);
};

export default Navigation;
