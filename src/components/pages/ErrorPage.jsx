import styles from '../../styles/modules/errorPage.module.css';

import { BotonNav } from '../utils/BotonNav';

const ErrorPage = () => {
    return (
        <main className="fondo-1">
            <section className={styles.sectionContainer}>
                <header className={styles.sectionTitulo}>
                    <h1 className="bold-text">
                        Error 404 <br /> Página no encontrada
                    </h1>

                    <h2 className="light-text">Lo sentimos, la página que estás buscando no existe.</h2>
                </header>

                <section>
                    <BotonNav />
                </section>
            </section>
        </main>
    );
};

export default ErrorPage;
