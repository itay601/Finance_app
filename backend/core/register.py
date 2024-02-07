import pymysql.cursors
import random
import string

##exmple
############## hash -256
import hashlib
password ="1234"
hashed_password = hashlib.sha256(password.encode()).hexdigest()
#print(hashed_password)
#############


import argon2
ph = argon2.PasswordHasher()


def login(db, user, password):
    hash = db.get_password_hash_for_user(user)

    # Verify password, raises exception if wrong.
    ph.verify(hash, password)

    # Now that we have the cleartext password,
    # check the hash's parameters and if outdated,
    # rehash the user's password in the database.
    if ph.check_needs_rehash(hash):
        db.set_password_hash_for_user(user, ph.hash(password))




def register_new_user(id_, username, email, password):
    host = '127.0.0.1'
    user = 'root'
    password = 'my-secret-pw'
    dbname = 'USERS'

    try:
        connection = pymysql.connect(host=host,
                                     user=user,
                                     password=password,
                                     database=dbname,
                                     port=3456,
                                     cursorclass=pymysql.cursors.DictCursor)

        with connection.cursor() as cursor:
            sql = "INSERT INTO user (id, username, email, password) VALUES (%s, %s, %s, %s)"
            values = (id_, username, email, password)

            cursor.execute(sql, values)

        # Commit the changes to the database
        connection.commit()

        return "User registered successfully!"

    except pymysql.Error as e:
        print(f"Error: {e}")

    finally:
        if connection:
            connection.close()
