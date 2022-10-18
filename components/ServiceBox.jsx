import { servicesData } from "../assets/servicesData"
import styles from '../styles/serviceBox.module.css'


const ServiceBox = () => {
    return (
        <div className={styles.service_container}>
            {servicesData.map(service => (
                <div className={styles.service_box} key={service.id}>
                    <div className={styles.icon}>
                        <img src={service.logo} alt="Logo" />
                    </div>
                    <h3>{service.title}</h3>
                    <p>&#47;&#47; {service.desc}</p>
                </div>
            ))}
        </div>
    )
}

export default ServiceBox