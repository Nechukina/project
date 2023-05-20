import { Helmet } from 'react-helmet-async';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import LoginForm from '../../components/login-form/login-form';
import SvgPath from '../../components/svg-path/svg-path';

function LoginPage(): JSX.Element {
  return (
    <>
      <SvgPath />
      <div className="wrapper">
        <Helmet>
          <title>Авторизация - Escape Room</title>
        </Helmet>
        <Header />
        <main className="decorated-page login">
          <div className="decorated-page__decor" aria-hidden="true">
            <picture>
              <source type="image/webp" srcSet="/img/content/maniac/maniac-size-m.webp, img/content/maniac/maniac-size-m@2x.webp 2x"/><img src="/img/content/maniac/maniac-size-m.jpg" srcSet="img/content/maniac/maniac-size-m@2x.jpg 2x" width="1366" height="768" alt=""/>
            </picture>
          </div>
          <div className="container container--size-l">
            <div className="login__form">
              <LoginForm />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default LoginPage;
