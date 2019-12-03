import pymysql
from main import app, mysql
from flask import jsonify
from flask import flash, request
from werkzeug import generate_password_hash, check_password_hash
import requests
import json
from config import url, headers

@app.route('/games/<title>')
def game_search(title):
    querystring = {"title":title}
    response_json = json.loads(requests.request("GET", url , headers=headers, params=querystring, timeout=5.0).text)
    response_result = response_json['result']
    return requests.request("GET", url , headers=headers, params=querystring, timeout=5.0).text

@app.route('/gamedetails/<title>/<platform>')
def game_details(title, platform):
    querystring = {"platform":platform}
    detail_url = url + '/' + title.replace('%20', ' ')
    print(detail_url)
    response_json = json.loads(requests.request("GET", detail_url, headers=headers, params=querystring, timeout=5.0).text)
    response_result = response_json['result']
    return requests.request("GET", detail_url , headers=headers, params=querystring, timeout=5.0).text

@app.route('/add/user', methods=['POST'])
def add_user():
    try:
        _json = request.json
        _id = int(_json['id'])
        _firstname = _json['first_name']
        _lastname = _json['last_name']
        _emailaddress = _json['email_address']
        _password = _json['password']
        # validate the received values
        if _firstname and _lastname and _emailaddress and _password and request.method == 'POST':
            #do not save password as a plain text
            _hashed_password = generate_password_hash(_password)
            # save edits
            sql = "INSERT INTO users(id, first_name, last_name, email_address, password) VALUES(%s,%s, %s, %s, %s)"
            data = ( _id, _firstname, _lastname, _emailaddress, _hashed_password,)
            conn = mysql.connect()
            cursor = conn.cursor()
            cursor.execute(sql, data)
            conn.commit()
            resp = jsonify('User added successfully!')
            resp.status_code = 200
            return resp
        else:
            return not_found()
    except Exception as e:
        print(e)
    finally:
        cursor.close() 
        conn.close()
		
@app.route('/users')
def users():
	try:
		conn = mysql.connect()
		cursor = conn.cursor(pymysql.cursors.DictCursor)
		cursor.execute("SELECT * FROM users")
		rows = cursor.fetchall()
		resp = jsonify(rows)
		resp.status_code = 200
		return resp
	except Exception as e:
		print(e)
	finally:
		cursor.close() 
		conn.close()
		
@app.route('/user/<id>')
def user(id):
	try:
		conn = mysql.connect()
		cursor = conn.cursor(pymysql.cursors.DictCursor)
		cursor.execute("SELECT * FROM users WHERE id=%s", id)
		row = cursor.fetchone()
		resp = jsonify(row)
		resp.status_code = 200
		return resp
	except Exception as e:
		print(e)
	finally:
		cursor.close() 
		conn.close()

@app.route('/update', methods=['POST'])
def update_user():
	try:
		_json = request.json
		_id = _json['id']
		_name = _json['name']
		_email = _json['email']
		_password = _json['pwd']		
		# validate the received values
		if _name and _email and _password and _id and request.method == 'POST':
			#do not save password as a plain text
			_hashed_password = generate_password_hash(_password)
			# save edits
			sql = "UPDATE tbl_user SET user_name=%s, user_email=%s, user_password=%s WHERE user_id=%s"
			data = (_name, _email, _hashed_password, _id,)
			conn = mysql.connect()
			cursor = conn.cursor()
			cursor.execute(sql, data)
			conn.commit()
			resp = jsonify('User updated successfully!')
			resp.status_code = 200
			return resp
		else:
			return not_found()
	except Exception as e:
		print(e)
	finally:
		cursor.close() 
		conn.close()
		
@app.route('/delete/<int:id>')
def delete_user(id):
	try:
		conn = mysql.connect()
		cursor = conn.cursor()
		cursor.execute("DELETE FROM tbl_user WHERE user_id=%s", (id,))
		conn.commit()
		resp = jsonify('User deleted successfully!')
		resp.status_code = 200
		return resp
	except Exception as e:
		print(e)
	finally:
		cursor.close() 
		conn.close()
		
@app.errorhandler(404)
def not_found(error=None):
    message = {
        'status': 404,
        'message': 'Not Found: ' + request.url,
    }
    resp = jsonify(message)
    resp.status_code = 404

    return resp
		
if __name__ == "__main__":
    app.run()