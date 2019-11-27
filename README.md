# sparta-workout-tracker
Developed web app, mobile first, for fitness enthusiast that allows for users to track their weight loss with React with Redux, HTML5, CSS3, and Bootstrap 4 for a responsive UI. Used Okta for authentication, and MongoDB for database. Progress weigh-ins are graphed with Chart.js and database interactions are done through Express API, Axios for HTTP requests, and Node.js.

## Installation

Create and activate a Virtual Enviroment ([venv](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/)) within your project before installing dependencies.

Install virtualenv.

```bash
python3 -m pip install --user virtualenv
```

Create your virtualenv.

```bash
python3 -m venv env
```

Activate your virtualenv.

```bash
source env/bin/activate
```

## Project client dependencies

```python
"@okta/okta-react": "^1.2.3",
"@okta/okta-signin-widget": "^3.4.0",
"axios": "^0.19.0",
"chart.js": "^2.9.2",
"moment": "^2.24.0",
"react": "^16.11.0",
"react-chartjs-2": "^2.8.0",
"react-dom": "^16.11.0",
"react-intl": "^3.4.0",
"react-redux": "^7.1.3",
"react-router-dom": "^5.1.2",
"react-scripts": "3.2.0",
"react-transition-group": "^4.3.0",
"reactstrap": "^8.1.1",
"redux": "^4.0.4",
"redux-thunk": "^2.3.0",
"uuid": "^3.3.3"
```

## Project backend dependencies

```python
"body-parser": "^1.19.0",
"concurrently": "^5.0.0",
"express": "^4.17.1",
"mongoose": "^5.7.8"
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
