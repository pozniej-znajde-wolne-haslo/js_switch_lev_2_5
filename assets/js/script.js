const inputFederalState = document.getElementById('bundeslandInfo');
const formOutput = document.getElementById('bundeslandInfoErgebnis');

function check() {
  const transformedInput = inputFederalState.value.toLowerCase();
  // besser keine mutations in den conditions === so a variable for transformed input

  switch (transformedInput) {
    case "baden-württemberg":
      formOutput.innerHTML = "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt";
      break;
    case "bayern":
        formOutput.innerHTML = "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt";
        break;
    case "berlin":
      formOutput.innerHTML = "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt";
      break;
    case "brandenburg":
      formOutput.innerHTML = "Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt";
      break;
    case "bremen":
      formOutput.innerHTML = "Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt";
      break;
    case "hamburg":
      formOutput.innerHTML = "Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt";
      break;
    case "hessen":
      formOutput.innerHTML = "Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt";
      break;
    case "mecklenburg-vorpommern":
      formOutput.innerHTML = "Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt";
      break;
    case "niedersachsen":
      formOutput.innerHTML = "Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt";
      break;
    case "nordrhein-westfalen":
      formOutput.innerHTML = "Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt";
      break;
    case "rheinland-pfalz":
      formOutput.innerHTML = "Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt";
      break;
    case "saarland":
      formOutput.innerHTML = "Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt";
      break;
    case "sachsen":
      formOutput.innerHTML = "Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt";
      break;
    case "sachsen-anhalt":
      formOutput.innerHTML = "Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt";
      break;
    case "schleswig-holstein":
      formOutput.innerHTML = "Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt";
      break;
    case "thüringen":
      formOutput.innerHTML === "Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt";
      break;
    default:
      formOutput.innerHTML = "Ein solches Bundesland gibt es in Deutschland nicht";
  }
}


