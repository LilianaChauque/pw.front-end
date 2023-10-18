# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Clima y Transporte con React y API (en proceso)

En esta primera etapa trabaje en la maquetación, dividiendo el espacio de la pantalla en dos, una parte para clima y la otra para transporte, si bien vamos a trabajar luego en este último, decidi hacerlo ahora para no tener mayores problemas llegado el momento.

## Clima
Esta sección se puede observar los distintos datos del clima, de la ciudad de Córdoba, para ello llamamos a una api de clima. En la función _App.js_  utilizo _Api Fetch('https://api.open-meteo.com/v1/forecast?latitude=-31.4135&longitude=-64.181&current=temperature_2m,apparent_temperature,weathercode,windspeed_10m&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,visibility&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&timezone=America%2FSao_Paulo&forecast_days=1')_ y _then_ para acceder y manipular las peticiones y respuestas las cuales se devuelven en un objeto, cuyos datos se guardan en un a constante _const [weatherData, setWeatherData]_, que la llamo en cada componente para así obtener los valores que necesito en cada uno de ellos. Para manejar la demora en la carga de los datos y que no me marque error, utilizo if: _loading_ y (!weatherData || !weatherData.current || !weatherData.hourly || !weatherData.dail), los cuales brindaron los resultados espeados.
Instale chart.js reat-chartjs-2, para realizar los graficos del componente _Hoy.js_ 
En una carpeta descargue imagenes de https://bas.dev/work/meteocons para los distintos estados del tiempo. El termometro utilizado para la temperatura actual es de https://www.npmjs.com/.