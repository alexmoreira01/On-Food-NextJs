import Image from "next/image";
import { DisheDetails } from "..";
import Styles from "./dishe.module.css";

export function Dishe(){
    return (
        
        <div className={Styles.dishe}>
            <div className={Styles.wrapper}>
                <Image 
                src="https://storage.googleapis.com/onfood/peperoni.jpg" 
                alt="Prato" 
                width={592} 
                height={312}
                layout="responsive" 
                />
            </div>

            <div className={Styles.header}>
                <h2>Pizza Peperoni</h2>
            </div>
            <div className={Styles.details}>
                {/* Detalhes dos produtos */}
                <DisheDetails type="reviews" title="(201)" subtitle="4.5" />
                <DisheDetails type="category" title="Pizza" />
                <DisheDetails type="delivery" title="30 - 40 min" />

            </div>
        </div>
    )
}

export function Dishe2(){
    return (
        <div className={Styles.dishe}>
            <div className={Styles.wrapper}>
                <Image 
                src="https://storage.googleapis.com/onfood/burguer.jpg" 
                alt="Prato" 
                width={592} 
                height={312}
                layout="responsive" 
                />
            </div>

            <div className={Styles.header}>
                <h2>Chefs Burguer</h2>
            </div>
            <div className={Styles.details}>
                {/* Detalhes dos produtos */}
                <DisheDetails type="reviews" title="(434)" subtitle="4.8" />
                <DisheDetails type="category" title="Burguer" />
                <DisheDetails type="delivery" title="25 - 35m" />

            </div>
        </div>
    )
}

export function Dishe3(){
    return (
        <div className={Styles.dishe}>
            <div className={Styles.wrapper}>
                <Image 
                src="https://storage.googleapis.com/onfood/chicken.jpg" 
                alt="Prato" 
                width={592} 
                height={312}
                layout="responsive" 
                />
            </div>

            <div className={Styles.header}>
                <h2>Chicken s e Cia</h2>
            </div>
            <div className={Styles.details}>
                {/* Detalhes dos produtos */}
                <DisheDetails type="reviews" title="(32)" subtitle="5" />
                <DisheDetails type="category" title="Torta" />
                <DisheDetails type="delivery" title="35 - 45m" />

            </div>
        </div>
    )
}

export function Dishe4(){
    return (
        <div className={Styles.dishe}>
            <div className={Styles.wrapper}>
                <Image 
                src="https://storage.googleapis.com/onfood/lasagna.jpg" 
                alt="Prato" 
                width={592} 
                height={312}
                layout="responsive" 
                />
            </div>

            <div className={Styles.header}>
                <h2>Nono Italian</h2>
            </div>
            <div className={Styles.details}>
                {/* Detalhes dos produtos */}
                <DisheDetails type="reviews" title="(154)" subtitle="4.8" />
                <DisheDetails type="category" title="Italian" />
                <DisheDetails type="delivery" title="30 - 50m" />

            </div>
        </div>
    )
}

export function Dishe5(){
    return (
        <div className={Styles.dishe}>
            <div className={Styles.wrapper}>
                <Image 
                src="https://storage.googleapis.com/onfood/guacamole.jpg" 
                alt="Prato" 
                width={592} 
                height={312}
                layout="responsive" 
                />
            </div>

            <div className={Styles.header}>
                <h2>Cocina Mex</h2>
            </div>
            <div className={Styles.details}>
                {/* Detalhes dos produtos */}
                <DisheDetails type="reviews" title="(326)" subtitle="4.7" />
                <DisheDetails type="category" title="Mexicana" />
                <DisheDetails type="delivery" title="30 - 45m" />

            </div>
        </div>
    )
}

export function Dishe6(){
    return (
        <div className={Styles.dishe}>
            <div className={Styles.wrapper}>
                <Image 
                src="https://storage.googleapis.com/onfood/sandwich.jpg" 
                alt="Prato" 
                width={592} 
                height={312}
                layout="responsive" 
                />
            </div>

            <div className={Styles.header}>
                <h2>John s Fast</h2>
            </div>
            <div className={Styles.details}>
                {/* Detalhes dos produtos */}
                <DisheDetails type="reviews" title="(326)" subtitle="4.5" />
                <DisheDetails type="category" title="Delivery" />
                <DisheDetails type="delivery" title="30 - 45m" />

            </div>
        </div>
    )
}

