import Navigation from './components/Navigation';
import RootNavigation from './navigation/RootNavigation';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
    <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
        <link rel="apple-touch-icon" sizes="180x180" href="assets/img/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="assets/img/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="assets/img/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="assets/img/favicon/site.webmanifest"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="reset.css"/>
        <link rel="stylesheet" href="style.css"/>
        <link rel="stylesheet" type="text/css" href="shopfront-embed-style.css"/>

        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Project P</title>
    </Helmet>
    
      <Navigation></Navigation>
      <RootNavigation></RootNavigation>
    </>
  );
}

export default App;
