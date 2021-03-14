
import Person from "./coponents/Person/Person";
import PersonList from "./coponents/PersonList/PersonList";

function App() {
  const persons = [
    { name: "Elaman", github:"https://github.com/elaman", photo:"https://avatars.githubusercontent.com/u/1479020?s=460&v=4" ,  role: "Teacher", wpm: 10, commits: 100 },
    { name: "Choro", github:"", role: "Assistant", wpm: 78, commits: 10401 },
    { name: "Tynchtyk", github:"", role: "Teacher", wpm: 102, commits: 0 },
    { name: "Danila", io:"https://github.com/DanilBond/DanilBond.github.io",  github:"https://github.com/DanilBond", role: "Student", wpm: -5, commits: 1244 },
    { name: "Madina", io:"https://github.com/MadinaTadjidinova/MadinaTadjidinova.github.io",  github:"https://github.com/MadinaTadjidinova", photo:"https://avatars.githubusercontent.com/u/75364399?s=460&u=bc77810078d496e3dfe66f27906b01f5db7f208b&v=4" ,  role: "Student", wpm: 30, commits: 5000 },
    { name: "Tatyna", io:"https://github.com/KubatovaTatyna/KubatovaTatyna.github.io", github:"https://github.com/KubatovaTatyna", photo:"https://avatars.githubusercontent.com/u/75364411?s=460&u=b024420280528948f320ad191779a670439e54ec&v=4" ,  role: "Student", wpm: 27, commits: 572541 },
    { name: "Emirlan", io:"https://github.com/EmirlanDogdurbaev/EmirlanDogdurbaev.github.io", github:"https://github.com/EmirlanDogdurbaev", photo:"https://avatars.githubusercontent.com/u/75364762?s=460&u=1945ae5a1c13d5c73dd12e500b24e1965c06decc&v=4" ,  role: "Student", wpm: 20, commits: 56566 },
    { name: "Baytemir", io:"https://github.com/BaitemirAsanbaev/BaitemirAsanbaev.github.io", github:"https://github.com/BaitemirAsanbaev", photo:"https://avatars.githubusercontent.com/u/65547734?s=460&u=7fc2c86db4a7a0feaef6f973739812aa62546604&v=4", role: "Student", wpm: 35, commits: 556 },
    { name: "Yntymak", io:"https://github.com/YntyCtrl/YntyCtrl.github.io", github:"https://github.com/YntyCtrl", role: "Student", wpm: 40, commits: 55 },
    { name: "Tamara", io:"https://github.com/Aiylchieva-Tamara/Aiylchieva-Tamara.github.io", github:"https://github.com/Aiylchieva-Tamara", role: "Student", wpm: 32, commits: 999 },
    { name: "Nurkys", io:"https://github.com/Nurkyz-Chynybaeva/Nurkyz-Chynybaeva.github.io", github:"https://github.com/Nurkyz-Chynybaeva", photo:"https://avatars.githubusercontent.com/u/75364428?s=460&u=7598357a919d059b77d53b1b6fff021ba8d86522&v=4" , role: "Student", wpm: 39, commits: 26 },
    { name: "Kunduz", io:"https://github.com/Kunduz-Imanalieva/Kunduz-Imanalieva.github.io", github:"https://github.com/Kunduz-Imanalieva", photo:"https://avatars.githubusercontent.com/u/72619839?s=460&u=f76175f3d594fdca199795acdff22ed731fc7537&v=4" , role: "Student", wpm: 38, commits: 99 },
    { name: "Adis", io:"https://github.com/adis-omurov/adis-omurov.github.io", github:"https://github.com/adis-omurov", role: "Student", wpm: 39, commits: 56 },
    { name: "Islam", io:"https://github.com/islam-jumabekov/islam-jumabekov.github.io", github:"https://github.com/islam-jumabekov", role: "Student", wpm: 20, commits: 25 },
    { name: "Felix", io:"https://github.com/FelixMablletov/FelixMablletov.github.io", github:"https://github.com/FelixMablletov", role: "Student", wpm: 25, commits: 99 },
    { name: "Erjan", io:"https://github.com/Erjankydyrov/Erjankydyrov.github.io", github:"https://github.com/Erjankydyrov", photo:"https://avatars.githubusercontent.com/u/75364569?s=460&u=41423e83599f6073887a5c5bce317657a3e8cb0b&v=4" ,  role: "Student", wpm: 19, commits: 9959 },
    { name: "Ermek", io:"https://github.com/ermek75743/ermek75753.github.io", github:"https://github.com/ermek75743" ,role: "Student", wpm: 28, commits: 6655 },
    { name: "Aiymkys", io:"https://github.com/soltonbekov-aiymkyz/soltonbekov-aiymkyz.github.io", github:"https://github.com/soltonbekov-aiymkyz", role: "Student", wpm: 37, commits: 226 },
    { name: "Keremet", io:"https://github.com/jumabekovakeremet/jumabekovakeremet.github.io/", github:"https://github.com/jumabekovakeremet", role: "Student", wpm: 41, commits: 999 },
    { name: "Karylgach", io:"https://github.com/Karlygachbakytova/Karlygachbakytova.github.io", github:"https://github.com/Karlygachbakytova", role: "Student", wpm: 25, commits: 66 },
    { name: "Keremet", io:"https://github.com/keremet-kerimova/keremet-kerimova.github.io", github:"https://github.com/keremet-kerimova", photo:"https://avatars.githubusercontent.com/u/75364381?s=460&u=45e3b4a4b507e9aa2183b3241f23a50bee90a033&v=4" , role: "Student", wpm: 32, commits: 52 },
    { name: "Kutman", io:"https://github.com/kutman-batyrkanov/kutman-batyrkanov.github.io", github:"https://github.com/kutman-batyrkanov", role: "Student", wpm: 33, commits: 99 },
    { name: "Chyngyz", io:"https://github.com/chyngyzbekbolotov003/chyngyzbekbolotov003.github.io", github:"https://github.com/chyngyzbekbolotov003", role: "Student", wpm: 36, commits: 559 },
  ];

  // const students = persons.filter(person => person.role == "Student");
  // const fast = students.filter(person => person.wpm > 34);
  return (
    <div className="App">
      <PersonList persons={persons} />
    </div>
  );
}
export default App;
