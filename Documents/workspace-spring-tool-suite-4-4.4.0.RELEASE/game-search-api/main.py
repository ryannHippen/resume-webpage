from flask import Flask
from flaskext.mysql import MySQL
from config import config_db, config_host, config_password, config_user
from config import db_host, db_password, db_schema, db_user

app = Flask(__name__)

mysql = MySQL()

app.config[config_user] = db_user
app.config[config_password] = db_password
app.config[config_db] = db_schema
app.config[config_host] = db_host
mysql.init_app(app)

