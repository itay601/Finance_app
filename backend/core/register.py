import pymysql.cursors
import random
import string
from argon2 import PasswordHasher



def connect_to_db():
    host = '127.0.0.1'
    user = 'root'
    password = 'my-secret-pw'
    dbname = 'USERS'

    # Connect to the database
    connection = pymysql.connect(host=host,
                                user=user,
                                password=password,
                                database=dbname,
                                port=3456,
                                cursorclass=pymysql.cursors.DictCursor)
    
    return connection



def register_new_user(id_,username, email, pWord):
    connection = connect_to_db()
    try:
        with connection.cursor() as cursor:
            ph = PasswordHasher()
            passHash = ph.hash(pWord)
            sql = "INSERT INTO user (id, username, email, password) VALUES (%s, %s, %s, %s)"
            values = (id_,username, email, passHash)
            cursor.execute(sql, values)
        # Commit the changes to the database
        connection.commit()
        print("User registered successfully!")
        return("User registered successfully!")

    except pymysql.Error as e:
        print(f"Error: {e}")
        return None

    finally:
        connection.close()